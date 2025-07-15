export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const event = req.body;

    console.log('📩 Webhook received:', event);

    // You can add logic here, like saving to database or triggering other services

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Error handling webhook:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
