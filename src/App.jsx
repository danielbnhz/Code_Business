import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"; 
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />

        
      </Routes>
    </Router>
  );
}

export default App;
