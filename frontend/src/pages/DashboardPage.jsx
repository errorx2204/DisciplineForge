import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { getDashboardAnalytics } from "../services/analyticsService";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import LoadingSpinner from "../components/LoadingSpinner";
import XPProgressBar from "../components/XPProgressBar";
import DashboardChart from "../components/DashboardChart";
import DailyQuote from "../components/DailyQuote";
import StreakCalendar from "../components/StreakCalendar";
import StatsSummary from "../components/StatsSummary";
import Footer from "../components/Footer";

function DashboardPage() {
  const { logout } = useContext(AuthContext);

  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const data = await getDashboardAnalytics();
      setAnalytics(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  if (!analytics) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Sidebar />

      <div
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
          padding: "30px",
          marginLeft: "270px",
        }}
      >
        <Navbar />

        <button
          onClick={handleLogout}
          style={{
            padding: "12px 20px",
            background: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: "30px",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>

        <XPProgressBar
          xp={analytics?.user?.xp || 0}
        />

        <DashboardChart
          analytics={analytics}
        />

        <DailyQuote />

        <StreakCalendar
          streak={analytics?.user?.streak || 0}
        />

        <StatsSummary
          analytics={analytics}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <StatCard
            title="Streak"
            value={
              analytics?.user?.streak || 0
            }
            icon="🔥"
          />

          <StatCard
            title="XP"
            value={
              analytics?.user?.xp || 0
            }
            icon="⚡"
          />

          <StatCard
            title="Rank"
            value={
              analytics?.user?.rank || "E"
            }
            icon="🏆"
          />

          <StatCard
            title="Habits"
            value={
              analytics?.totalHabits || 0
            }
            icon="📋"
          />

          <StatCard
            title="Assignments"
            value={
              analytics?.totalAssignments || 0
            }
            icon="📚"
          />

          <StatCard
            title="Journal Entries"
            value={
              analytics?.totalJournalEntries || 0
            }
            icon="📝"
          />

          <StatCard
            title="Weight Entries"
            value={
              analytics?.totalWeightEntries || 0
            }
            icon="⚖️"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default DashboardPage;