function StreakCalendar({ streak }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2>🔥 Current Streak</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "8px",
              background:
                index < streak
                  ? "#22c55e"
                  : "#334155",
            }}
          />
        ))}
      </div>

      <p style={{ marginTop: "20px" }}>
        {streak} Day Streak
      </p>
    </div>
  );
}

export default StreakCalendar;