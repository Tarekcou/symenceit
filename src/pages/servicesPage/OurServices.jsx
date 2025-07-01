import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { RiGovernmentLine } from "react-icons/ri";
import { RiHealthBookFill } from "react-icons/ri";
import { MdEmojiTransportation, MdOutlineContactPhone } from "react-icons/md";
import { GiSatelliteCommunication } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { PiContactlessPaymentDuotone } from "react-icons/pi";
import { MdAgriculture } from "react-icons/md";

const services = [
  {
    title: "Government",
    icon: <RiGovernmentLine />,
    path: "/services/government",
  },
  {
    title: "Health Care",
    icon: <RiHealthBookFill />,
    path: "/services/health",
  },
  {
    title: "Contact Center",
    icon: <MdOutlineContactPhone />,
    path: "/services/contact",
  },
  {
    title: "Communication",
    icon: <GiSatelliteCommunication />,
    path: "/services/communication",
  },
  {
    title: "Education",
    icon: <MdCastForEducation />,
    path: "/services/education",
  },
  {
    title: "Payment Gateway",
    icon: <PiContactlessPaymentDuotone />,
    path: "/services/payment",
  },
  {
    title: "Agriculture",
    icon: <MdAgriculture />,
    path: "/services/agriculture",
  },
  {
    title: "Transportation",
    icon: <MdEmojiTransportation />,
    path: "/services/transportation",
  },
];

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#e6f6f5] px-6 md:px-20 py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-4 font-semibold text-4xl">
          Industry-Standard Tailored Solutions
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600 text-lg">
          At <strong>Symence IT</strong>, we specialize in web and AI solutions
          tailored to meet unique business needs. Our expert team combines deep
          industry knowledge with modern technology to deliver scalable,
          efficient, and innovative results.
        </p>
      </div>

      <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            onClick={() => navigate(service.path)}
            className="bg-white hover:bg-purple-50 shadow-md p-6 rounded-xl text-center cursor-pointer"
          >
            <div className="flex justify-center items-center w-full text-center">
              <h1 className="text-blue-500 text-3xl">{service.icon}</h1>
            </div>

            <h3 className="font-semibold text-lg">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
