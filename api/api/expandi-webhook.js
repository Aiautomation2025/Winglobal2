export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const payload = req.body;

  console.log('Incoming webhook from Expandi:', payload);

  if (payload.event === 'message_received') {
    const { profileId, messageText } = payload;
    console.log(`New message from ${profileId}: ${messageText}`);
    // TODO: add logic here to stop follow-ups, tag lead, send alert, etc.
  }

  res.status(200).json({ success: true });
}
