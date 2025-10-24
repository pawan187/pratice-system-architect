import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const es = ()=>{
  const evtSource = new EventSource("http://localhost:3000/events");
  evtSource.onmessage = (event) => {
    console.log("SSE:", JSON.parse(event.data));
  };
}
// es()

let last = "Initial";
async function poll(message) {
  const res = await fetch(`http://localhost:3002/poll?last=${message}`);
  const data = await res.json();
  if (data.message !== "No update") {
    console.log("Long Poll:", data.message);
    last = data.message;
  }
  poll("close"); // repeat
}
// poll(last);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
