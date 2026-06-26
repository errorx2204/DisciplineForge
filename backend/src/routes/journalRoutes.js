const express = require("express");

const {
  addJournalEntry,
  getJournalEntries,
} = require("../controllers/journalController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Create Journal Entry
router.post("/", protect, addJournalEntry);

// Get Journal Entries
router.get("/", protect, getJournalEntries);

module.exports = router;