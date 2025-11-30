
import React from "react";
export default function Banner() {
    return (
        <div id="banner-top" className="bg-black text-white w-full">
            {/* Core text */}
            <div className="text-center py-24">
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
                    Code Business
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                    Building the future of technology, design, and resilience.
                </p>
            </div>
            {/* Banner image */}
            <div className="relative w-full h-[36rem]">
                <img
                    src="/images/code.jpg"
                    alt="highly condensed computer code"
                    className="w-full h-full object-cover opacity-90"
                />
                {/* subtle gradient fade for drama */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
            </div>


        </div>
    );
}