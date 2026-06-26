const express = require("express");

const {
  register,
  login,
  getProfile,
} = require("../controllers/authController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Test Route
router.get("/test", (req, res) => {
  res.json({
    message: "Auth route working successfully 🚀",
  });
});

// Register Route
router.post("/register", register);

// Login Route
router.post("/login", login);

// Get Logged-in User Profile
router.get("/profile", protect, getProfile);

module.exports = router;