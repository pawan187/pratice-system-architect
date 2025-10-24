const express = require("express");
const cors = require("cors");

const app = express();

app.get("/payment/status", (req, res) => {
  res.json({ service: "payment", status: "success", amount: 499 });
});

app.listen(4003, () => console.log("✅ Payment Service on port 4003"));
