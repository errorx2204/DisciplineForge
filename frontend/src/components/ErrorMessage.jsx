function ErrorMessage({ message }) {
  return (
    <div
      style={{
        background: "#7f1d1d",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      {message}
    </div>
  );
}

export default ErrorMessage;