const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./disciplineforge.db");

db.run(
  `ALTER TABLE users ADD COLUMN last_active_date DATE`,
  (err) => {
    if (err) {
      console.error("Error:", err.message);
    } else {
      console.log("Column added successfully.");
    }

    db.close();
  }
);