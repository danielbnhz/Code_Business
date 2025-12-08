import React from "react";
import computer_user from "../images/banner_3.jpg";

export default function Banner_3() {
    return (
        <div id="banner-top" className="bg-black text-white w-full">
            {/* Core text */}
            <div className="text-center py-12 pt-28">
                <h3 className="text-2xl md:text-6xl font-extrabold tracking-tight">
                    Accelerate success with software analysis tools  
                </h3>

            </div>
            {/* Banner image */}
            <div className="relative w-full h-[36rem]">
                <img
                    src={computer_user}
                    alt="person using webapp dashboard"
                    className="w-full h-full object-cover opacity-90"
                />
                {/* subtle gradient fade for drama */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
            </div>


        </div>
    );
}