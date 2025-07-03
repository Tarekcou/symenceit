import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import hero4 from "../../assets/hero-4.jpg";
import { Link } from "react-router-dom"; 

import arrowLottie from "../../assets/arrowLottie.json"
import Lotties from "../../components/Lotties";
import { Player } from "@lottiefiles/react-lottie-player";
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
    subheading: "Symence IT blends AI & design for digital success.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false); // reset on slide change
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
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

      {/* Overlay */} 
{/* Overlay */}
<div className="absolute inset-0 z-40 flex justify-center items-center w-full h-full bg-black/60 px-4 text-white">
        <div
          key={current}
          className="left-0 space-y-4 w-full max-w-5xl text-start animate-fade-in-up"
        >
          <h1 className="font-bold text-4xl md:text-6xl leading-tight">
            {heading}
          </h1>
          <p className="opacity-90 text-lg md:text-xl transition duration-500">
            {subheading}
          </p>




          <div>
            {/* <div className="badge badge-soft badge-info"></div> */}

            <p className="opacity-90 p-4 md:text-md text-xl badge badge-soft badge-info">
              <Typewriter
                words={[
                  "Website Development",
                  "Mobile Apps Development",
                  "E-commerce",
                ]}
                loop={2}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>
          <div className="z-60 w-24">
            
            <Link
              to={"/contact-us"}
              className="absolute bg-purple-600 hover:bg-purple-700 shadow-lg px-6 py-3 border-none rounded-lg text-white transition duration-300 btn"
            >
              Let’s Build Together
            </Link>
          </div>
          
        </div>
      </div>

      <div className="absolute  !bottom-1 0 w-full  z-50">
                   <Player
                              autoplay
                              loop
                              src={arrowLottie}
                              style={{ height: "120px", width: "100%" }}
                            />

      </div>



      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-50 flex justify-between items-center px-4">
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
