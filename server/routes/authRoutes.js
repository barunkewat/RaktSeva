import express from "express";
import {
  registerController,
  loginController,
  currentUserController,
  updateProfileController,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// === routes ===
// === Register || POST ===
router.post("/register", registerController);

// === Login || POST ===
router.post("/login", loginController);

// === Get current user || GET ===
router.get("/current-user", authMiddleware, currentUserController);

// === Update profile || PUT ===
router.put("/update-profile", authMiddleware, updateProfileController);

export default router;