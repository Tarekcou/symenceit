import React from "react";
import { motion } from "framer-motion";
import { BiDownArrow, BiDownArrowAlt } from "react-icons/bi";
import office1 from "../../assets/office1.jpg";
import office2 from "../../assets/office2.jpg";
import office3 from "../../assets/office3.jpg";
const testimonials = [
  {
    id: 1,
    company: "Divisional Commissioner's Office, Chattogram",
    logo: "/logos/gov-logo.png",
    text: `Symence IT has played a key role in digitizing several public service operations. Their secure and scalable solutions have significantly improved our service delivery.`,
    author: "Md. Abdul Hannan",
    position: "Divisional Commissioner",
    image: "/people/hannan.png",
  },
  {
    id: 2,
    company: "SkyBuild Real Estate Ltd.",
    logo: "/logos/skybuild.png",
    text: `From CRM systems to online booking portals, Symence IT delivered exactly what we needed — on time and with great technical support.`,
    author: "Nusrat Sultana",
    position: "Managing Director",
    image: "/people/nusrat.png",
  },
  {
    id: 3,
    company: "Ministry of Education (ICT Division)",
    logo: "/logos/moedu.png",
    text: `Symence IT helped us roll out a digital education dashboard that supports thousands of users daily. Their expertise in education tech is remarkable.`,
    author: "Dr. M. A. Rahman",
    position: "ICT Consultant",
    image: "/people/rahman.png",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#fcf3ec] w-full h-screen overflow-y-scroll snap-mandatory snap-y">
      {/* Section Heading - shown at top of scroll */}
      <div className="flex flex-col justify-center items-center px-4 h-screen snap-start">
        <h2 className="font-bold text-gray-800 text-3xl md:text-4xl text-center">
          What Our Clients Say
        </h2>
        <p className="mt-4 max-w-xl text-gray-600 text-sm md:text-base text-center">
          Real feedback from industry professionals who trusted Symence IT with
          their digital needs.
        </p>

        <BiDownArrowAlt className="mt-3 text-5xl" />
      </div>

      {/* Vertical Scrollable Testimonials */}
      {testimonials.map((item, i) => (
        <motion.div
          key={item.id}
          className="flex justify-center items-center px-4 h-screen snap-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <div className="relative bg-green-100 shadow-xl p-8 rounded-2xl w-full max-w-3xl text-black">
            {/* Company */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={item.logo}
                alt={item.company}
                className="bg-white p-2 rounded-full w-14 h-14 object-contain"
              />
              <span className="font-semibold text-xl">{item.company}</span>
            </div>

            {/* Text */}
            <p className="mb-6 text-base md:text-lg italic leading-relaxed">
              “{item.text}”
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-purple-500 border-t">
              <p className="text-purple-400 text-sm">
                {item.author}, {item.position}
              </p>
              <img
                src={item.image}
                alt={item.author}
                className="border-2 border-purple-500 rounded-full w-14 h-14 object-cover"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonial;
