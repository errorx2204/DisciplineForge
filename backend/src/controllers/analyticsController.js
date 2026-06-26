const db = require("../database/db");

const getDashboardAnalytics = (req, res) => {
  const userId = req.user.id;

  const dashboardData = {};

  db.get(
    `
    SELECT
      xp,
      rank,
      streak
    FROM users
    WHERE id = ?
    `,
    [userId],
    (err, user) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to fetch user analytics",
        });
      }

      dashboardData.user = user;

      db.get(
        `
        SELECT COUNT(*) AS totalHabits
        FROM habits
        WHERE user_id = ?
        `,
        [userId],
        (err, habits) => {
          dashboardData.totalHabits =
            habits.totalHabits;

          db.get(
            `
            SELECT COUNT(*) AS totalAssignments
            FROM assignments
            WHERE user_id = ?
            `,
            [userId],
            (err, assignments) => {
              dashboardData.totalAssignments =
                assignments.totalAssignments;

              db.get(
                `
                SELECT COUNT(*) AS totalJournalEntries
                FROM journal_entries
                WHERE user_id = ?
                `,
                [userId],
                (err, journals) => {
                  dashboardData.totalJournalEntries =
                    journals.totalJournalEntries;

                  db.get(
                    `
                    SELECT COUNT(*) AS totalWeightEntries
                    FROM weight_entries
                    WHERE user_id = ?
                    `,
                    [userId],
                    (err, weights) => {
                      dashboardData.totalWeightEntries =
                        weights.totalWeightEntries;

                      return res
                        .status(200)
                        .json(dashboardData);
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
};

module.exports = {
  getDashboardAnalytics,
};