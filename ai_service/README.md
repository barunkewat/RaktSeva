# RaktSeva — AI-Powered Blood Demand Forecasting (LSTM)

> **AI-Powered Blood Demand Forecasting System using LSTM for Smart Hospital Blood
> Inventory Management — integrated into RaktSeva.**

A deep-learning, time-series forecasting micro-service that predicts the next
**7 days** of blood demand for all **8 blood groups** (O+, O-, A+, A-, B+, B-,
AB+, AB-) and surfaces intelligent shortage alerts inside the RaktSeva admin
dashboard.

The service is a self-contained FastAPI app. The Node/Express backend proxies to
it, and the React admin dashboard renders the forecasts with Chart.js.

```
RaktSeva/
├── client/                 # React + Vite frontend  (a.k.a. "frontend")
│   └── src/pages/Admin/Forecast.jsx   <-- forecast dashboard
├── server/                 # Node + Express backend (a.k.a. "backend")
│   ├── controllers/forecastController.js
│   └── routes/forecastRoutes.js
└── ai_service/             # THIS folder — Python AI micro-service
    ├── config.py                  # all tunable settings
    ├── generate_blood_dataset.py  # synthetic 2-year dataset generator
    ├── preprocess.py              # MinMax scaling + 30-day sliding windows
    ├── train_lstm.py              # per-group stacked-LSTM training + MAE/RMSE
    ├── predict.py                 # load models, forecast, classify risk
    ├── api.py                     # FastAPI: /forecast, /alerts, /retrain
    ├── requirements.txt
    ├── dataset/                   # generated CSV lands here
    └── models/                    # trained .h5 models + scalers land here
```

---

## 1. Architecture & pipeline

```
generate_blood_dataset.py → dataset/blood_demand.csv
        │
        ▼
preprocess.py   (aggregate daily series per group → MinMaxScaler → 30-day windows → train/test)
        │
        ▼
train_lstm.py   (8 stacked-LSTM models, EarlyStopping, MAE/RMSE) → models/*.h5 + scaler_*.pkl
        │
        ▼
predict.py      (latest 30 days → 7-day forecast → risk classification → recommendations)
        │
        ▼
api.py (FastAPI :8000)  ←—axios——  server/ (Express :8080 /api/v1/forecast/*)  ←——  client/ (React)
```

**Model architecture (per blood group):**
`LSTM(64, return_sequences) → Dropout(0.2) → LSTM(32) → Dropout(0.2) → Dense(16, relu) → Dense(7)`
Optimizer Adam · Loss MSE · EarlyStopping(restore best weights). One model + one
`MinMaxScaler` is trained and saved per blood group.

---

## 2. Installation

```bash
cd ai_service

# (recommended) create an isolated environment
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

pip install -r requirements.txt
```

> TensorFlow is a large download (~400 MB). On Apple Silicon, if the default
> `tensorflow` wheel is unavailable, use `pip install tensorflow-macos` instead.

---

## 3. Train the models

```bash
# 1) Generate 2 years of synthetic data  -> dataset/blood_demand.csv
python generate_blood_dataset.py

# 2) Train one LSTM per blood group       -> models/lstm_*.h5 + scaler_*.pkl
python train_lstm.py
```

`train_lstm.py` prints an MAE / RMSE table for all 8 groups, e.g.:

```
================ Evaluation Summary ================
Blood Group        MAE      RMSE
--------------------------------
O+               12.40     16.10
O-                3.10      4.05
...
```

Sanity-check the predictions without the API:

```bash
python predict.py
```

---

## 4. Run the FastAPI service

```bash
uvicorn api:app --host 0.0.0.0 --port 8000 --reload
# or:  python api.py
```

Interactive docs: <http://localhost:8000/docs>

### Endpoints

| Method | Path                      | Description                                   |
|--------|---------------------------|-----------------------------------------------|
| GET    | `/forecast/{blood_group}` | 7-day forecast for one group (e.g. `O%2B`)    |
| GET    | `/forecast/all`           | 7-day forecast for all 8 groups               |
| GET    | `/alerts`                 | Shortage alerts (critical/moderate) + advice  |
| POST   | `/retrain`                | Regenerate data + retrain all models (async)  |
| GET    | `/health`                 | Readiness + whether models are trained        |

> Blood groups in the URL must be encoded — `O+` → `O%2B`. The dashboard and the
> Node proxy handle this automatically.

Quick test:

```bash
curl http://localhost:8000/forecast/all
curl http://localhost:8000/alerts
curl http://localhost:8000/forecast/O%2B
```

---

## 5. Connect the Node backend

The Express server proxies to this service. Add to `server/.env`:

```env
AI_SERVICE_URL=http://localhost:8000
```

Express exposes (admin-JWT protected):

| Method | Path                            | Proxies to                  |
|--------|---------------------------------|-----------------------------|
| GET    | `/api/v1/forecast/all`          | `GET /forecast/all`         |
| GET    | `/api/v1/forecast/alerts`       | `GET /alerts`               |
| GET    | `/api/v1/forecast/:bloodGroup`  | `GET /forecast/{group}`     |

Run the backend:

```bash
cd ../server
npm install            # installs the newly added axios dependency
npm run server         # http://localhost:8080
```

---

## 6. Connect the frontend dashboard

The dashboard lives at `client/src/pages/Admin/Forecast.jsx`, route **`/forecast`**
(linked from the admin menu and the admin home quick-actions).

```bash
cd ../client
npm install            # installs chart.js + react-chartjs-2
npm run dev            # http://localhost:5173
```

Ensure `client/.env` has the API base URL the rest of the app already uses:

```env
VITE_BASEURL=http://localhost:8080/api/v1
```

Log in as an **admin** → open **Demand Forecast**. The dashboard shows:
interactive historical-vs-predicted line charts, per-group forecast cards, red/
yellow/green risk badges, smart shortage alerts, recommendation cards, a 7-day
prediction table, and hospital preparedness recommendations.

---

## 7. Automatic periodic retraining

Two options:

**A. Built-in scheduler (APScheduler).** Enable via env before starting the API:

```bash
ENABLE_AUTO_RETRAIN=true RETRAIN_INTERVAL_HOURS=168 uvicorn api:app --port 8000
```

This regenerates the dataset and retrains every `RETRAIN_INTERVAL_HOURS` (default
weekly) in a background thread, then hot-swaps the in-memory models.

**B. On-demand / external cron.** Hit the endpoint:

```bash
curl -X POST http://localhost:8000/retrain
```

…or schedule the scripts directly with system cron:

```cron
# Retrain every Sunday at 02:00
0 2 * * 0  cd /path/to/RaktSeva/ai_service && ./venv/bin/python generate_blood_dataset.py && ./venv/bin/python train_lstm.py
```

---

## 8. Full local run order (TL;DR)

```bash
# Terminal 1 — AI service
cd ai_service && source venv/bin/activate
python generate_blood_dataset.py && python train_lstm.py
uvicorn api:app --port 8000

# Terminal 2 — backend
cd server && npm install && npm run server     # :8080

# Terminal 3 — frontend
cd client && npm install && npm run dev         # :5173
```

Open the app → log in as admin → **Demand Forecast**.

---

## 9. Configuration reference (`config.py`)

| Setting | Default | Meaning |
|---|---|---|
| `LOOKBACK` | 30 | Days of history fed to the LSTM |
| `HORIZON` | 7 | Days forecast ahead |
| `TRAIN_SPLIT` | 0.8 | Chronological train/test ratio |
| `EPOCHS` / `BATCH_SIZE` | 80 / 16 | Training schedule |
| `RISK_CRITICAL_RATIO` | 1.10 | demand/capacity ≥ → critical |
| `RISK_MODERATE_RATIO` | 0.90 | demand/capacity ≥ → moderate |
| `CAPACITY_LOOKBACK_DAYS` | 60 | Trailing window for supply capacity |
| `ENABLE_AUTO_RETRAIN` | false | Turn on the APScheduler job |
| `RETRAIN_INTERVAL_HOURS` | 168 | Retrain cadence (weekly) |
