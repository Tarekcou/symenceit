import { useState, useEffect } from "react";

const items = [
  { title: "Artificial Intelligence", xPercent: 15, yPercent: 20 },
  { title: "Data Sciences", xPercent: 15, yPercent: 75 },
  { title: "Cloud Services", xPercent: 75, yPercent: 20 },
  { title: "Engineering", xPercent: 75, yPercent: 75 },
];

export default function GlowingNetwork() {
  const [active, setActive] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const center = {
    x: dimensions.width / 2,
    y: dimensions.height / 2,
  };

  return (
    <div className="relative flex justify-center items-center mx-auto w-11/12 h-screen overflow-hidden">
      {/* Center Logo */}
      <div className="top-1/2 left-1/2 z-10 absolute flex justify-center items-center bg-gradient-to-br from-gray-800 to-black shadow-xl ml-12 rounded-xl w-24 h-24 -translate-x-1/2 -translate-y-1/2">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
      </div>

      {/* Glowing Boxes */}
      {items.map((item, index) => {
        const x = (item.xPercent / 100) * dimensions.width;
        const y = (item.yPercent / 100) * dimensions.height;

        return (
          <button
            key={index}
            onClick={() => setActive(item.title)}
            className="absolute bg-black bg-opacity-60 shadow-md hover:shadow-purple-500/40 backdrop-blur-md px-6 py-3 border border-purple-500 rounded-lg focus:outline-none font-medium text-white text-sm md:text-lg hover:scale-105 transition-transform duration-300"
            style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
          >
            {item.title}
          </button>
        );
      })}

      {/* SVG Curved Lines */}
      <svg className="top-0 left-0 z-0 absolute w-full h-full pointer-events-none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            .draw-path {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: dash 2s ease forwards;
            }
            @keyframes dash {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </defs>

        {items.map((item, index) => {
          const x = (item.xPercent / 100) * dimensions.width;
          const y = (item.yPercent / 100) * dimensions.height;

          const dx = x - center.x;
          const dy = y - center.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const shorten = 60;
          if (distance === 0) return null;
          const ratio = (distance - shorten) / distance;

          const targetX = center.x + dx * ratio;
          const targetY = center.y + dy * ratio;

          const controlX1 = center.x + dx * 0.3;
          const controlY1 = center.y;
          const controlX2 = center.x + dx * 0.7;
          const controlY2 = y;

          return (
            <path
              key={index}
              d={`M ${center.x} ${center.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${targetX} ${targetY}`}
              stroke="#a855f7"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="draw-path"
            />
          );
        })}
      </svg>

      {/* Active Info Display */}
      {active && (
        <div className="bottom-4 absolute text-purple-400 text-sm md:text-base animate-pulse">
          You clicked: <strong>{active}</strong>
        </div>
      )}
    </div>
  );
}
