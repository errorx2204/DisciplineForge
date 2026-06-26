function Card({ children }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "20px",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;