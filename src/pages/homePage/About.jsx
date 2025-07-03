import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { BsShieldCheck, BsTools } from "react-icons/bs";

import office1 from "../../assets/office1.jpg";
import office2 from "../../assets/office2.jpg";
import office3 from "../../assets/office3.jpg";
import { Link } from "react-router";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative flex md:flex-row flex-col-reverse justify-between items-center bg-white px-6 md:px-20 py-16">
      {/* Image Section */}
      <motion.div
        className="relative w-full md:w-1/2  h-full px-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={office3}
          alt="Symence IT Office"
          className="mx-auto rounded-2xl w-full "
        />
        {/* Play Button */}
        <div
          onClick={() => setShowModal(true)}
          className="bottom-6 left-1/2 absolute bg-purple-100 shadow-lg p-3 rounded-full hover:scale-105 transition -translate-x-1/2 cursor-pointer transform"
        >
          <div className="flex justify-center items-center bg-purple-600 rounded-full w-10 h-10 text-white text-xl">
            ▶
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="mb-12 md:mb-0 w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block bg-purple-100 mb-4 px-4 py-1 rounded-full text-purple-700 text-sm">
          About Our Company ~
        </span>
        <h1 className="mb-6 font-bold text-4xl md:text-5xl">
          Website & <span className="text-purple-600">Software</span>{" "}
          Development Company
        </h1>
        <p className="mb-6 max-w-xl text-gray-600 text-lg">
          Symence IT is a modern software company focused on web development, E
          Commerce Solution, AI solutions, and enterprise tools. Our mission is
          to serve global clients with cutting-edge, scalable solutions across Bangladesh
         and beyond.
        </p>

        <div className="gap-4 grid grid-cols-2 mb-8 max-w-sm">
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
          <Link to={"/contact-us"} className="bg-purple-600 hover:bg-purple-700 shadow-lg px-6 py-3 rounded-full text-white transition duration-300 btn">
            Contact Us!
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-purple-100 rounded-full w-10 h-10 text-purple-700 text-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Call for help</p>
              <p className="font-semibold text-gray-900 text-lg">
                +88018181424256
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Slider Modal */}
      {showModal && (
        <motion.div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative bg-white shadow-xl p-6 rounded-lg w-[90%] md:w-[700px] h-96">
            <button
              className="top-3 cursor-pointer right-4 absolute font-bold text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <div className="space-y-4">
              <h3 className="mb-2 font-semibold text-xl">Our Work Showcase</h3>

              <div className="flex gap-4 h-96 overflow-x-auto scrollbar-hide">
                {[office1, office2, office3].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Office ${index + 1}`}
                    className="flex-shrink-0 rounded-lg w-64 h-64 object-cover"
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
