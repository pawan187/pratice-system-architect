const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 3001 });
console.log("✅ WebSocket server running on ws://localhost:3001");

wss.on("connection", (ws) => {
  console.log("Client connected.");

  ws.send(JSON.stringify({ message: "Welcome to WebSocket!" }));

  ws.on("message", (data) => {
    console.log("Received:", data.toString());
    ws.send(JSON.stringify({ echo: data.toString() }));
  });

  ws.on("close", () => console.log("Client disconnected."));
});
