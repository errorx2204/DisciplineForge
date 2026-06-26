const db = require("../database/db");

// Create Journal Entry
const createJournalEntry = (
  userId,
  title,
  content,
  mood,
  callback
) => {
  const query = `
    INSERT INTO journal_entries (
      user_id,
      title,
      content,
      mood
    )
    VALUES (?, ?, ?, ?)
  `;

  db.run(
    query,
    [userId, title, content, mood],
    function (err) {
      callback(err, this?.lastID);
    }
  );
};

// Get User Journal Entries
const getJournalEntriesByUserId = (
  userId,
  callback
) => {
  const query = `
    SELECT *
    FROM journal_entries
    WHERE user_id = ?
    ORDER BY entry_date DESC
  `;

  db.all(query, [userId], (err, rows) => {
    callback(err, rows);
  });
};

module.exports = {
  createJournalEntry,
  getJournalEntriesByUserId,
};