import React from "react";
import "./GlowingNetwork.css"; // For animation styles

const GlowingNetwork = () => {
  return (
    <div className="relative flex items-center justify-center w-10/12 h-[500px] mx-auto bg-base-200 overflow-hidden">
      {/* Center Company Name */}
      <div className="absolute z-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-2xl font-bold py-8 px-16 rounded-full shadow-lg">
        Symence
      </div>

      {/* Top Box */}
      <div className="absolute top-8 flex flex-col items-center">
        <div className="box glow">Web Development</div>
        <div className="line line-down" />
      </div>

      {/* Bottom Box */}
      <div className="absolute bottom-8 flex flex-col items-center">
        <div className="line line-up" />
        <div className="box glow">E-commerce Solution</div>
      </div>

      {/* Left Box */}
      <div className="absolute left-8 flex items-center">
        <div className="box glow">Mobile App Development</div>
        <div className="line line-right" />
      </div>

      {/* Right Box */}
      <div className="absolute right-8 flex items-center">
        <div className="line line-left" />
        <div className="box glow">Data Science</div>
      </div>
    </div>
  );
};

export default GlowingNetwork;
