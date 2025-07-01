import React from "react";
import "./GlowingNetwork.css"; // For animation styles

const GlowingNetwork = () => {
  return (
    <div className="relative flex justify-center items-center bg-base-200 mx-auto w-10/12 h-[500px] overflow-hidden">
      {/* Center Company Name */}
      <div className="z-10 absolute bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg px-16 py-8 rounded-full font-bold text-white text-2xl">
        Symence IT
      </div>

      {/* Top Box */}
      <div className="top-8 absolute flex flex-col items-center">
        <div className="box glow">Web Development</div>
        <div className="line line-down" />
      </div>

      {/* Bottom Box */}
      <div className="bottom-8 absolute flex flex-col items-center">
        <div className="line line-up" />
        <div className="box glow">E-commerce Solution</div>
      </div>

      {/* Left Box */}
      <div className="left-8 absolute flex items-center">
        <div className="box glow">Mobile App Development</div>
        <div className="line-right line" />
      </div>

      {/* Right Box */}
      <div className="right-8 absolute flex items-center">
        <div className="line-left line" />
        <div className="box glow">Data Science</div>
      </div>
    </div>
  );
};

export default GlowingNetwork;
