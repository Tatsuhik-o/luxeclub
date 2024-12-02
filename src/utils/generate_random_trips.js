import { writeFile } from "fs/promises";

const randomId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length: 10 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

const randomDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
  const ampm = Math.random() > 0.5 ? "AM" : "PM";
  const month = months[Math.floor(Math.random() * months.length)];
  const day = Math.floor(Math.random() * 28) + 1; // Random day (1-28)
  return `${month} ${day} at ${hours}:${minutes} ${ampm}`;
};

const randomCountry = () => {
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Australia",
    "Japan",
    "China",
    "Brazil",
    "Saudi Arabia",
    "Egypt",
    "Greece",
  ];
  return countries[Math.floor(Math.random() * countries.length)];
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomType = () => {
  const types = ["basic", "premium", "diamond"];
  return types[Math.floor(Math.random() * types.length)];
};

const generateData = () => {
  return Array.from({ length: 50000 }, () => ({
    id: randomId(),
    date: randomDate(),
    destination: randomCountry(),
    departure: randomCountry(),
    duration: randomNumber(1, 30),
    budget: randomNumber(100, 10000),
    type: randomType(),
    airline: Math.random() > 0.5,
  }));
};

const saveData = async () => {
  const data = generateData();
  try {
    await writeFile("randomData.json", JSON.stringify(data, null, 2), "utf-8");
    console.log(
      "1000 random objects have been generated and saved to 'randomData.json'."
    );
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

saveData();
console.log("Current working directory:", process.cwd());
