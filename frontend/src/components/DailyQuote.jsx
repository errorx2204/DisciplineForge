function DailyQuote() {
  const quotes = [
    "Discipline equals freedom.",
    "Consistency beats intensity.",
    "Small progress is still progress.",
    "Become stronger every day.",
  ];

  const quote =
    quotes[
      new Date().getDate() %
        quotes.length
    ];

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2>💡 Daily Quote</h2>

      <p
        style={{
          marginTop: "15px",
          fontStyle: "italic",
        }}
      >
        "{quote}"
      </p>
    </div>
  );
}

export default DailyQuote;