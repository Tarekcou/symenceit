import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Government", icon: "/assets/icons/government.png", path: "/services/government" },
  { title: "Health Care", icon: "/assets/icons/health.png", path: "/services/health" },
  { title: "Contact Center", icon: "/assets/icons/contact.png", path: "/services/contact" },
  { title: "Communication", icon: "/assets/icons/communication.png", path: "/services/communication" },
  { title: "Education", icon: "/assets/icons/education.png", path: "/services/education" },
  { title: "Payment Gateway", icon: "/assets/icons/payment.png", path: "/services/payment" },
  { title: "Agriculture", icon: "/assets/icons/agriculture.png", path: "/services/agriculture" },
  { title: "Transportation", icon: "/assets/icons/transport.png", path: "/services/transportation" },
  { title: "Life Insurance", icon: "/assets/icons/insurance.png", path: "/services/insurance" },
];

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#e6f6f5] py-16 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold mb-4">Industry-Standard Tailored Solutions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At <strong>Symence</strong>, we specialize in web and AI solutions tailored to meet unique business needs. Our expert team combines deep industry knowledge with modern technology to deliver scalable, efficient, and innovative results.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            onClick={() => navigate(service.path)}
            className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:bg-purple-50"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
