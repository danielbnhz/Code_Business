import React from "react";
import server_img from "../images/servers.jpg";

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
                        We build projects that explore technology, design, and resilience. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Duis id felis a orci eleifend sollicitudin aliquet in eros. 
                        Aliquam suscipit volutpat nisl et elementum. Cras iaculis imperdiet congue. Cras ultricies est neque. 

                    </p>
                    <p className="text-lg text-gray-200 mb-6 max-w-md">

                                            Sed at lacinia nibh. Maecenas in sagittis nisl, eu gravida metus. Mauris sed mattis lectus, eu malesuada ipsum. 
                        Fusce a rhoncus nibh. Suspendisse tellus felis, sollicitudin ut lorem non, fermentum dapibus mi. Aenean felis ligula,
                         viverra id purus non, euismod suscipit massa. Vestibulum metus lorem, interdum id accumsan nec, sodales posuere lacus.
                          In non ornare risus, auctor cursus est.
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
                    src={server_img}
                    alt="Photo of server room"
                    className="w-full h-full object-cover md:rounded-l-2xl shadow-lg"
                />
            </div>
        </section>
    );
}
