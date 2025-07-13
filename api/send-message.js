export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { clientName, message } = req.body;

    console.log("📨 הודעה חדשה:");
    console.log("שם לקוח:", clientName);
    console.log("הודעה:", message);

    return res.status(200).json({ success: true, message: "ההודעה התקבלה בהצלחה." });
  } else {
    res.status(405).json({ error: "שיטת הבקשה לא נתמכת" });
  }
}
