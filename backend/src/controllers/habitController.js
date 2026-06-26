const {
  createHabit,
  getUserHabits,
  getHabitById,
  completeHabit,
} = require("../models/habitModel");

const {
  addXPToUser,
  findUserById,
  updateUserRank,
  updateUserStreak,
  updateLastActiveDate,
} = require("../models/userModel");

const {
  calculateRank,
} = require("../services/rankService");

const {
  calculateStreak,
} = require("../services/streakService");

// Create Habit
const addHabit = (req, res) => {
  const { habitName, xpAwarded } = req.body;

  if (!habitName || !xpAwarded) {
    return res.status(400).json({
      message: "Habit name and XP are required",
    });
  }

  createHabit(
    req.user.id,
    habitName,
    xpAwarded,
    (err, habitId) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to create habit",
        });
      }

      return res.status(201).json({
        message: "Habit created successfully",
        habitId,
      });
    }
  );
};

// Get User Habits
const getHabits = (req, res) => {
  getUserHabits(req.user.id, (err, habits) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch habits",
      });
    }

    return res.status(200).json(habits);
  });
};

// Complete Habit + XP + Rank + Streak
const markHabitComplete = (req, res) => {
  const { id } = req.params;

  getHabitById(id, (err, habit) => {
    if (err || !habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    completeHabit(id, (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to complete habit",
        });
      }

      addXPToUser(
        req.user.id,
        habit.xp_awarded,
        (err) => {
          if (err) {
            return res.status(500).json({
              message: "Failed to award XP",
            });
          }

          findUserById(req.user.id, (err, user) => {
            if (err || !user) {
              return res.status(500).json({
                message: "Failed to fetch user",
              });
            }

            // Update Rank
            const newRank = calculateRank(user.xp);

            updateUserRank(
              req.user.id,
              newRank,
              (err) => {
                if (err) {
                  return res.status(500).json({
                    message: "Failed to update rank",
                  });
                }

                // Update Streak
                const newStreak = calculateStreak(
                  user.streak,
                  user.last_active_date
                );

                updateUserStreak(
                  req.user.id,
                  newStreak,
                  (err) => {
                    if (err) {
                      return res.status(500).json({
                        message:
                          "Failed to update streak",
                      });
                    }

                    updateLastActiveDate(
                      req.user.id,
                      (err) => {
                        if (err) {
                          return res.status(500).json({
                            message:
                              "Failed to update activity date",
                          });
                        }

                        return res.status(200).json({
                          message:
                            "Habit completed successfully",
                          xpEarned:
                            habit.xp_awarded,
                          currentXP: user.xp,
                          currentRank: newRank,
                          currentStreak:
                            newStreak,
                        });
                      }
                    );
                  }
                );
              }
            );
          });
        }
      );
    });
  });
};

module.exports = {
  addHabit,
  getHabits,
  markHabitComplete,
};