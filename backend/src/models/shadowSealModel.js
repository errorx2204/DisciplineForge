const db = require("../database/db");

// Create Shadow Seal Profile
const createShadowSeal = (userId, callback) => {
  const query = `
    INSERT INTO shadow_seal (user_id)
    VALUES (?)
  `;

  db.run(query, [userId], function (err) {
    callback(err, this?.lastID);
  });
};

// Get Shadow Seal Data
const getShadowSealByUserId = (userId, callback) => {
  const query = `
    SELECT *
    FROM shadow_seal
    WHERE user_id = ?
  `;

  db.get(query, [userId], (err, row) => {
    callback(err, row);
  });
};

// Update Current Streak
const updateShadowSealStreak = (
  userId,
  streak,
  callback
) => {
  const query = `
    UPDATE shadow_seal
    SET current_streak = ?
    WHERE user_id = ?
  `;

  db.run(query, [streak, userId], function (err) {
    callback(err, this.changes);
  });
};

// Update Longest Streak
const updateLongestStreak = (
  userId,
  streak,
  callback
) => {
  const query = `
    UPDATE shadow_seal
    SET longest_streak = ?
    WHERE user_id = ?
  `;

  db.run(query, [streak, userId], function (err) {
    callback(err, this.changes);
  });
};

// Unlock Beru
const unlockBeru = (userId, callback) => {
  const query = `
    UPDATE shadow_seal
    SET beru_unlocked = 1
    WHERE user_id = ?
  `;

  db.run(query, [userId], function (err) {
    callback(err, this.changes);
  });
};

// Unlock Golden Seal
const unlockGoldenSeal = (
  userId,
  callback
) => {
  const query = `
    UPDATE shadow_seal
    SET golden_seal = 1
    WHERE user_id = ?
  `;

  db.run(query, [userId], function (err) {
    callback(err, this.changes);
  });
};

// Record Relapse
const recordRelapse = (
  userId,
  callback
) => {
  const query = `
    UPDATE shadow_seal
    SET
      current_streak = 0,
      last_relapse_date = DATE('now')
    WHERE user_id = ?
  `;

  db.run(query, [userId], function (err) {
    callback(err, this.changes);
  });
};

module.exports = {
  createShadowSeal,
  getShadowSealByUserId,
  updateShadowSealStreak,
  updateLongestStreak,
  unlockBeru,
  unlockGoldenSeal,
  recordRelapse,
};