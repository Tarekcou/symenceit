import { motion } from "framer-motion";

const slides = [
  { title: "Artificial Intelligence" },
  { title: "Cloud Services" },
  { title: "Data Science" },
  { title: "Machine Learning" },
  { title: "Cybersecurity" },
];

export default function Services() {
  return (
    <div className="h-screen w-full bg-black overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-fuchsia-700 w-full h-screen font-bold text-white text-4xl snap-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {slide.title}
        </motion.div>
      ))}
    </div>
  );
}
