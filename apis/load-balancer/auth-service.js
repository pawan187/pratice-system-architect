const express = require("express");
const cors = require("cors");

const app = express();

app.get("/auth/login", (req, res) => {
  res.json({ service: "auth", message: "User logged in successfully!" });
});

app.listen(4001, () => console.log("✅ Auth Service on port 4001"));
