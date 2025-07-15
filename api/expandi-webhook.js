export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    console.log("📩 Webhook received:", body);

    // Optional: handle the incoming webhook data here

    res.status(200).json({ message: "Received successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
