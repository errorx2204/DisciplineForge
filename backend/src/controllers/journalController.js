const {
  createJournalEntry,
  getJournalEntriesByUserId,
} = require("../models/journalModel");

// Create Journal Entry
const addJournalEntry = (req, res) => {
  const { title, content, mood } = req.body;

  if (!title || !content || !mood) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  createJournalEntry(
    req.user.id,
    title,
    content,
    mood,
    (err, entryId) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to create journal entry",
        });
      }

      return res.status(201).json({
        message: "Journal entry created successfully",
        entryId,
      });
    }
  );
};

// Get Journal Entries
const getJournalEntries = (req, res) => {
  getJournalEntriesByUserId(
    req.user.id,
    (err, entries) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to fetch journal entries",
        });
      }

      return res.status(200).json(entries);
    }
  );
};

module.exports = {
  addJournalEntry,
  getJournalEntries,
};