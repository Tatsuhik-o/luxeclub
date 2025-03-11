import { getDBConnection } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const booking_details = req.body.booking_id;
  const retriveQuery = "SELECT * FROM rooms WHERE id = ?";
  const insertQuery =
    "INSERT INTO bookings (id, date, destination, departure, duration, budget, type, airline, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const removeQuery = "DELETE FROM rooms WHERE id = ?";

  try {
    const db = await getDBConnection();
    const [retriveQueryResults] = await db.execute(retriveQuery, [
      booking_details,
    ]);
    const {
      id,
      date,
      destination,
      departure,
      duration,
      price,
      type,
      airline,
      url,
    } = retriveQueryResults[0];
    const [insertQueryResults] = await db.execute(insertQuery, [
      id,
      date,
      destination,
      departure,
      duration,
      price,
      type,
      airline,
      url,
    ]);
    if (insertQueryResults) {
      const [removeResultsQuery] = await db.execute(removeQuery, [
        booking_details,
      ]);
      console.log(removeResultsQuery);
    }

    await db.end();

    if (removeResultsQuery.length === 0) {
      return res.status(404).json({ message: "Booking ID not found" });
    }

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: "Server is Unreachable ..." });
  }
}
