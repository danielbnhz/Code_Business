import React from "react";


export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="#">TechBrand</a>
      </div>
      <nav className="navbar__menu">
        <ul>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#pricing" className="nav-link">Pricing</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="navbar__cta">
        <button className="btn-primary">Get Started</button>
      </div>
    </header>
  );
}
