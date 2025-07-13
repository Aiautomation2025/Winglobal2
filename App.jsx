import React, { useState } from "react";

const App = () => {
  const [profileUrl, setProfileUrl] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-linkedin-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profileUrl, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully.");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Internal error.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>LinkedIn Outreach Dashboard</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="LinkedIn Profile URL"
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
          required
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
        />
        <textarea
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
        />
        <button type="submit">Send Message</button>
      </form>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
};

export default App;
