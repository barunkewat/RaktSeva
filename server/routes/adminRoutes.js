import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  getDonorListController,
  getHospitalListController,
  getOrganisationListController,
  deleteController,
} from "../controllers/adminController.js";

// === Router Object ===
const router = express.Router();

// === Routes ===

// === Get Donor List ===
router.get("/donor-list", authMiddleware, getDonorListController);

// === Get Hospital List ===
router.get("/hospital-list", authMiddleware, getHospitalListController);

// === Get Organisation List ===
router.get("/organisation-list", authMiddleware, getOrganisationListController);

// ===================================================================================================
// === Delete donor ===
router.delete("/delete/:id", authMiddleware, deleteController);

// === Export ===
export default router;
