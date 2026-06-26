function StatsSummary({ analytics }) {
  const total =
    (analytics?.totalHabits || 0) +
    (analytics?.totalAssignments || 0) +
    (analytics?.totalJournalEntries || 0);

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2>📊 Productivity Score</h2>

      <h1
        style={{
          color: "#7c3aed",
          marginTop: "20px",
        }}
      >
        {total}
      </h1>

      <p>Total Activities Completed</p>
    </div>
  );
}

export default StatsSummary;