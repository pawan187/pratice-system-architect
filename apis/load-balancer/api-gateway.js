const express = require("express");
const cors = require("cors");

const morgan = require("morgan");
// import fetch from require("node-fetch");

const app = express();
app.use(morgan("dev"));

// Simple token check middleware
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Missing Authorization header" });
  }
  next();
});

// Route: /api/auth/*
app.use("/api/auth", async (req, res) => {
  const r = await fetch(`http://localhost:4001${req.url}`);
  const data = await r.json();
  res.json(data);
});

// Route: /api/user/*
app.use("/api/user", async (req, res) => {
  const r = await fetch(`http://localhost:4002${req.url}`);
  const data = await r.json();
  res.json(data);
});

// Route: /api/payment/*
app.use("/api/payment", async (req, res) => {
  const r = await fetch(`http://localhost:4003${req.url}`);
  const data = await r.json();
  res.json(data);
});

app.listen(5000, () => console.log("✅ API Gateway running on port 5000"));
