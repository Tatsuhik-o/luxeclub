import { getDBConnection } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { booking_id } = req.query;
  const query = "SELECT * FROM rooms WHERE id = ?";

  try {
    const db = await getDBConnection();
    const [results] = await db.execute(query, [booking_id]);
    await db.end();

    if (results.length === 0) {
      return res.status(404).json({ message: "Booking ID not found" });
    }

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: "Server is Unreachable ..." });
  }
}
