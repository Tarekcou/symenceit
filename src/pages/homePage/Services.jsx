import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  { title: "Artificial Intelligence" },
  { title: "Cloud Services" },
  { title: "Data Science" },
  { title: "Machine Learning" },
  { title: "Cybersecurity" },
];

export default function Services() {
  const [isActive, setIsActive] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const top = wrapperRef.current.getBoundingClientRect().top;
      if (top <= 0 && !isActive) {
        setIsActive(true);
        document.body.style.overflow = "hidden"; // ⛔ stop full page scroll
      }

      const bottom =
        wrapperRef.current.getBoundingClientRect().bottom - window.innerHeight;

      if (isActive && bottom <= 0) {
        setIsActive(false);
        document.body.style.overflow = "auto"; // ✅ resume scroll
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "auto"; // always clean up
    };
  }, [isActive]);

  return (
    <div ref={wrapperRef} className="relative bg-black h-[500vh]">
      {/* Pinned when isActive */}
      <div
        className={`${
          isActive ? "fixed" : "relative"
        } top-0 w-full h-screen z-50`}
      >
        <div className="w-full h-full overflow-y-scroll scroll-smooth snap-mandatory snap-y">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-fuchsia-700 mx-auto w-8/12 h-screen font-bold text-white text-4xl snap-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
