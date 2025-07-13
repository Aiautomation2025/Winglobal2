export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { profileUrl, message } = req.body;

    console.log("🔗 שולח הודעה לפרופיל:", profileUrl);
    console.log("✉️ הודעה:", message);

    // כאן נשלב בעתיד אינטגרציה אמיתית ל-Sales Navigator

    return res.status(200).json({ success: true, message: "הודעה נשלחה (כאילו)" });
  } else {
    res.status(405).json({ error: "שיטת בקשה לא נתמכת" });
  }
}
