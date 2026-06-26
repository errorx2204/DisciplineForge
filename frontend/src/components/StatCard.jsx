function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div
      style={{
        background:
          "rgba(30,41,59,0.8)",
        backdropFilter: "blur(10px)",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      <h3>
        {icon} {title}
      </h3>

      <h1
        style={{
          marginTop: "20px",
          fontSize: "40px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;