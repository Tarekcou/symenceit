"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowBigDown,
  ArrowBigUp,
  ArrowBigLeft,
  ArrowBigRight,
} from "lucide-react";
import { div } from "framer-motion/client";

const services = [
  {
    label: "Web Development",
    path: "web-development",
    position: "top",
    Icon: ArrowBigDown,
  },
  {
    label: "E-commerce Solution",
    path: "ecommerce-solution",
    position: "bottom",
    Icon: ArrowBigUp,
  },
  {
    label: "Mobile App Development",
    path: "mobile-app-development",
    position: "left",
    Icon: ArrowBigRight,
  },
  {
    label: "Data Science",
    path: "data-science",
    position: "right",
    Icon: ArrowBigLeft,
  },
];

const GlowingNetwork = () => {
  return (
    <div className="mx-auto w-full md:w-10/12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center bg-base-50 mx-auto rounded-xl w-full h-[500px] sm:h-[600px] overflow-hidden"
      >
        {/* Glowing Circular Background */}
        <div className="z-0 absolute shadow-inner blur-[2px] border border-purple-500/80 rounded-full w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] animate-pulse"></div>

        {/* Multiple rings */}
        <div className="z-0 absolute blur-sm border border-purple-400/60 rounded-full w-[300px] h-[300px]" />
        <div className="z-0 absolute blur-sm border border-purple-400/40 rounded-full w-[400px] h-[400px] animate-pulse" />
        <div className="z-0 absolute blur-sm border border-purple-400/30 rounded-full w-[500px] h-[500px]" />

        {/* Center Company Name */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          className="z-10 absolute bg-gradient-to-r from-indigo-500 to-purple-600 shadow-2xl px-8 py-5 rounded-full font-bold text-white text-xl sm:text-2xl text-center"
        >
          Symence IT
        </motion.div>

        {/* Service Nodes */}
        {services.map((service, idx) => {
          const commonClasses = "absolute flex flex-col items-center gap-2";
          const positionStyles =
            service.position === "top"
              ? "md:top-6 md:left-1/2 md:-translate-x-1/2 top-4 left-1/2 -translate-x-1/2"
              : service.position === "bottom"
              ? "md:bottom-6 md:left-1/2 md:-translate-x-1/2 bottom-4 left-1/2 -translate-x-1/2"
              : service.position === "left"
              ? "md:left-36 md:top-1/2 md:-translate-y-1/2 top-24 left-1/2 -translate-x-1/2"
              : "md:right-6 md:top-1/2 md:-translate-y-1/2 md:top-24 bottom-24 right-1/2 left-1/2 -translate-x-1/2";


          const Icon = service.Icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className={`${commonClasses} ${positionStyles} z-10`}
            >
              <Link
                to={`/service/${service.path}`}
                className="bg-slate-800 shadow-lg px-6 sm:px-8 py-3 rounded-full font-semibold text-white text-sm sm:text-base text-center whitespace-nowrap hover:scale-105 transition-transform duration-300"
              >
                {service.label}
              </Link>
              {/* <Icon
              className="text-purple-400 animate-pulse"
              size={32}
              strokeWidth={2.5}
            /> */}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default GlowingNetwork;
