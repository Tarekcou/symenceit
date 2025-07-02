import { div } from "framer-motion/client";
import React from "react";

const items = [
  { label: "Software Development", icon: "💬" },
  { label: "Skill Development", icon: "🧠" },
  { label: "Cyber Security", icon: "🛡️" },
  { label: "Contact Center", icon: "🎧" },
  { label: "Artificial Intelligence", icon: "🤖" },
  { label: "App Development", icon: "📱" },
  { label: "Big Data Managment", icon: "🗃️" },
  { label: "Large Language Model", icon: "🧾" },
  { label: "Cloud Computing", icon: "☁️" },
  { label: "DevOps", icon: "🔄" },
  { label: "Data Science and Analytics", icon: "📊" },
  { label: "Machine Learning (ML)", icon: "🧠" },
  { label: "Microservices Architecture", icon: "🧩" },
  { label: "Software as a Service (SaaS)", icon: "🌐" },
  { label: "Enterprise Resource Planning", icon: "📈" },
  { label: "Content Management Systems", icon: "📝" },
];

export default function ServiceGrid() {
  return (
    <div className="bg-amber-50 mx-auto w-full pt-16">
      <div className="space-y-3 mx-auto  w-9/12 text-left">
        <h1 className="font-bold text-2xl">Services you can get</h1>
      <p className="text-gray-700">
        We offer a wide range of services to meet your needs. From software
        development to cybersecurity, our team is here to help you succeed.
        </p>
      </div>
      
      <div className="flex justify-center items-center mx-auto -mt-16 p-6 w-11/12 md:w-10/12 min-h-screen">
        <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg p-4 rounded-xl text-center transition-shadow duration-300"
            >
              <div className="mb-4 text-gray-400">
                <div className="flex justify-center items-center bg-gray-100 mx-auto rounded-full w-10 h-10 text-lg">
                  <span className="text-5xl">{item.icon}</span>
                </div>
              </div>
              <div className="font-medium text-gray-800 text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
