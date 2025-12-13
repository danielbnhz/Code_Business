import React from "react";
import computer_board from "../images/computer_board.jpg"

const SplitSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-cyan-400 h-[250px] md:h-[300px] overflow-hidden">
      {/* Image on the left */}
      <div className="w-full md:w-1/2 aspect-square overflow-hidden">
        <img
          src={computer_board}
          alt="The inside of a fancy computer"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text on the right */}
      <div className="md:w-1/2 w-full flex flex-col justify-center p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 md:mb-4">
          Let's build together
        </h1>
        <p className="text-sm md:text-base text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec vehicula quam at sapien efficitur, ac luctus metus gravida.
        </p>
      </div>
    </div>
  );
};

export default SplitSection;
