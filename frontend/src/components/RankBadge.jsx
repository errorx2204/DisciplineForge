function RankBadge({ rank }) {
  const colors = {
    E: "#64748b",
    D: "#22c55e",
    C: "#3b82f6",
    B: "#a855f7",
    A: "#f59e0b",
    S: "#ef4444",
  };

  return (
    <div
      style={{
        background: colors[rank] || "#64748b",
        color: "white",
        padding: "10px 20px",
        borderRadius: "50px",
        display: "inline-block",
        fontWeight: "bold",
      }}
    >
      🏆 Rank {rank}
    </div>
  );
}

export default RankBadge;