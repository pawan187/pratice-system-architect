const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());
let lastMessage = "Initial";

app.get("/poll", (req, res) => {
  const checkInterval = setInterval(() => {
    if (lastMessage !== req.query.last) {
      res.json({ message: lastMessage });
      clearInterval(checkInterval);
    }
  }, 1000);
  console.log("insert poll server");
  // Timeout after 30 seconds
  setTimeout(() => {
    res.json({ message: "No update" });
    clearInterval(checkInterval);
  }, 30000);
});

app.get("/update", (req, res) => {
  lastMessage = `Updated at ${new Date().toLocaleTimeString()}`;
  res.send("Message updated");
});

app.listen(3002, () => console.log("✅ Long Polling server running on http://localhost:3002"));
