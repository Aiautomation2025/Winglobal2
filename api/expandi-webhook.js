let lastWebhook = null; // temp storage

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    lastWebhook = body; // save the last received data
    console.log("Webhook received:", body);
    res.status(200).json({ message: "Received successfully!" });
  } else if (req.method === "GET") {
    res.status(200).json(lastWebhook); // return the last received data
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
