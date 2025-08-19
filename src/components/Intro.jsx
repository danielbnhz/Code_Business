
import React from "react";


export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-1st-half">
        <h2 className="stagger-item">Elite Tech Teams</h2>
        <p className="stagger-item">Engineering solutions for software development.</p>
        <p className="stagger-item">Learn more.</p>
      </div>
      <div className="intro-2nd-half">
        <img src="./images/servers.jpg" alt="computer server room" className="stagger-item" />
      </div>
    </div>
  );
}
