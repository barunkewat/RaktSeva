import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import {
  getForecastController,
  getAllForecastController,
  getAlertsController,
} from "../controllers/forecastController.js";

// === Router Object ===
const router = express.Router();

// NOTE: static paths (/all, /alerts) are declared BEFORE the dynamic
// /:bloodGroup route so Express does not capture them as a blood group.

// === Forecast for all blood groups (admin only) ===
router.get("/all", authMiddleware, adminMiddleware, getAllForecastController);

// === Shortage alerts (admin only) ===
router.get("/alerts", authMiddleware, adminMiddleware, getAlertsController);

// === Forecast for a single blood group (admin only) ===
router.get(
  "/:bloodGroup",
  authMiddleware,
  adminMiddleware,
  getForecastController,
);

// === Export ===
export default router;
