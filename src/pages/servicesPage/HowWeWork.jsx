import React from "react";

const stages = [
  { label: "Conceptualization", icon: "💡" },
  { label: "Specifications", icon: "📋" },
  { label: "Design", icon: "✏️" },
  { label: "Development", icon: "💻" },
  { label: "QA", icon: "🧪" },
  { label: "Project/Feature Launch", icon: "🚀" },
  { label: "Ongoing Collaboration", icon: "🔁" },
];

export default function HowWeWork() {
  return (
    <div className="bg-gray-50 px-6 py-12 text-gray-800 text-center">
      <h2 className="mb-4 font-bold text-3xl">How We Work</h2>
      <p className="mx-auto max-w-3xl text-lg">
        No matter the project&apos;s complexity, we apply a pragmatic approach
        to deliver projects through agile-driven stages. There are{" "}
        <span className="font-semibold text-orange-500">different ways</span> to
        collaborate with us, but this is our path to bring you success for your
        software project:
      </p>

      {/* Stage bar */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-6 bg-gradient-to-r from-pink-500 via-pink-600 to-orange-400 px-6 py-3 rounded-full font-semibold text-white">
          <span>IMAGINE</span>
          <span className="text-2xl">&gt;</span>
          <span>BUILD</span>
          <span className="text-2xl">&gt;</span>
          <span>SUCCEED</span>
        </div>
      </div>

      {/* Stage steps */}
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mx-auto mt-12 max-w-6xl">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2 text-4xl">{stage.icon}</div>
            <p className="font-medium text-orange-600 text-sm">{stage.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
