import PageLayout from "../components/PageLayout";

function LeaderboardPage() {
  const leaderboard = [
    {
      rank: 1,
      name: "Shadow Seal",
      xp: 1200,
    },
    {
      rank: 2,
      name: "HunterX",
      xp: 950,
    },
    {
      rank: 3,
      name: "Discipline King",
      xp: 700,
    },
  ];

  return (
    <PageLayout>
      <h1>🏆 Leaderboard</h1>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        {leaderboard.map((user) => (
          <div
            key={user.rank}
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "20px",
              marginBottom: "15px",
              display: "flex",
              justifyContent:
                "space-between",
            }}
          >
            <h2>
              #{user.rank} {user.name}
            </h2>

            <h2>
              {user.xp} XP
            </h2>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default LeaderboardPage;