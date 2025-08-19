import React from "react";
import ReactDOM from "react-dom/client";
import GSAPApp from "./gsap_app.jsx";
import App from "./App.jsx";   // This is your main layout App

import "./styles.css";  // make sure this path is correct

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
