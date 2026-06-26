import Sidebar from "../components/Sidebar";

function SettingsPage() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
          padding: "30px",
        }}
      >
        <h1>⚙️ Settings</h1>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "15px",
            marginTop: "30px",
            maxWidth: "600px",
          }}
        >
          <h2>Application Preferences</h2>

          <div style={{ marginTop: "20px" }}>
            <label>
              <input type="checkbox" /> Enable
              Notifications
            </label>
          </div>

          <div style={{ marginTop: "20px" }}>
            <label>
              <input type="checkbox" /> Dark Mode
            </label>
          </div>

          <div style={{ marginTop: "20px" }}>
            <label>
              <input type="checkbox" /> Daily
              Reminders
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;