
const db = require("./db");

const initializeDatabase = () => {
  // Users Table
  db.run(
    `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      xp INTEGER DEFAULT 0,
      rank TEXT DEFAULT 'E',
      streak INTEGER DEFAULT 0,
      last_active_date DATE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `,
    (err) => {
      if (err) {
        console.error("Error creating users table:", err.message);
      } else {
        console.log("Users table ready.");
      }
    }
  );

  // Habits Table
  db.run(
    `
    CREATE TABLE IF NOT EXISTS habits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      habit_name TEXT NOT NULL,
      completed INTEGER DEFAULT 0,
      completion_time DATETIME,
      xp_awarded INTEGER DEFAULT 0,
      date DATE DEFAULT CURRENT_DATE,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
    `,
    (err) => {
      if (err) {
        console.error("Error creating habits table:", err.message);
      } else {
        console.log("Habits table ready.");
      }
    }
  );

  // Shadow Seal Table
  db.run(
    `
    CREATE TABLE IF NOT EXISTS shadow_seal (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER UNIQUE NOT NULL,
      current_streak INTEGER DEFAULT 0,
      longest_streak INTEGER DEFAULT 0,
      last_relapse_date DATE,
      golden_seal INTEGER DEFAULT 0,
      beru_unlocked INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
    `,
    (err) => {
      if (err) {
        console.error(
          "Error creating shadow_seal table:",
          err.message
        );
      } else {
        console.log("Shadow Seal table ready.");
      }
    }
  );
};
  // Assignments Table
  db.run(
    `
    CREATE TABLE IF NOT EXISTS assignments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      subject TEXT NOT NULL,
      title TEXT NOT NULL,
      deadline DATE NOT NULL,
      priority TEXT NOT NULL,
      status TEXT DEFAULT 'Pending',
      xp_reward INTEGER DEFAULT 50,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
    `,
    (err) => {
      if (err) {
        console.error(
          "Error creating assignments table:",
          err.message
        );
      } else {
        console.log("Assignments table ready.");
      }
    }
  );
  // Weight Tracker Table
  db.run(
    `
    CREATE TABLE IF NOT EXISTS weight_entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      weight REAL NOT NULL,
      notes TEXT,
      entry_date DATE DEFAULT CURRENT_DATE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
    `,
    (err) => {
      if (err) {
        console.error(
          "Error creating weight_entries table:",
          err.message
        );
      } else {
        console.log("Weight Tracker table ready.");
      }
    }
  );
    // Journal Table
  db.run(
    `
    CREATE TABLE IF NOT EXISTS journal_entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      mood TEXT NOT NULL,
      entry_date DATE DEFAULT CURRENT_DATE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
    `,
    (err) => {
      if (err) {
        console.error(
          "Error creating journal_entries table:",
          err.message
        );
      } else {
        console.log("Journal table ready.");
      }
    }
  );
module.exports = initializeDatabase;