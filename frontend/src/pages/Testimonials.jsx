import React from "react";
import Navbar from "../components/Navbar";
import QuoteCard from "../components/QuoteCard";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import PartnershipsHeader from "../components/PartnershipsHeader";
import Divider from "../components/Divider"
import fictional_companies from "../images/fictional_brands.png";

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

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <QuoteCard
            key={index}
            name={t.name}
            title={t.title}
            quote={t.quote}
          />
        ))}
      </div>
      {/* <div> */}
      <PartnershipsHeader />
      <Divider />
      <div className="px-4 sm:px-6">
        <img
          src={fictional_companies}
          alt="Logos of fictional companies"
          className="mx-auto w-full max-w-[460px] h-auto"
        />
      </div>

      {/* </div> */}
      


      <Disclaimer />

      <Footer />
    </div>
  );
}
