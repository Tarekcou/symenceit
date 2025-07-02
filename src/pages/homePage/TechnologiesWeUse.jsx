import React, { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

const techCategories = {
  Languages: [
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Ruby", icon: "🟥" },
    { name: "C#", icon: "🟪" },
    { name: "Python", icon: "🐍" },
    { name: "PHP", icon: "💠" },
    { name: "Swift", icon: "🕊️" },
    { name: "Java", icon: "☕" },
    { name: "Go", icon: "🐹" },
  ],
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "⏭️" },
    { name: "Vue.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🌬️" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟩" },
    { name: "Express.js", icon: "🚂" },
    { name: "Django", icon: "🎩" },
    { name: "Spring Boot", icon: "🌱" },
  ],
  "UX/UI": [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "🅧" },
    { name: "Sketch", icon: "✏️" },
  ],
  Services: [
    { name: "Firebase", icon: "🔥" },
    { name: "Stripe", icon: "💳" },
    { name: "Auth0", icon: "🔐" },
  ],
  Mobile: [
    { name: "React Native", icon: "📱" },
    { name: "Flutter", icon: "🦋" },
    { name: "Kotlin", icon: "🟣" },
  ],
  "Other Technologies": [
    { name: "GraphQL", icon: "🔺" },
    { name: "WebSockets", icon: "🌐" },
    { name: "Redis", icon: "🟥" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
  ],
};

export default function TechnologiesWeUse() {
  return (
    <div className="bg-white mx-auto px-6 py-12 max-w-7xl">
      <h2 className="mb-4 font-bold text-gray-900 text-3xl text-center">
        Technologies We Use
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-center">
        We combine expert resources with the latest technologies to deliver
        high-quality software solutions for your business.
      </p>

      {/* Headless UI Tabs */}
      <Tab.Group>
        <Tab.List className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(techCategories).map((category) => (
            <Tab key={category} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                    ${
                      selected
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {Object.values(techCategories).map((techList, idx) => (
            <Tab.Panel key={idx}>
              <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto w-10/12">
                {techList.map((tech, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 shadow-sm hover:shadow-md p-6 rounded-lg text-center transition"
                  >
                    <div className="mb-4 text-5xl">{tech.icon}</div>
                    <p className="font-medium text-gray-800 text-sm">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
