const express = require("express");

const {
  addHabit,
  getHabits,
  markHabitComplete,
} = require("../controllers/habitController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Create Habit
router.post("/", protect, addHabit);

// Get User Habits
router.get("/", protect, getHabits);

// Complete Habit
router.put("/:id/complete", protect, markHabitComplete);

module.exports = router;