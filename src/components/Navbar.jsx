import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-4 bg-black border-b border-[#222]">
          <a href="/" className="text-2xl font-bold text-[#00ffff] tracking-wide">Code Business</a>
          <ul className="flex gap-8">
              <li><Link to="/" className="text-white font-medium hover:text-[#00ffff] transition-colors">Home</Link></li>
              <li><Link href="#" className="text-white font-medium hover:text-[#00ffff] transition-colors">Services</Link></li>
              <li><Link to="/Contact" className="text-white font-medium hover:text-[#00ffff] transition-colors">Contact</Link></li>
          </ul>
          <button className="px-6 py-2 rounded bg-gradient-to-r from-[#00ffff] to-blue-600 text-[#0f0f0f] font-semibold hover:-translate-y-0.5 hover:shadow-lg transition transform">
              Hire Us
          </button>
      </nav>
  );
}
