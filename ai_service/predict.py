"""
predict.py
==========
Load trained LSTM models and produce next-7-day blood-demand forecasts.

Responsibilities:
  * Lazily load (and cache) each blood group's model + scaler.
  * Build the latest 30-day input window from the dataset and forecast 7 days.
  * Attach recent historical context (for "historical vs predicted" charts).
  * Classify shortage risk (critical / moderate / stable) for each group and
    derive human-readable recommendations used by the /alerts endpoint.

This module is imported by api.py but is also runnable on its own:
    python predict.py            # prints a forecast for every blood group
"""

import os
import pickle
import warnings
from datetime import timedelta

import numpy as np

os.environ.setdefault("TF_CPP_MIN_LOG_LEVEL", "2")
warnings.filterwarnings("ignore")

from tensorflow.keras.models import load_model

import config
from preprocess import load_dataset, build_daily_series, latest_sequence

# Simple in-process caches so models load once per service lifetime.
_MODEL_CACHE = {}
_SCALER_CACHE = {}
_DF_CACHE = {"df": None}


# --------------------------------------------------------------------------- #
# Loading helpers
# --------------------------------------------------------------------------- #
def _get_dataframe(force_reload: bool = False):
    if _DF_CACHE["df"] is None or force_reload:
        _DF_CACHE["df"] = load_dataset()
    return _DF_CACHE["df"]


def _get_model(blood_group: str):
    if blood_group not in _MODEL_CACHE:
        path = config.model_path(blood_group)
        if not os.path.exists(path):
            raise FileNotFoundError(
                f"Model for '{blood_group}' not found at {path}. "
                f"Run `python train_lstm.py` first."
            )
        _MODEL_CACHE[blood_group] = load_model(path, compile=False)
    return _MODEL_CACHE[blood_group]


def _get_scaler(blood_group: str):
    if blood_group not in _SCALER_CACHE:
        path = config.scaler_path(blood_group)
        if not os.path.exists(path):
            raise FileNotFoundError(
                f"Scaler for '{blood_group}' not found at {path}. "
                f"Run `python train_lstm.py` first."
            )
        with open(path, "rb") as f:
            _SCALER_CACHE[blood_group] = pickle.load(f)
    return _SCALER_CACHE[blood_group]


def clear_caches():
    """Drop cached models/scalers/data — called after retraining."""
    _MODEL_CACHE.clear()
    _SCALER_CACHE.clear()
    _DF_CACHE["df"] = None


def models_available() -> bool:
    """True only if every blood group has a trained model + scaler on disk."""
    return all(
        os.path.exists(config.model_path(bg)) and os.path.exists(config.scaler_path(bg))
        for bg in config.BLOOD_GROUPS
    )


# --------------------------------------------------------------------------- #
# Risk classification
# --------------------------------------------------------------------------- #
def _estimate_capacity(df, blood_group: str) -> float:
    """
    Estimate the daily supply capacity for a blood group: the trailing average
    of total daily demand scaled by a safety factor. This represents the stock
    level a blood bank plans to keep on hand to comfortably meet normal demand,
    and is used as the denominator for the risk ratio.

    (Using `fulfilled` here would be wrong — it is bounded above by `requests`,
    so demand would always exceed it and every group would falsely alert.)
    """
    sub = df[df["blood_group"] == blood_group]
    daily_demand = sub.groupby("date")["requests"].sum().sort_index()
    recent = daily_demand.tail(config.CAPACITY_LOOKBACK_DAYS)
    baseline = float(recent.mean()) if len(recent) else 0.0
    capacity = baseline * config.CAPACITY_SAFETY_FACTOR
    return max(capacity, 1.0)  # avoid divide-by-zero


def classify_risk(predicted: list, capacity: float) -> dict:
    """
    Compare average predicted demand against capacity and bucket the risk.
    Also reports the first day demand is expected to exceed capacity.
    """
    avg_demand = float(np.mean(predicted)) if predicted else 0.0
    ratio = avg_demand / capacity

    if ratio >= config.RISK_CRITICAL_RATIO:
        level = "critical"
    elif ratio >= config.RISK_MODERATE_RATIO:
        level = "moderate"
    else:
        level = "stable"

    # Day index (1-based) of the first predicted shortage.
    shortage_day = None
    for i, value in enumerate(predicted, start=1):
        if value > capacity:
            shortage_day = i
            break

    return {
        "level": level,
        "ratio": round(ratio, 3),
        "avg_demand": round(avg_demand, 1),
        "capacity": round(capacity, 1),
        "shortage_in_days": shortage_day,
    }


def build_recommendation(blood_group: str, risk: dict) -> str:
    """Produce an actionable, human-readable recommendation string."""
    level = risk["level"]
    day = risk["shortage_in_days"]

    if level == "critical":
        when = f"in {day} day{'s' if day != 1 else ''}" if day else "within the forecast window"
        return (
            f"Predicted {blood_group} shortage {when} — notify {blood_group} donors "
            f"immediately and coordinate emergency transfers."
        )
    if level == "moderate":
        return (
            f"{blood_group} demand is trending up — schedule a donation drive and "
            f"alert standby donors this week."
        )
    return f"{blood_group} stock is stable — maintain routine collection schedule."


# --------------------------------------------------------------------------- #
# Forecasting
# --------------------------------------------------------------------------- #
def forecast_blood_group(blood_group: str, history_days: int = 30) -> dict:
    """
    Forecast the next HORIZON days for one blood group and bundle it with
    historical context and risk classification.
    """
    if blood_group not in config.BLOOD_GROUPS:
        raise ValueError(f"Unknown blood group '{blood_group}'.")

    df = _get_dataframe()
    series = build_daily_series(df, blood_group)
    scaler = _get_scaler(blood_group)
    model = _get_model(blood_group)

    # Predict the scaled 7-day vector from the latest 30-day window.
    x = latest_sequence(series, scaler, config.LOOKBACK)
    pred_scaled = model.predict(x, verbose=0)
    predicted = scaler.inverse_transform(pred_scaled).flatten()
    predicted = [max(0, int(round(v))) for v in predicted]

    last_date = series.index.max()
    forecast = [
        {
            "date": (last_date + timedelta(days=i + 1)).strftime("%Y-%m-%d"),
            "predicted": predicted[i],
        }
        for i in range(len(predicted))
    ]

    # Recent history for the "historical vs predicted" chart.
    hist_series = series.tail(history_days)
    history = [
        {"date": d.strftime("%Y-%m-%d"), "demand": int(v)}
        for d, v in hist_series.items()
    ]

    capacity = _estimate_capacity(df, blood_group)
    risk = classify_risk(predicted, capacity)
    recommendation = build_recommendation(blood_group, risk)

    return {
        "blood_group": blood_group,
        "history": history,
        "forecast": forecast,
        "total_predicted": int(sum(predicted)),
        "avg_predicted": round(float(np.mean(predicted)), 1),
        "risk": risk,
        "recommendation": recommendation,
    }


def forecast_all(history_days: int = 30) -> dict:
    """Forecast every blood group."""
    return {bg: forecast_blood_group(bg, history_days) for bg in config.BLOOD_GROUPS}


def build_alerts() -> list:
    """
    Run forecasts for every group and return only the actionable alerts
    (critical first, then moderate), each with a recommendation.
    """
    alerts = []
    for bg, result in forecast_all().items():
        risk = result["risk"]
        if risk["level"] in ("critical", "moderate"):
            alerts.append(
                {
                    "blood_group": bg,
                    "level": risk["level"],
                    "shortage_in_days": risk["shortage_in_days"],
                    "avg_demand": risk["avg_demand"],
                    "capacity": risk["capacity"],
                    "recommendation": result["recommendation"],
                }
            )
    order = {"critical": 0, "moderate": 1}
    alerts.sort(key=lambda a: (order[a["level"]], a["shortage_in_days"] or 99))
    return alerts


if __name__ == "__main__":
    if not models_available():
        raise SystemExit("Models not found. Run `python train_lstm.py` first.")
    for bg, result in forecast_all().items():
        r = result["risk"]
        preds = [f["predicted"] for f in result["forecast"]]
        print(f"{bg:>3} [{r['level']:>8}] next 7 days: {preds}  -> {result['recommendation']}")
