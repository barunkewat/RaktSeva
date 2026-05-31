"""
train_lstm.py
=============
Train one stacked-LSTM multi-step forecaster per blood group.

Architecture (per blood group):
    Input (30 timesteps, 1 feature)
      -> LSTM(64, return_sequences=True)
      -> Dropout(0.2)
      -> LSTM(32)
      -> Dropout(0.2)
      -> Dense(16, relu)
      -> Dense(7)                # 7-day multi-step output

    Optimizer : Adam
    Loss      : Mean Squared Error
    Callback  : EarlyStopping (restore best weights)

For every blood group the script:
  * trains the model,
  * evaluates MAE and RMSE on the held-out test set (in real request units),
  * saves the model to ai_service/models/lstm_<group>.h5,
  * saves the fitted MinMaxScaler to ai_service/models/scaler_<group>.pkl.

Run:
    python train_lstm.py
"""

import os
import pickle
import warnings

import numpy as np

# Keep TensorFlow logs quiet unless something is actually wrong.
os.environ.setdefault("TF_CPP_MIN_LOG_LEVEL", "2")
warnings.filterwarnings("ignore")

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout, Input
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.metrics import mean_absolute_error, mean_squared_error

import config
from preprocess import load_dataset, prepare_blood_group

tf.random.set_seed(config.RANDOM_SEED)
np.random.seed(config.RANDOM_SEED)


def build_model(lookback: int, horizon: int) -> Sequential:
    """Stacked LSTM with dropout for multi-step regression."""
    model = Sequential(
        [
            Input(shape=(lookback, 1)),
            LSTM(config.LSTM_UNITS_1, return_sequences=True),
            Dropout(config.DROPOUT),
            LSTM(config.LSTM_UNITS_2),
            Dropout(config.DROPOUT),
            Dense(16, activation="relu"),
            Dense(horizon),
        ]
    )
    model.compile(optimizer=Adam(learning_rate=config.LEARNING_RATE), loss="mse")
    return model


def evaluate(model, data) -> dict:
    """Compute MAE / RMSE on the test set in original request units."""
    scaler = data["scaler"]
    X_test, y_test = data["X_test"], data["y_test"]

    if len(X_test) == 0:
        return {"mae": None, "rmse": None}

    pred_scaled = model.predict(X_test, verbose=0)

    # Inverse-transform both predictions and targets back to real units.
    pred = scaler.inverse_transform(pred_scaled)
    true = scaler.inverse_transform(y_test)

    mae = mean_absolute_error(true, pred)
    rmse = np.sqrt(mean_squared_error(true, pred))
    return {"mae": float(mae), "rmse": float(rmse)}


def train_blood_group(df, blood_group: str) -> dict:
    print(f"\n=== Training LSTM for {blood_group} ===")
    data = prepare_blood_group(df, blood_group)

    model = build_model(config.LOOKBACK, config.HORIZON)
    early_stop = EarlyStopping(
        monitor="val_loss",
        patience=config.EARLY_STOPPING_PATIENCE,
        restore_best_weights=True,
    )

    model.fit(
        data["X_train"],
        data["y_train"],
        validation_split=0.15,
        epochs=config.EPOCHS,
        batch_size=config.BATCH_SIZE,
        callbacks=[early_stop],
        verbose=0,
    )

    metrics = evaluate(model, data)

    # Persist model (.h5) and its scaler.
    model.save(config.model_path(blood_group))
    with open(config.scaler_path(blood_group), "wb") as f:
        pickle.dump(data["scaler"], f)

    mae = metrics["mae"]
    rmse = metrics["rmse"]
    print(
        f"  Saved model -> {os.path.basename(config.model_path(blood_group))}"
        f"  | MAE: {mae:.2f}  RMSE: {rmse:.2f}"
        if mae is not None
        else "  Saved model (test set empty - metrics skipped)"
    )
    return {"blood_group": blood_group, **metrics}


def main():
    df = load_dataset()
    print(f"Loaded dataset with {len(df):,} rows.")
    print(f"Training {len(config.BLOOD_GROUPS)} models "
          f"(lookback={config.LOOKBACK}, horizon={config.HORIZON})")

    results = []
    for bg in config.BLOOD_GROUPS:
        results.append(train_blood_group(df, bg))

    print("\n================ Evaluation Summary ================")
    print(f"{'Blood Group':<12}{'MAE':>10}{'RMSE':>10}")
    print("-" * 32)
    for r in results:
        mae = f"{r['mae']:.2f}" if r["mae"] is not None else "n/a"
        rmse = f"{r['rmse']:.2f}" if r["rmse"] is not None else "n/a"
        print(f"{r['blood_group']:<12}{mae:>10}{rmse:>10}")
    print("=" * 52)
    print(f"\nAll models saved in: {config.MODELS_DIR}")


if __name__ == "__main__":
    main()
