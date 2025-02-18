import { getDBConnection } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { min_price, max_price, destination, duration, type } = req.query;
  const query =
    "SELECT * FROM rooms WHERE price >= ? AND price <= ? AND destination = ? AND duration = ? AND type = ?";

  try {
    const db = await getDBConnection();
    const [results] = await db.execute(query, [
      parseInt(min_price),
      parseInt(max_price),
      destination,
      parseInt(duration),
      type,
    ]);
    await db.end();

    if (results.length === 0) {
      return res.status(404).json({ message: "Booking ID not found" });
    }

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: "Server is Unreachable ..." });
  }
}
