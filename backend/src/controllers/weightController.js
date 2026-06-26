const {
  addWeightEntry,
  getWeightHistory,
} = require("../models/weightModel");

// Add Weight Entry
const addWeight = (req, res) => {
  const { weight, notes } = req.body;

  if (!weight) {
    return res.status(400).json({
      message: "Weight is required",
    });
  }

  addWeightEntry(
    req.user.id,
    weight,
    notes || "",
    (err, entryId) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to add weight entry",
        });
      }

      return res.status(201).json({
        message: "Weight entry added successfully",
        entryId,
      });
    }
  );
};

// Get Weight History
const getWeights = (req, res) => {
  getWeightHistory(
    req.user.id,
    (err, weights) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to fetch weight history",
        });
      }

      return res.status(200).json(weights);
    }
  );
};

module.exports = {
  addWeight,
  getWeights,
};