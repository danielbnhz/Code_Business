
import React from "react";


export default function Intro() {
  return (
    <div class="flex justify-center items-center">
      <div class="w-1/2">
        <h2 className="stagger-item">Elite Tech Teams</h2>
        <p className="stagger-item">Engineering solutions for software development.</p>
        <p className="stagger-item">Learn more.</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="./images/servers.jpg" alt="computer server room" />
      </div>
    </div>
  );
}
