const db = require("../database/db");

// Create a new habit
const createHabit = (
  userId,
  habitName,
  xpAwarded,
  callback
) => {
  const query = `
    INSERT INTO habits (
      user_id,
      habit_name,
      xp_awarded
    )
    VALUES (?, ?, ?)
  `;

  db.run(
    query,
    [userId, habitName, xpAwarded],
    function (err) {
      callback(err, this?.lastID);
    }
  );
};

// Get all habits for a user
const getUserHabits = (userId, callback) => {
  const query = `
    SELECT *
    FROM habits
    WHERE user_id = ?
    ORDER BY date DESC
  `;

  db.all(query, [userId], (err, rows) => {
    callback(err, rows);
  });
};

// Get habit by ID
const getHabitById = (habitId, callback) => {
  const query = `
    SELECT *
    FROM habits
    WHERE id = ?
  `;

  db.get(query, [habitId], (err, row) => {
    callback(err, row);
  });
};

// Mark habit as completed
const completeHabit = (habitId, callback) => {
  const query = `
    UPDATE habits
    SET
      completed = 1,
      completion_time = CURRENT_TIMESTAMP
    WHERE id = ?
  `;

  db.run(query, [habitId], function (err) {
    callback(err, this.changes);
  });
};

module.exports = {
  createHabit,
  getUserHabits,
  getHabitById,
  completeHabit,
};