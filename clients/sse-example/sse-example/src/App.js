import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {

  const [text, setText] = useState("");

  const sendMessage = () => {
    const ws = new WebSocket("ws://localhost:3001");
    ws.onmessage = (event) => console.log("WS:", event.data);
    ws.onopen = () => ws.send(text);
  }
  return (
    <div className="App">
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={sendMessage}>Send WebSocket Message</button>
    </div>
  );
}

export default App;
