import { useState } from "react";

export default function App() {
  const [clientName, setClientName] = useState("");
  const [message, setMessage] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [status, setStatus] = useState("");

  const sendRegularMessage = async () => {
    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientName, message }),
      });

      const data = await res.json();
      setStatus(data.message || data.error);
    } catch (err) {
      console.error(err);
      setStatus("שגיאה בשליחה");
    }
  };

  const sendLinkedinMessage = async () => {
    try {
      const res = await fetch("/api/send-linkedin-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileUrl, message }),
      });

      const data = await res.json();
      setStatus(data.message || data.error);
    } catch (err) {
      console.error(err);
      setStatus("שגיאה בלינקדאין");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Winbox Outreach Dashboard</h2>

      {/* טופס רגיל */}
      <h4>שליחת הודעה רגילה:</h4>
      <input
        type="text"
        placeholder="שם לקוח"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <textarea
        placeholder="הודעה..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <button onClick={sendRegularMessage}>שלח הודעה רגילה</button>

      <hr style={{ margin: "2rem 0" }} />

      {/* טופס לינקדאין */}
      <h4>שליחת הודעה ב־LinkedIn:</h4>
      <input
        type="text"
        placeholder="קישור לפרופיל לינקדאין"
        value={profileUrl}
        onChange={(e) => setProfileUrl(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <textarea
        placeholder="הודעה..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <button onClick={sendLinkedinMessage}>שלח בלינקדאין</button>

      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
}
