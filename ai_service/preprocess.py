"""
preprocess.py
=============
Turn the raw synthetic CSV into model-ready, supervised time-series sequences.

Pipeline:
  1. Load the dataset.
  2. Aggregate to a single daily demand series per blood group
     (sum of requests across all hospitals/cities for that day).
  3. Normalise request values with MinMaxScaler (one scaler per blood group).
  4. Convert the series into sliding-window sequences:
       X = previous LOOKBACK (30) days  ->  y = next HORIZON (7) days
  5. Chronological train/test split (no shuffling — order matters for time series).

These helpers are imported by train_lstm.py and predict.py so the exact same
transformation is applied everywhere.
"""

import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler

import config


def load_dataset(path: str = None) -> pd.DataFrame:
    """Load the raw blood-demand CSV with a parsed date column."""
    path = path or config.DATASET_PATH
    df = pd.read_csv(path, parse_dates=["date"])
    return df


def build_daily_series(df: pd.DataFrame, blood_group: str) -> pd.Series:
    """
    Collapse the multi-hospital data into one continuous daily demand series
    for a single blood group, indexed by date with no gaps.
    """
    sub = df[df["blood_group"] == blood_group]
    series = sub.groupby("date")["requests"].sum().sort_index()

    # Guarantee a continuous daily index (fill any missing day with 0).
    full_index = pd.date_range(series.index.min(), series.index.max(), freq="D")
    series = series.reindex(full_index, fill_value=0)
    series.name = blood_group
    return series


def create_sequences(values: np.ndarray, lookback: int, horizon: int):
    """
    Slide a window across a 1-D array to build supervised samples.

    Returns:
        X of shape (n_samples, lookback, 1)
        y of shape (n_samples, horizon)
    """
    X, y = [], []
    for i in range(len(values) - lookback - horizon + 1):
        X.append(values[i : i + lookback])
        y.append(values[i + lookback : i + lookback + horizon])
    X = np.array(X).reshape(-1, lookback, 1)
    y = np.array(y)
    return X, y


def prepare_blood_group(
    df: pd.DataFrame,
    blood_group: str,
    lookback: int = config.LOOKBACK,
    horizon: int = config.HORIZON,
    train_split: float = config.TRAIN_SPLIT,
):
    """
    Full preprocessing for one blood group.

    Returns a dict with scaled train/test sequences, the fitted scaler and the
    raw series (handy for charting historical context).
    """
    series = build_daily_series(df, blood_group)
    raw_values = series.values.astype("float32").reshape(-1, 1)

    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled = scaler.fit_transform(raw_values).flatten()

    X, y = create_sequences(scaled, lookback, horizon)

    split = int(len(X) * train_split)
    X_train, X_test = X[:split], X[split:]
    y_train, y_test = y[:split], y[split:]

    return {
        "blood_group": blood_group,
        "series": series,
        "scaler": scaler,
        "X_train": X_train,
        "y_train": y_train,
        "X_test": X_test,
        "y_test": y_test,
    }


def latest_sequence(series: pd.Series, scaler: MinMaxScaler, lookback: int = config.LOOKBACK):
    """
    Build the most-recent LOOKBACK-day input window (scaled) used for live
    forecasting in predict.py.
    """
    last_values = series.values.astype("float32")[-lookback:].reshape(-1, 1)
    scaled = scaler.transform(last_values).reshape(1, lookback, 1)
    return scaled


if __name__ == "__main__":
    # Quick sanity check when run directly.
    df = load_dataset()
    print(f"Loaded {len(df):,} rows.")
    for bg in config.BLOOD_GROUPS:
        data = prepare_blood_group(df, bg)
        print(
            f"  {bg:>3} | series={len(data['series'])} days | "
            f"train={data['X_train'].shape} | test={data['X_test'].shape}"
        )
