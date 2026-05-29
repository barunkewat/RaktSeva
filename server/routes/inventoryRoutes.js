import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createInventoryController,
  getInventoryController,
  getInventoryHospitalController,
  getRecentInventoryController,
  getDonorsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
} from "../controllers/inventoryController.js";

const router = express.Router();

// === Routes ===
// === ADD INVENTORY || POST ===
router.post("/create-inventory", authMiddleware, createInventoryController);

// === Get all blood records ===
router.get("/get-inventory", authMiddleware, getInventoryController);

// === Get hospital blood records ===
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

// === Get recent blood records ===
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

// === Get donor records ===
router.get("/get-donors", authMiddleware, getDonorsController);

// === Get hospital records ===
router.get("/get-hospitals", authMiddleware, getHospitalController);

// === Get organisation records ===
router.get("/get-organisations", authMiddleware, getOrganisationController);

// === Get organisation records ===
router.get("/get-organisation-for-hospital", authMiddleware, getOrganisationForHospitalController);

export default router;
