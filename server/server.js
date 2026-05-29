import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoute.js";
import authRoutes from "./routes/authRoutes.js";
import inventory from "./routes/inventoryRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// === dotenv config ===
dotenv.config();

// === mongodb connection ===
connectDB();

// === ES Module dirname fix ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === rest object ===
const app = express();

// === middlewares ===
app.use(express.json());
app.use(cors());

// === API routes ===
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/inventory", inventory);
app.use("/api/v1/analytics", analyticsRoutes);
app.use("/api/v1/admin", adminRoutes);

// === Serve frontend static files ===
app.use(express.static(path.join(__dirname, "../client/dist")));

// === React routing support ===
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// === port ===
const PORT = process.env.PORT || 8080;

// === listener ===
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});