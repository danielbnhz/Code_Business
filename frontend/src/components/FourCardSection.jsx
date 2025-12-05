
import React from "react";

export default function FourCardSection() {
    const cards = [
        {
            title: "Web Development",
            description: "Custom websites built for speed and reliability.",
            image: "/images/internets.jpg"
        },
        {
            title: "App Development",
            description: "Mobile and desktop apps that delight users.",
            image: "/images/apps.jpg"
        },
        {
            title: "AI Integration",
            description: "Add intelligence to your products seamlessly.",
            image: "/images/neural_net.jpg"
        },
        {
            title: "UI/UX Design",
            description: "Beautiful and functional user interfaces.",
            image: "/images/wireframes_pic.jpg"
        },
    ];

    return (
        <section className="bg-black py-20 h-[70vh]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-[#111111] border border-[#222] rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
                        >
                            {/* Dynamic image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-20 h-20 mb-4 rounded-full object-cover"
                            />

                            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{card.title}</h3>
                            <p className="text-gray-300">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
