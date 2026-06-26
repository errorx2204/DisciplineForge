const calculateRank = (xp) => {
  if (xp >= 5000) return "SS";
  if (xp >= 2000) return "S";
  if (xp >= 1000) return "A";
  if (xp >= 500) return "B";
  if (xp >= 250) return "C";
  if (xp >= 100) return "D";

  return "E";
};

module.exports = {
  calculateRank,
};