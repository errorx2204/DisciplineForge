import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "100px",
          margin: 0,
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <Link
        to="/dashboard"
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#7c3aed",
          color: "white",
          textDecoration: "none",
          borderRadius: "10px",
        }}
      >
        Go To Dashboard
      </Link>
    </div>
  );
}

export default NotFoundPage;