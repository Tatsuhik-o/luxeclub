import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const dbconnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/get_ticket/:booking_id", (req, res) => {
  const { booking_id } = req.params;
  const query = "SELECT * FROM bookings WHERE id = ?";
  dbconnection.query(query, [booking_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json(result);
  });
});

app.get("/check_rooms", (req, res) => {
  const { min_price, max_price, destination, duration, type } = req.query;
  const query =
    "SELECT * FROM rooms WHERE price >= ? AND price <= ? AND destination = ? AND duration = ? AND type = ?";
  dbconnection.query(
    query,
    [
      parseInt(min_price),
      parseInt(max_price),
      destination,
      parseInt(duration),
      type,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json(results);
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
