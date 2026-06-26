import PageLayout from "../components/PageLayout";

function AchievementsPage() {
  const achievements = [
    {
      title: "First Habit",
      description: "Complete your first habit.",
      icon: "🔥",
    },
    {
      title: "XP Hunter",
      description: "Reach 100 XP.",
      icon: "⚡",
    },
    {
      title: "Consistency King",
      description: "Maintain a 7-day streak.",
      icon: "🏆",
    },
    {
      title: "Journal Master",
      description: "Write 10 journal entries.",
      icon: "📝",
    },
  ];

  return (
    <PageLayout>
      <h1>🏅 Achievements</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {achievements.map((achievement, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h2>
              {achievement.icon} {achievement.title}
            </h2>

            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default AchievementsPage;