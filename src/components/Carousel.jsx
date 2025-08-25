import React from "react";



export default function Carousel() {
  return (
      <div className="relative w-[30rem] overflow-hidden border-2 border-cyan-400 rounded-lg">
          <div className="flex transition-transform duration-500 ease-in-out">
              <div className="flex-shrink-0 flex items-center justify-center min-w-full">
                  <div
                      className="w-full h-60 bg-[#222] text-cyan-400 flex items-center justify-center text-xl font-bold rounded">
                      Placeholder
                  </div>
              </div>
          </div>
          <button
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-cyan-400/20 hover:bg-cyan-400/40 text-cyan-400 text-2xl p-2 rounded">
              ‹
          </button>
          <button
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-cyan-400/20 hover:bg-cyan-400/40 text-cyan-400 text-2xl p-2 rounded">
              ›
          </button>
      </div>
  );
}
