"""
generate_blood_dataset.py
==========================
Generate 2 years of realistic *synthetic* daily blood-demand data for all 8 blood
groups across multiple hospitals and cities.

The generator deliberately bakes in the real-world patterns a forecasting model
should learn:

  * Baseline demand proportional to each blood group's real-world frequency
  * Weekly seasonality (weekday vs weekend behaviour)
  * Seasonal fluctuations (winter/summer demand differences)
  * Emergency spikes (random high-demand days, flagged)
  * Accident-related random demand bursts
  * Hospital-specific variation
  * City-based variation
  * Random noise

Output CSV columns:
    date, blood_group, requests, fulfilled, hospital, city,
    emergency_flag, day_of_week, season

Run:
    python generate_blood_dataset.py
"""

import numpy as np
import pandas as pd

import config


def _hospital_multipliers(rng: np.random.Generator) -> dict:
    """Stable per-hospital and per-city demand multipliers."""
    hospital_mult = {}
    city_mult = {}
    for name, city in config.HOSPITALS:
        # Larger / busier hospitals request more blood.
        hospital_mult[name] = rng.uniform(0.7, 1.4)
        if city not in city_mult:
            # Metro cities (more accidents, bigger population) skew higher.
            city_mult[city] = rng.uniform(0.85, 1.25)
    return hospital_mult, city_mult


def generate_dataset() -> pd.DataFrame:
    rng = np.random.default_rng(config.RANDOM_SEED)
    hospital_mult, city_mult = _hospital_multipliers(rng)

    end = pd.to_datetime(config.DATA_END_DATE)
    dates = pd.date_range(end=end, periods=config.HISTORY_DAYS, freq="D")

    # Weekly seasonality factor per weekday (Mon=0 ... Sun=6).
    # Mid-week elective surgeries push demand up; weekends dip but stay volatile.
    weekday_factor = {0: 1.05, 1: 1.10, 2: 1.12, 3: 1.08, 4: 1.00, 5: 0.85, 6: 0.80}

    # Seasonal factor: winter peaks (illness), summer rises (road accidents).
    season_factor = {"Winter": 1.18, "Spring": 0.98, "Summer": 1.10, "Autumn": 1.00}

    rows = []
    for date in dates:
        dow = int(date.dayofweek)
        day_name = date.day_name()
        season = config.SEASONS[date.month]

        for name, city in config.HOSPITALS:
            for bg in config.BLOOD_GROUPS:
                # --- Baseline scaled by real-world blood-group frequency ---
                freq = config.BLOOD_GROUP_FREQUENCY[bg]
                base = max(1.0, freq / 2.0)  # e.g. O+ ~18, AB- ~1

                value = base
                value *= weekday_factor[dow]
                value *= season_factor[season]
                value *= hospital_mult[name]
                value *= city_mult[city]

                # --- Emergency spikes (flagged high-demand days) ---
                emergency_flag = 0
                if rng.random() < 0.04:
                    emergency_flag = 1
                    value *= rng.uniform(1.8, 3.2)

                # --- Accident-related random demand bursts ---
                if rng.random() < 0.02:
                    value += rng.poisson(base * 1.5)

                # --- Random noise ---
                value += rng.normal(0, max(1.0, base * 0.15))

                requests = int(max(0, round(value)))

                # Fulfilment is capped by supply: usually 80-100% of requests.
                fulfilled = int(round(requests * rng.uniform(0.78, 1.0)))
                fulfilled = min(fulfilled, requests)

                rows.append(
                    {
                        "date": date.strftime("%Y-%m-%d"),
                        "blood_group": bg,
                        "requests": requests,
                        "fulfilled": fulfilled,
                        "hospital": name,
                        "city": city,
                        "emergency_flag": emergency_flag,
                        "day_of_week": day_name,
                        "season": season,
                    }
                )

    df = pd.DataFrame(rows)
    return df


def main():
    print("Generating synthetic blood-demand dataset...")
    df = generate_dataset()
    df.to_csv(config.DATASET_PATH, index=False)

    print(f"  Saved {len(df):,} rows -> {config.DATASET_PATH}")
    print(f"  Date range : {df['date'].min()} -> {df['date'].max()}")
    print(f"  Hospitals  : {df['hospital'].nunique()}  |  Cities: {df['city'].nunique()}")
    print(f"  Blood groups: {df['blood_group'].nunique()}")
    print("\nSample (daily total requests per blood group):")
    daily = (
        df.groupby(["date", "blood_group"])["requests"].sum().reset_index()
    )
    print(daily.groupby("blood_group")["requests"].mean().round(1).to_string())


if __name__ == "__main__":
    main()
