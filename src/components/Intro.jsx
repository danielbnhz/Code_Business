
import React from "react";


export default function Intro() {
  return (
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] items-center">
          <div className="px-6 py-12 flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-4 tracking-tight">
                  We are Code Business
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-md">
                  We build projects that explore technology, design, and resilience.
              </p>
              <button className="px-6 py-3 rounded-2xl shadow bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition">
                  Learn More
              </button>
          </div>


          <div className="w-full h-full">
              <img
                  src="/images/servers.jpg" // replace with your image
                  alt="Photo of server room"
                  className="w-full h-full object-cover md:rounded-l-2xl shadow-lg"
              />
          </div>
      </section>

  );
}
