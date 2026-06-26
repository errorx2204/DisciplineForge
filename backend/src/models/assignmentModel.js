const db = require("../database/db");

// Create Assignment
const createAssignment = (
  userId,
  subject,
  title,
  deadline,
  priority,
  callback
) => {
  const query = `
    INSERT INTO assignments (
      user_id,
      subject,
      title,
      deadline,
      priority
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [
      userId,
      subject,
      title,
      deadline,
      priority,
    ],
    function (err) {
      callback(err, this?.lastID);
    }
  );
};

// Get User Assignments
const getAssignmentsByUserId = (
  userId,
  callback
) => {
  const query = `
    SELECT *
    FROM assignments
    WHERE user_id = ?
    ORDER BY deadline ASC
  `;

  db.all(query, [userId], (err, rows) => {
    callback(err, rows);
  });
};

// Complete Assignment
const completeAssignment = (
  assignmentId,
  callback
) => {
  const query = `
    UPDATE assignments
    SET status = 'Completed'
    WHERE id = ?
  `;

  db.run(query, [assignmentId], function (err) {
    callback(err, this.changes);
  });
};

module.exports = {
  createAssignment,
  getAssignmentsByUserId,
  completeAssignment,
};