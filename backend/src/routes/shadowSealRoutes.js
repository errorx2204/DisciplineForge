const express = require("express");

const {
  getShadowSeal,
  dailyShadowCheck,
  relapse,
} = require("../controllers/shadowSealController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Get Shadow Seal Data
router.get("/", protect, getShadowSeal);

// Daily Discipline Check
router.post(
  "/check",
  protect,
  dailyShadowCheck
);

// Record Relapse
router.post(
  "/relapse",
  protect,
  relapse
);

module.exports = router;