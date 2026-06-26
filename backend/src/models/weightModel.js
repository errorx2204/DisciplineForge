const db = require("../database/db");

// Add Weight Entry
const addWeightEntry = (
  userId,
  weight,
  notes,
  callback
) => {
  const query = `
    INSERT INTO weight_entries (
      user_id,
      weight,
      notes
    )
    VALUES (?, ?, ?)
  `;

  db.run(
    query,
    [userId, weight, notes],
    function (err) {
      callback(err, this?.lastID);
    }
  );
};

// Get Weight History
const getWeightHistory = (
  userId,
  callback
) => {
  const query = `
    SELECT *
    FROM weight_entries
    WHERE user_id = ?
    ORDER BY entry_date ASC
  `;

  db.all(query, [userId], (err, rows) => {
    callback(err, rows);
  });
};

module.exports = {
  addWeightEntry,
  getWeightHistory,
};