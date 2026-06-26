const express = require("express");

const {
  addWeight,
  getWeights,
} = require("../controllers/weightController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Add Weight Entry
router.post("/", protect, addWeight);

// Get Weight History
router.get("/", protect, getWeights);

module.exports = router;