import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      company: "Divisional Commissioner's Office, Chattogram",
      logo: "/logos/gov-logo.png",
      text: `Symence IT has played a key role in digitizing several public service operations. Their secure and scalable solutions have significantly improved our service delivery.`,
      author: "Dr. Zia Uddin",
      position: "Divisional Commissioner",
      image: "https://file-chittagong.portal.gov.bd/media/4eb88688-a6e1-426f-8fac-d3ed578868cb/uploaded-files/WhatsApp%20Image%202024-12-03%20at%2014.26.10_d9837db2.jpg",
    },
    {
      id: 2,
      company: "SkyBuild Real Estate Ltd.",
      logo: "/logos/skybuild.png",
      text: `From CRM systems to online booking portals, Symence IT delivered exactly what we needed — on time and with great technical support.`,
      author: "Sharafat karim",
      position: "Managing Director",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      company: "Ministry of Education (ICT Division)",
      logo: "/logos/moedu.png",
      text: `Symence IT helped us roll out a digital education dashboard that supports thousands of users daily. Their expertise in education tech is remarkable.`,
      author: "Dr. M. A. Rahman",
      position: "ICT Consultant",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      id: 4,
      company: "Ministry of Education",
      logo: "/logos/moedu.png",
      text: `They built a scalable platform that handles thousands of users.`,
      author: "Dr. Abdul hamid",
      position: "Director",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <section className=" bg-indigo-400 bg-gradient-to-r py-20 px-4">
      <h2 className="text-black  text-center text-3xl font-bold mb-12">
        Client Testimonials
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 m-2 text-center hover:scale-[1.02] transition">
              <img
                src={item.image}
                alt={item.author}
                className="w-16 h-16 rounded-full mx-auto mb-3 shadow"
              />
              <p className="text-gray-700 italic mb-3">“{item.text}”</p>
              {/* <img
                src={item.logo}
                alt={item.company}
                className="h-8 mx-auto mb-2"
              /> */}
              <h4 className="font-semibold text-gray-900">{item.author}</h4>
              <p className="text-sm text-gray-500">{item.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
