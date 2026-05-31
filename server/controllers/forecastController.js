import axios from "axios";

// === AI service base URL (FastAPI). Override via AI_SERVICE_URL in .env ===
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || "http://localhost:8080";

// Shared axios client for the Python forecasting service.
const aiClient = axios.create({
  baseURL: AI_SERVICE_URL,
  timeout: 20000,
});

const VALID_BLOOD_GROUPS = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

// === Translate AI-service / network errors into clean HTTP responses ===
const handleAIError = (error, res) => {
  console.log(error?.message || error);

  // FastAPI responded with an error status.
  if (error.response) {
    return res.status(error.response.status).send({
      success: false,
      message:
        error.response.data?.detail ||
        "AI forecasting service returned an error.",
    });
  }

  // Could not reach the AI service at all.
  return res.status(503).send({
    success: false,
    message:
      "AI forecasting service is unavailable. Ensure the FastAPI service " +
      "is running (uvicorn api:app --port 8000).",
  });
};

// === GET next 7-day forecast for a single blood group ===
export const getForecastController = async (req, res) => {
  try {
    const bloodGroup = req.params.bloodGroup;

    if (!VALID_BLOOD_GROUPS.includes(bloodGroup)) {
      return res.status(400).send({
        success: false,
        message: `Invalid blood group. Valid: ${VALID_BLOOD_GROUPS.join(", ")}`,
      });
    }

    // Encode so "O+" survives as a path segment ("O%2B").
    const { data } = await aiClient.get(
      `/forecast/${encodeURIComponent(bloodGroup)}`,
    );

    return res.status(200).send({
      success: true,
      message: "Forecast fetched successfully!",
      forecast: data,
    });
  } catch (error) {
    return handleAIError(error, res);
  }
};

// === GET forecast for all blood groups ===
export const getAllForecastController = async (req, res) => {
  try {
    const { data } = await aiClient.get("/forecast/all");

    return res.status(200).send({
      success: true,
      message: "All forecasts fetched successfully!",
      ...data,
    });
  } catch (error) {
    return handleAIError(error, res);
  }
};

// === GET shortage alerts (critical / moderate) ===
export const getAlertsController = async (req, res) => {
  try {
    const { data } = await aiClient.get("/alerts");

    return res.status(200).send({
      success: true,
      message: "Alerts fetched successfully!",
      ...data,
    });
  } catch (error) {
    return handleAIError(error, res);
  }
};
