const {
  getShadowSealByUserId,
  updateShadowSealStreak,
  updateLongestStreak,
  unlockBeru,
  unlockGoldenSeal,
  recordRelapse,
} = require("../models/shadowSealModel");

// Get Shadow Seal Data
const getShadowSeal = (req, res) => {
  getShadowSealByUserId(
    req.user.id,
    (err, shadowSeal) => {
      if (err) {
        return res.status(500).json({
          message:
            "Failed to fetch Shadow Seal data",
        });
      }

      if (!shadowSeal) {
        return res.status(404).json({
          message:
            "Shadow Seal profile not found",
        });
      }

      return res.status(200).json(shadowSeal);
    }
  );
};

// Daily Discipline Check
const dailyShadowCheck = (req, res) => {
  getShadowSealByUserId(
    req.user.id,
    (err, shadowSeal) => {
      if (err || !shadowSeal) {
        return res.status(404).json({
          message:
            "Shadow Seal profile not found",
        });
      }

      const newStreak =
        shadowSeal.current_streak + 1;

      updateShadowSealStreak(
        req.user.id,
        newStreak,
        (err) => {
          if (err) {
            return res.status(500).json({
              message:
                "Failed to update streak",
            });
          }

          if (
            newStreak >
            shadowSeal.longest_streak
          ) {
            updateLongestStreak(
              req.user.id,
              newStreak,
              () => {}
            );
          }

          if (newStreak >= 7) {
            unlockBeru(req.user.id, () => {});
          }

          if (newStreak >= 30) {
            unlockGoldenSeal(
              req.user.id,
              () => {}
            );
          }

          return res.status(200).json({
            message:
              "Shadow Seal streak updated",
            currentStreak: newStreak,
            beruUnlocked:
              newStreak >= 7,
            goldenSealUnlocked:
              newStreak >= 30,
          });
        }
      );
    }
  );
};

// Relapse
const relapse = (req, res) => {
  recordRelapse(req.user.id, (err) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to record relapse",
      });
    }

    return res.status(200).json({
      message: "Relapse recorded",
      currentStreak: 0,
      quote:
        "Weakness is a choice. Choose again.",
    });
  });
};

module.exports = {
  getShadowSeal,
  dailyShadowCheck,
  relapse,
};