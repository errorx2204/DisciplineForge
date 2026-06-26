function ErrorPage() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>⚠️ Something Went Wrong</h1>

      <p>Please refresh the page.</p>
    </div>
  );
}

export default ErrorPage;