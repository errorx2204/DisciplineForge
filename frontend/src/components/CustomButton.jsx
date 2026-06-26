function CustomButton({
  text,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "12px 24px",
        background:
          "linear-gradient(90deg,#7c3aed,#a855f7)",
        color: "white",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow:
          "0 4px 12px rgba(124,58,237,0.4)",
      }}
    >
      {text}
    </button>
  );
}

export default CustomButton;