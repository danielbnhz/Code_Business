import React from "react";
import Navbar from "../components/Navbar";

const testimonials = [
  {
    name: "Alex R.",
    title: "CTO, MetaLogic",
    quote: "The algorithms designed by Code_Business revealed patterns I never thought possible.",
  },
  {
    name: "Jamie L.",
    title: "Software Engineer, DataCore",
    quote: "Finally, a company that makes sorting feel poetic.",
  },
  {
    name: "Samira K.",
    title: "AI Researcher, QuantumMind",
    quote: "Working with Code_Business was like watching logic come alive.",
  },
  {
    name: "Derek H.",
    title: "Product Manager, TechNova",
    quote: "Their solutions don’t just work—they clarify the underlying structure of complexity.",
  },
];

export default function Testimonials() {
  return (
    
    <div className="bg-black text-white min-h-screen py-16 px-6">
         <Navbar />

      <div className="max-w-5xl mx-auto text-center mb-12 py-14">

        <h1 className="text-4xl font-bold mb-4" style={{ color: "#00ffff" }}>
          Testimonials
        </h1>
        <p className="text-lg text-blue-600">
          Hear what our valued clients “say” about Code_Business
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="text-white italic mb-4">&ldquo;{t.quote}&rdquo;</p>
            <p className="font-semibold text-blue-600">{t.name}</p>
            <p className="text-sm text-gray-400">{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
