import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import hero4 from "../../assets/hero-4.jpg";
const slides = [
  {
    image: hero1,
    heading: "Smart Software. Smarter Future.",
    subheading: "AI-powered platforms designed for impact.",
  },
  {
    image:hero2,
    heading: "Code. Connect. Create.",
    subheading: "We turn bold ideas into scalable products.",
  },
  {
    image: hero3,
    heading: "Innovation at Every Pixel",
    subheading: "Symence blends AI & design for digital success.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 sec slide change

    return () => clearInterval(timer);
  }, []);

  const { image, heading, subheading } = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={image}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
        loading="lazy"
      />

      {/* Overlay with Typing + Animated Text */}
      <div className="absolute inset-0 flex justify-center items-center bg-black/50 px-4 text-white">
        <div
          key={current} // Ensures re-animation on slide change
          className="left-0 space-y-4 w-full max-w-5xl text-start animate-fade-in-up"
        >
          <h1 className="font-bold text-4xl md:text-6xl leading-tight">
            {heading}
            {/* <Typewriter
              words={[heading]}
              loop={false}
              typeSpeed={80}
              deleteSpeed={20}
              cursor
            /> */}
          </h1>
          <p className="opacity-90 text-lg md:text-xl transition duration-500">
            {subheading}
          </p>
          <button className="mt-4 text-white btn btn-primary">
            Let’s Build Together
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="btn btn-circle btn-sm md:btn-md"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="btn btn-circle btn-sm md:btn-md"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Hero;
