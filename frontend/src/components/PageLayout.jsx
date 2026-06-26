import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function PageLayout({ children }) {
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
        <Navbar />

        {children}
      </div>
    </>
  );
}

export default PageLayout;