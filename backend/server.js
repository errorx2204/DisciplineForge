const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const initializeDatabase = require("./src/database/initDB");

const authRoutes = require("./src/routes/authRoutes");
const habitRoutes = require("./src/routes/habitRoutes");
const shadowSealRoutes = require("./src/routes/shadowSealRoutes");
const assignmentRoutes = require("./src/routes/assignmentRoutes");
const weightRoutes = require("./src/routes/weightRoutes");
const journalRoutes = require("./src/routes/journalRoutes");
const analyticsRoutes = require("./src/routes/analyticsRoutes");

const errorHandler = require(
  "./src/middleware/errorMiddleware"
);

// Load environment variables
dotenv.config();

const app = express();

// Initialize Database
initializeDatabase();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "DisciplineForge Backend is Running 🚀",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/shadow-seal", shadowSealRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/weights", weightRoutes);
app.use("/api/journal", journalRoutes);
app.use("/api/analytics", analyticsRoutes);

// Global Error Handler
// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});