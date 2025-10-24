const express = require("express");
const cors = require("cors");

const app = express();

app.get("/user/profile", (req, res) => {
  res.json({ service: "user", name: "John Doe", age: 30 });
});

app.listen(4002, () => console.log("✅ User Service on port 4002"));
