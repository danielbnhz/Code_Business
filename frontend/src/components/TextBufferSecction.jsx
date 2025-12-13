import React from "react";

const TextBufferSection = () => {
  return (
    <section className="w-full bg-black text-cyan-400 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Big Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Building Systems That Make Sense
        </h2>

        {/* Smaller Paragraph */}
        <p className="text-lg md:text-xl text-white leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </p>

      </div>
    </section>
  );
};

export default TextBufferSection;
