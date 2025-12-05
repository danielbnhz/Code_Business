import { useState } from "react";
import React from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form will go nowhere:", formData);
    alert("Thank you for your message but this form isn't programmed to send the form anywhere!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white p-8 rounded-xl w-full max-w-xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#00ffff] text-center mb-6">
        Contact Us
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-md border-2 border-[#00ffff] bg-black text-white placeholder-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-md border-2 border-[#00ffff] bg-black text-white placeholder-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
        />
        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded-md border-2 border-[#00ffff] bg-black text-white placeholder-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff] min-h-[120px] resize-y"
        />
        <button
          type="submit"
          className="bg-[#00ffff] text-black font-semibold py-3 rounded-md hover:bg-cyan-400 transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
}
