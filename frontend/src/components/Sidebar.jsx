import { Link } from "react-router-dom";
import AppLogo from "./AppLogo";
import AppVersion from "./AppVersion";

function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #1e293b, #0f172a)",
        color: "white",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
        overflowY: "auto",
        borderRight: "1px solid #334155",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <AppLogo />

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Link
            to="/dashboard"
            style={linkStyle}
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/achievements"
            style={linkStyle}
          >
            🏅 Achievements
          </Link>

          <Link
            to="/leaderboard"
            style={linkStyle}
          >
            🏆 Leaderboard
          </Link>

          <Link
            to="/habits"
            style={linkStyle}
          >
            🔥 Habits
          </Link>

          <Link
            to="/assignments"
            style={linkStyle}
          >
            📚 Assignments
          </Link>

          <Link
            to="/journal"
            style={linkStyle}
          >
            📝 Journal
          </Link>

          <Link
            to="/weights"
            style={linkStyle}
          >
            ⚖️ Weight Tracker
          </Link>

          <Link
            to="/profile"
            style={linkStyle}
          >
            👤 Profile
          </Link>

          <Link
            to="/settings"
            style={linkStyle}
          >
            ⚙️ Settings
          </Link>
        </nav>
      </div>

      <AppVersion />
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "14px",
  background: "#334155",
  borderRadius: "12px",
  transition: "0.3s",
};

export default Sidebar;