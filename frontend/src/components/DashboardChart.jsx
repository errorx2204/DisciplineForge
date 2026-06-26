import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DashboardChart({
  analytics,
}) {
  const data = [
    {
      name: "Habits",
      value:
        analytics?.totalHabits || 0,
    },
    {
      name: "Assignments",
      value:
        analytics?.totalAssignments ||
        0,
    },
    {
      name: "Journal",
      value:
        analytics?.totalJournalEntries ||
        0,
    },
    {
      name: "Weight",
      value:
        analytics?.totalWeightEntries ||
        0,
    },
  ];

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2>📊 Productivity Analytics</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#7c3aed"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardChart;