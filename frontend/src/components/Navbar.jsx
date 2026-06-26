import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  const today =
    new Date().toLocaleDateString();

  return (
    <div
      style={{
        background:
          "rgba(30,41,59,0.8)",
        backdropFilter: "blur(10px)",
        color: "white",
        padding: "20px 30px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div>
        <h2>⚔️ DisciplineForge</h2>

        <p>{today}</p>
      </div>

      <div>
        <h3>
          Welcome, {user?.name || "Hunter"}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;