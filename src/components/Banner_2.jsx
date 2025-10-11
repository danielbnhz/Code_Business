import React from "react";
export default function Banner_2() {
    return (
        <div id="banner-top" className="bg-black text-white w-full">
            {/* Core text */}
            <div className="text-center py-12">
                <h3 className="text-2xl md:text-6xl font-extrabold tracking-tight">
                    Reach New Heights With Our Engineering Services 
                </h3>

            </div>
            {/* Banner image */}
            <div className="relative w-full h-[36rem]">
                <img
                    src="/images/banner_2.jpg"
                    alt="computer programming"
                    className="w-full h-full object-cover opacity-90"
                />
                {/* subtle gradient fade for drama */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
            </div>


        </div>
    );
}