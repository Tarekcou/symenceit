import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { BsShieldCheck, BsTools } from "react-icons/bs";
import img1 from "../../assets/hero-1.jpg"
const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white relative">
      {/* Image Section */}
      <motion.div
        className="relative w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={img1}
          alt="Team Member"
          className="rounded-2xl w-full max-w-md mx-auto"
        />
        {/* Play Button */}
        <div
          onClick={() => setShowModal(true)}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-100 p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
        >
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
            ▶
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="w-full md:w-1/2 mb-12 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 text-sm bg-purple-100 text-purple-700 rounded-full mb-4">
          About Our Company ~
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Website & <span className="text-purple-600">Software</span> Development Company
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-xl">
          Symence is a modern software company focused on AI solutions, web development, and enterprise tools. Our mission is to serve global clients with cutting-edge, scalable solutions across the UAE, USA, UK, Spain, Bangladesh, and beyond.
        </p>

        <div className="grid grid-cols-2 gap-4 max-w-sm mb-8">
          <div className="flex items-center gap-3">
            <BsShieldCheck className="text-purple-600 text-2xl" />
            <span className="font-medium">Premium Services</span>
          </div>
          <div className="flex items-center gap-3">
            <BsTools className="text-purple-600 text-2xl" />
            <span className="font-medium">Technical Support</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
            Contact Us!
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call for help</p>
              <p className="text-lg font-semibold text-gray-900">+8801768607919</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Slider Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white rounded-lg shadow-xl p-6 relative w-[90%] md:w-[700px]">
            <button
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Our Work Showcase</h3>

              {/* Basic Image Slider */}
              <div className="flex overflow-x-auto gap-4">
                {["1.png", "2.png", "3.png"].map((img, index) => (
                  <img
                    key={index}
                    src={`/assets/slider/${img}`}
                    alt={`Slide ${index}`}
                    className="rounded-lg w-64 h-40 object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default About;
