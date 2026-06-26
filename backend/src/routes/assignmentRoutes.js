const express = require("express");

const {
  addAssignment,
  getAssignments,
  markAssignmentComplete,
} = require("../controllers/assignmentController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Create Assignment
router.post("/", protect, addAssignment);

// Get Assignments
router.get("/", protect, getAssignments);

// Complete Assignment
router.put(
  "/:id/complete",
  protect,
  markAssignmentComplete
);

module.exports = router;