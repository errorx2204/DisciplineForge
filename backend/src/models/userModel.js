const db = require("../database/db");

const createUser = (name, email, password, callback) => {
  const query = `
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
  `;

  db.run(query, [name, email, password], function (err) {
    callback(err, this?.lastID);
  });
};

const findUserByEmail = (email, callback) => {
  const query = `
    SELECT * FROM users WHERE email = ?
  `;

  db.get(query, [email], (err, row) => {
    callback(err, row);
  });
};

const findUserById = (id, callback) => {
  const query = `
    SELECT id, name, email, xp, rank, streak, last_active_date, created_at
    FROM users
    WHERE id = ?
  `;

  db.get(query, [id], (err, row) => {
    callback(err, row);
  });
};

const addXPToUser = (userId, xp, callback) => {
  const query = `
    UPDATE users
    SET xp = xp + ?
    WHERE id = ?
  `;

  db.run(query, [xp, userId], function (err) {
    callback(err, this.changes);
  });
};

const updateUserRank = (userId, rank, callback) => {
  const query = `
    UPDATE users
    SET rank = ?
    WHERE id = ?
  `;

  db.run(query, [rank, userId], function (err) {
    callback(err, this.changes);
  });
};

const updateUserStreak = (userId, streak, callback) => {
  const query = `
    UPDATE users
    SET streak = ?
    WHERE id = ?
  `;

  db.run(query, [streak, userId], function (err) {
    callback(err, this.changes);
  });
};

const updateLastActiveDate = (userId, callback) => {
  const query = `
    UPDATE users
    SET last_active_date = DATE('now')
    WHERE id = ?
  `;

  db.run(query, [userId], function (err) {
    callback(err, this.changes);
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  addXPToUser,
  updateUserRank,
  updateUserStreak,
  updateLastActiveDate,
};