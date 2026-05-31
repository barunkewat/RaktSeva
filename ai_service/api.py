"""
api.py
======
FastAPI service exposing the LSTM blood-demand forecasts to the RaktSeva
Node/Express backend.

Endpoints
---------
GET  /                      Health/info
GET  /health                Readiness probe (reports whether models are trained)
GET  /forecast/{blood_group}  Next 7-day forecast for one blood group
GET  /forecast/all          Forecast for all 8 blood groups
GET  /alerts                Shortage alerts (critical / moderate) + recommendations
POST /retrain               Regenerate data + retrain all models (async)

Automatic periodic retraining can be enabled via env vars (see config.py):
    ENABLE_AUTO_RETRAIN=true RETRAIN_INTERVAL_HOURS=168

Run:
    uvicorn api:app --host 0.0.0.0 --port 8080 --reload
"""

import subprocess
import sys
import threading

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import config
import predict

app = FastAPI(
    title="RaktSeva AI Blood Demand Forecasting",
    description="LSTM-based 7-day blood demand forecasting and shortage alerts.",
    version="1.0.0",
)

# Allow the Node backend (and local dev frontends) to call this service.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Guards against overlapping retrains (manual + scheduled).
_retrain_lock = threading.Lock()
_retrain_state = {"running": False, "last_result": None}


# --------------------------------------------------------------------------- #
# Helpers
# --------------------------------------------------------------------------- #
def _require_models():
    if not predict.models_available():
        raise HTTPException(
            status_code=503,
            detail="Models not trained yet. Run `python train_lstm.py` "
            "or call POST /retrain.",
        )


def _run_pipeline():
    """Regenerate the dataset and retrain all models in a worker thread."""
    if not _retrain_lock.acquire(blocking=False):
        return
    try:
        _retrain_state["running"] = True
        # Run as subprocesses so a crash can't take down the API process.
        subprocess.run([sys.executable, "generate_blood_dataset.py"], cwd=config.BASE_DIR, check=True)
        subprocess.run([sys.executable, "train_lstm.py"], cwd=config.BASE_DIR, check=True)
        predict.clear_caches()  # force fresh models/data on next request
        _retrain_state["last_result"] = "success"
    except Exception as exc:  # noqa: BLE001
        _retrain_state["last_result"] = f"failed: {exc}"
    finally:
        _retrain_state["running"] = False
        _retrain_lock.release()


# --------------------------------------------------------------------------- #
# Routes
# --------------------------------------------------------------------------- #
@app.get("/")
def root():
    return {
        "service": "RaktSeva AI Blood Demand Forecasting",
        "version": "1.0.0",
        "blood_groups": config.BLOOD_GROUPS,
        "lookback_days": config.LOOKBACK,
        "horizon_days": config.HORIZON,
        "endpoints": ["/forecast/{blood_group}", "/forecast/all", "/alerts", "/retrain"],
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
        "models_trained": predict.models_available(),
        "retraining": _retrain_state["running"],
        "last_retrain_result": _retrain_state["last_result"],
    }


@app.get("/forecast/all")
def forecast_all():
    _require_models()
    forecasts = predict.forecast_all()
    return {"success": True, "horizon_days": config.HORIZON, "forecasts": forecasts}


@app.get("/alerts")
def alerts():
    _require_models()
    data = predict.build_alerts()
    return {
        "success": True,
        "count": len(data),
        "critical": sum(1 for a in data if a["level"] == "critical"),
        "moderate": sum(1 for a in data if a["level"] == "moderate"),
        "alerts": data,
    }


@app.get("/forecast/{blood_group}")
def forecast_one(blood_group: str):
    _require_models()
    # Normalise URL-encoded plus signs ("O%2B" / "O " -> "O+").
    bg = blood_group.strip().replace(" ", "+").upper()
    if bg not in config.BLOOD_GROUPS:
        raise HTTPException(
            status_code=404,
            detail=f"Unknown blood group '{blood_group}'. Valid: {config.BLOOD_GROUPS}",
        )
    return {"success": True, **predict.forecast_blood_group(bg)}


@app.post("/retrain")
def retrain():
    if _retrain_state["running"]:
        return {"success": True, "status": "already_running"}
    threading.Thread(target=_run_pipeline, daemon=True).start()
    return {"success": True, "status": "started"}


# --------------------------------------------------------------------------- #
# Optional automatic periodic retraining
# --------------------------------------------------------------------------- #
@app.on_event("startup")
def _maybe_schedule_retrain():
    if not config.ENABLE_AUTO_RETRAIN:
        return
    try:
        from apscheduler.schedulers.background import BackgroundScheduler

        scheduler = BackgroundScheduler(daemon=True)
        scheduler.add_job(
            _run_pipeline,
            "interval",
            hours=config.RETRAIN_INTERVAL_HOURS,
            id="auto_retrain",
        )
        scheduler.start()
        print(
            f"[scheduler] Auto-retrain enabled every "
            f"{config.RETRAIN_INTERVAL_HOURS}h."
        )
    except ImportError:
        print("[scheduler] APScheduler not installed; auto-retrain disabled.")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("api:app", host=config.API_HOST, port=config.API_PORT, reload=False)
