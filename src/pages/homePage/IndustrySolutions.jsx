import { Link } from "react-router-dom";

const sectors = [
  {
    title: "AI Solutions",
    count: "4+",
    description: "Building intelligent tools using cutting-edge machine learning models.",
    color: "bg-rose-100",
    path: "/sectors/ai",
  },
  {
    title: "E-Commerce Platforms",
    count: "10+",
    description: "Scalable, secure, and sleek platforms for modern online businesses.",
    color: "bg-indigo-100",
    path: "/sectors/ecommerce",
  },
  {
    title: "EdTech Tools",
    count: "3+",
    description: "Transforming education through modern learning systems and platforms.",
    color: "bg-green-100",
    path: "/sectors/edtech",
  },
  {
    title: "Healthcare Tech",
    count: "12+",
    description: "AI-driven patient care, management tools, and telemedicine platforms.",
    color: "bg-pink-100",
    path: "/sectors/healthcare",
  },
  {
    title: "FinTech Systems",
    count: "4+",
    description: "Payment gateways, digital wallets, and secure finance systems.",
    color: "bg-yellow-100",
    path: "/sectors/fintech",
  },
];

export default function IndustrySolutions() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#fdf4ef] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Smart Tech Solutions by Symence
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>Symence</strong>, we develop modern web platforms and intelligent applications that solve real-world challenges. From AI-powered systems to secure, scalable software, our mission is to deliver tailored digital experiences that empower businesses in every industry.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/assets/flag-bd-tech-map.png"
            alt="Bangladesh Tech Map"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Sector Blocks */}
      <section className="bg-[#f6fafe] py-20 px-6 md:px-20">
        <h3 className="text-3xl md:text-4xl font-medium mb-12">
          Crafting Industry-Specific Solutions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Link
              key={index}
              to={sector.path}
              className={`${sector.color} p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300`}
            >
              <div className="text-4xl font-semibold text-gray-900 mb-2">{sector.count}</div>
              <div className="font-medium text-gray-800 mb-1">{sector.title}</div>
              <p className="text-gray-600 text-sm">{sector.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
