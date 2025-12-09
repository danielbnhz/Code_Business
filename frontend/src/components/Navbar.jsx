import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import logo from "../images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#222] px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">

        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Code Business Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-[#00ffff] tracking-wide">
            Code Business
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><Link to="/" className="text-white font-medium hover:text-[#00ffff] transition-colors">Home</Link></li>
          <li><Link to="/Services" className="text-white font-medium hover:text-[#00ffff] transition-colors">Services</Link></li>
          <li><Link to="/Contact" className="text-white font-medium hover:text-[#00ffff] transition-colors">Contact</Link></li>
          <li><Link to="/Testimonials" className="text-white font-medium hover:text-[#00ffff] transition-colors">Testimonials</Link></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-6 py-2 rounded bg-gradient-to-r from-[#00ffff] to-blue-600 text-[#0f0f0f] font-semibold hover:-translate-y-0.5 hover:shadow-lg transition">
          Hire Us
        </button>

        {/* Hamburger (Mobile) */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 px-2 pb-4 animate-fadeIn">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="text-white text-lg hover:text-[#00ffff] transition-colors" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/Services" className="text-white text-lg hover:text-[#00ffff] transition-colors" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link to="/Contact" className="text-white text-lg hover:text-[#00ffff] transition-colors" onClick={() => setOpen(false)}>Contact</Link></li>
            <li><Link to="/Testimonials" className="text-white text-lg hover:text-[#00ffff] transition-colors" onClick={() => setOpen(false)}>Testimonials</Link></li>
          </ul>

          <button className="mt-4 w-full py-3 rounded bg-gradient-to-r from-[#00ffff] to-blue-600 text-[#0f0f0f] font-semibold hover:shadow-lg transition">
            Hire Us
          </button>
        </div>
      )}
    </nav>
  );
}
