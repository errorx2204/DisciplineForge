function LoadingSpinner() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "#7c3aed",
        fontSize: "32px",
        fontWeight: "bold",
      }}
    >
      ⚔️ Loading DisciplineForge...
    </div>
  );
}

export default LoadingSpinner;