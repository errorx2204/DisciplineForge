const {
  createAssignment,
  getAssignmentsByUserId,
  completeAssignment,
} = require("../models/assignmentModel");

// Create Assignment
const addAssignment = (req, res) => {
  const {
    subject,
    title,
    deadline,
    priority,
  } = req.body;

  if (
    !subject ||
    !title ||
    !deadline ||
    !priority
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  createAssignment(
    req.user.id,
    subject,
    title,
    deadline,
    priority,
    (err, assignmentId) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to create assignment",
        });
      }

      return res.status(201).json({
        message: "Assignment created successfully",
        assignmentId,
      });
    }
  );
};

// Get User Assignments
const getAssignments = (req, res) => {
  getAssignmentsByUserId(
    req.user.id,
    (err, assignments) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to fetch assignments",
        });
      }

      return res.status(200).json(assignments);
    }
  );
};

// Complete Assignment
const markAssignmentComplete = (
  req,
  res
) => {
  const { id } = req.params;

  completeAssignment(id, (err, changes) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to complete assignment",
      });
    }

    if (changes === 0) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    return res.status(200).json({
      message:
        "Assignment completed successfully",
    });
  });
};

module.exports = {
  addAssignment,
  getAssignments,
  markAssignmentComplete,
};