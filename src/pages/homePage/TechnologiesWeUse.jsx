import React, { useState } from "react";

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
  // "DevOps/Server": [
  //   { name: "Docker", icon: "🐳" },
  //   { name: "Kubernetes", icon: "☸️" },
  //   { name: "AWS", icon: "☁️" },
  //   { name: "Nginx", icon: "🌀" },
  //   { name: "GitLab CI/CD", icon: "🛠️" },
  // ],
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
  const [activeTab, setActiveTab] = useState("Languages");

  return (
    <div className="bg-white mx-auto px-6 py-12 max-w-7xl">
      <h2 className="mb-4 font-bold text-gray-900 text-3xl text-center">
        Technologies We Use
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-center">
        We combine expert resources with the latest technologies to deliver
        high-quality software solutions for your business.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-10 mb-10 border-b-1">
        {Object.keys(techCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`pb-1   cursor-pointer  font-medium ${
              activeTab === category
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-600 hover:text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Tech Items */}
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto w-10/12">
        {techCategories[activeTab].map((tech, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:shadow-md p-6 rounded-lg text-center transition"
          >
            <div className="mb-4 text-4xl">{tech.icon}</div>
            <p className="font-medium text-gray-800 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
