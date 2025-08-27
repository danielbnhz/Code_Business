import React from "react";

export default function Intro() {
    return (
        <section className="py-28 bg-black grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

            {/* Left Section */}
            <div className="px-6 flex flex-col h-full">
                <div>
                    <h1 className="text-5xl text-gray-50 font-bold mb-4 tracking-tight">
                        We are Code Business
                    </h1>
                    <p className="text-lg text-gray-200 mb-6 max-w-md">
                        We build projects that explore technology, design, and resilience.
                    </p>
                </div>

                {/* Button always at the bottom */}
                <button className="mt-auto px-6 py-2 rounded-2xl shadow bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition">
                    Learn More
                </button>
            </div>

            {/* Right Section */}
            <div className="w-full h-full">
                <img
                    src="/images/servers.jpg"
                    alt="Photo of server room"
                    className="w-full h-full object-cover md:rounded-l-2xl shadow-lg"
                />
            </div>
        </section>
    );
}
