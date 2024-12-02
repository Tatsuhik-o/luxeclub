const randomObjects = [];
const generateRandomId = () =>
  Math.random().toString(36).substr(2, 12).toUpperCase();
const getRandomDateTime = () => {
  const start = new Date(2023, 0, 1);
  const end = new Date(2024, 11, 31);
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
const destinations = [
  "Turkey",
  "Japan",
  "USA",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "India",
  "Singapore",
  "South Africa",
];
const departures = [
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Mexico",
  "Brazil",
  "Argentina",
  "China",
  "Italy",
  "Russia",
  "UAE",
];
const types = ["Economy", "Premium", "Business", "First Class"];
const budgets = [
  "10k$",
  "20k$",
  "30k$",
  "50k$",
  "70k$",
  "100k$",
  "150k$",
  "200k$",
];
const generateRandomBoolean = () => Math.random() < 0.5;

for (let i = 0; i < 100; i++) {
  randomObjects.push({
    id: generateRandomId(),
    date: getRandomDateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    departure: departures[Math.floor(Math.random() * departures.length)],
    duration: Math.floor(Math.random() * 15) + 1, // Duration between 1 and 15 days
    budget: budgets[Math.floor(Math.random() * budgets.length)],
    type: types[Math.floor(Math.random() * types.length)],
    airline: generateRandomBoolean(),
  });
}

console.log(randomObjects);
