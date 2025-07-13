import { useState } from "react";

function App() {
  const [clientName, setClientName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientName, message }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus(data.message);
        setClientName("");
        setMessage("");
      } else {
        setStatus(data.error || "משהו השתבש...");
      }
    } catch (err) {
      console.error(err);
      setStatus("שגיאה בשרת");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>📬 Winbox Outreach Dashboard</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="שם לקוח"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
        />
        <textarea
          placeholder="הודעה..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
        />
        <button type="submit">שלח</button>
      </form>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
}

export default App;
