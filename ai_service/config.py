"""
config.py
=========
Central configuration for the RaktSeva AI Blood Demand Forecasting service.

Keeping every tunable knob in one place makes the pipeline (generate -> preprocess
-> train -> predict -> serve) reproducible and easy to reason about.
"""

import os

# --------------------------------------------------------------------------- #
# Paths
# --------------------------------------------------------------------------- #
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATASET_DIR = os.path.join(BASE_DIR, "dataset")
MODELS_DIR = os.path.join(BASE_DIR, "models")

DATASET_PATH = os.path.join(DATASET_DIR, "blood_demand.csv")

os.makedirs(DATASET_DIR, exist_ok=True)
os.makedirs(MODELS_DIR, exist_ok=True)

# --------------------------------------------------------------------------- #
# Domain constants
# --------------------------------------------------------------------------- #
BLOOD_GROUPS = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]

# Relative real-world distribution of blood groups (approximate global %).
# Used to scale the baseline daily demand so O+ is common and AB- is rare.
BLOOD_GROUP_FREQUENCY = {
    "O+": 37.4,
    "A+": 35.7,
    "B+": 8.5,
    "AB+": 3.4,
    "O-": 6.6,
    "A-": 6.3,
    "B-": 1.5,
    "AB-": 0.6,
}

# Hospitals and the city each belongs to (used for hospital/city variation).
HOSPITALS = [
    ("City General Hospital", "Mumbai"),
    ("Apollo Care Centre", "Mumbai"),
    ("Sunrise Multispeciality", "Delhi"),
    ("Lifeline Hospital", "Delhi"),
    ("Grace Medical Institute", "Bengaluru"),
    ("St. John's Medical", "Chennai"),
]

SEASONS = {
    12: "Winter", 1: "Winter", 2: "Winter",
    3: "Spring", 4: "Spring", 5: "Spring",
    6: "Summer", 7: "Summer", 8: "Summer",
    9: "Autumn", 10: "Autumn", 11: "Autumn",
}

# --------------------------------------------------------------------------- #
# Dataset generation
# --------------------------------------------------------------------------- #
RANDOM_SEED = 42
HISTORY_DAYS = 730            # 2 years of daily data
DATA_END_DATE = "2025-12-31"  # last day in the synthetic dataset (fixed for reproducibility)

# --------------------------------------------------------------------------- #
# Sequence / model configuration
# --------------------------------------------------------------------------- #
LOOKBACK = 30                 # days of history fed into the LSTM
HORIZON = 7                   # days predicted into the future (multi-step output)
TRAIN_SPLIT = 0.8             # chronological train/test split ratio

EPOCHS = 80
BATCH_SIZE = 16
LSTM_UNITS_1 = 64
LSTM_UNITS_2 = 32
DROPOUT = 0.2
LEARNING_RATE = 0.001
EARLY_STOPPING_PATIENCE = 10

# --------------------------------------------------------------------------- #
# Shortage-alert thresholds
# --------------------------------------------------------------------------- #
# Risk is derived by comparing predicted demand against each blood group's
# recent supply capacity (its trailing average "fulfilled" value).
#   demand / capacity >= CRITICAL  -> critical (red)
#   demand / capacity >= MODERATE  -> moderate (yellow)
#   otherwise                      -> stable   (green)
RISK_CRITICAL_RATIO = 1.10
RISK_MODERATE_RATIO = 0.90
CAPACITY_LOOKBACK_DAYS = 60   # trailing window used to estimate supply capacity

# Capacity = trailing average daily demand x safety factor. This models the
# stock level a blood bank maintains to comfortably absorb normal demand, so a
# forecast at the usual level reads as "stable" and only genuine upticks alert.
CAPACITY_SAFETY_FACTOR = 1.15

# --------------------------------------------------------------------------- #
# Service / retraining
# --------------------------------------------------------------------------- #
API_HOST = os.getenv("AI_HOST", "0.0.0.0")
API_PORT = int(os.getenv("AI_PORT", "8080"))

# Periodic automatic retraining (handled by APScheduler inside api.py).
ENABLE_AUTO_RETRAIN = os.getenv("ENABLE_AUTO_RETRAIN", "false").lower() == "true"
RETRAIN_INTERVAL_HOURS = int(os.getenv("RETRAIN_INTERVAL_HOURS", "168"))  # weekly


def model_path(blood_group: str) -> str:
    """Return the .h5 model path for a blood group (filesystem-safe name)."""
    return os.path.join(MODELS_DIR, f"lstm_{safe_name(blood_group)}.h5")


def scaler_path(blood_group: str) -> str:
    """Return the scaler pickle path for a blood group."""
    return os.path.join(MODELS_DIR, f"scaler_{safe_name(blood_group)}.pkl")


def safe_name(blood_group: str) -> str:
    """Convert a blood group such as 'O+' into a filesystem-safe token 'O_pos'."""
    return blood_group.replace("+", "_pos").replace("-", "_neg")
