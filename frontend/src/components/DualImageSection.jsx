import React from "react";
import multi_screen from "../images/multi_screen.jpg"
import computer_screen from "../images/computer_screen.jpg"

const DualImageSection = ({ leftImage, rightImage, altLeft, altRight }) => {
  return (
    <section className="w-full bg-[#222] overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-80 md:h-[400px]">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-full overflow-hidden">
          <img
            src={computer_screen}
            alt="Another computer screen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-full overflow-hidden">
          <img
            src={multi_screen}
            alt="Computer with multiple screens"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default DualImageSection;
