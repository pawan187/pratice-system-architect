const  express = require("express");
// create a cors policy to allow requests from any origin
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let counter = 0;

  const interval = setInterval(() => {
    counter++;
    // Send event data in SSE format
    res.write(`data: ${JSON.stringify({ message: `Ping ${counter}` })}\n\n`);
  }, 2000);

  // Clean up on disconnect
  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(3000, () => console.log("✅ SSE server running on http://localhost:3000/events"));
