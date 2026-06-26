function XPProgressBar({ xp }) {
  const percentage =
    Math.min((xp / 1000) * 100, 100);

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2>⚡ XP Progress</h2>

      <div
        style={{
          width: "100%",
          height: "30px",
          background: "#334155",
          borderRadius: "15px",
          overflow: "hidden",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background:
              "linear-gradient(90deg,#7c3aed,#a855f7)",
            transition: "0.5s",
          }}
        />
      </div>

      <p style={{ marginTop: "15px" }}>
        {xp} / 1000 XP
      </p>
    </div>
  );
}

export default XPProgressBar;