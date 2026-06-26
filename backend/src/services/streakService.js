const calculateStreak = (
  currentStreak,
  lastActiveDate
) => {
  const today = new Date();

  const todayString = today.toISOString().split("T")[0];

  // First ever activity
  if (!lastActiveDate) {
    return 1;
  }

  // Already active today
  if (lastActiveDate === todayString) {
    return currentStreak;
  }

  const lastDate = new Date(lastActiveDate);

  const differenceInTime =
    today.getTime() - lastDate.getTime();

  const differenceInDays = Math.floor(
    differenceInTime / (1000 * 60 * 60 * 24)
  );

  // Consecutive day
  if (differenceInDays === 1) {
    return currentStreak + 1;
  }

  // Missed a day → reset
  return 1;
};

module.exports = {
  calculateStreak,
};