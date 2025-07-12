import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1 style={{ color: '#333' }}>📣 Winbox Outreach Dashboard</h1>
      <p>Welcome! Use this panel to send automated outreach messages.</p>

      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '6px' }}>
        <h2>📨 Send a New Message</h2>
        <form>
          <input type="text" placeholder="Client name" style={{ padding: '8px', width: '100%', marginBottom: '10px' }} />
          <textarea placeholder="Message..." style={{ padding: '8px', width: '100%', height: '100px', marginBottom: '10px' }} />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
