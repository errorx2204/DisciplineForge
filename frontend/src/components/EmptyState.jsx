function EmptyState({ message }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px",
        color: "#94a3b8",
      }}
    >
      <h2>{message}</h2>
    </div>
  );
}

export default EmptyState;