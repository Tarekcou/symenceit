import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      company: "CodeCraft Labs",
      logo: "/logos/codecraft.png",
      text: `Working with Symence IT felt like an extension of our own team. Their frontend expertise and attention to detail helped us launch two client portals successfully.`,
      author: "Erin Wallace",
      position: "Co-founder",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
    },
    {
      id: 2,
      company: "NovaCommerce",
      logo: "/logos/novacommerce.png",
      text: `Symence IT helped us modernize our online store with blazing fast load times and integrated checkout. Truly great support post-deployment.`,
      author: "Kevin Tran",
      position: "Head of Product",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
      id: 3,
      company: "HealthStack Digital",
      logo: "/logos/healthstack.png",
      text: `We needed a reliable partner for building our patient dashboard. Symence delivered a secure, clean, and scalable platform.`,
      author: "Dr. Priya Kapoor",
      position: "CTO",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
      id: 4,
      company: "BlueGrid Analytics",
      logo: "/logos/bluegrid.png",
      text: `From interactive dashboards to API integrations, Symence handled everything smoothly. Great communication and reliable timelines.`,
      author: "Marco Silva",
      position: "Senior Data Engineer",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 px-4 py-16">
      <h2 className="mb-12 font-bold text-white text-xl md:text-4xl text-center">
        What Our Clients Say
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
        className="mx-auto max-w-6xl"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/90 shadow-xl backdrop-blur-md m-2 p-6 rounded-xl text-center hover:scale-[1.02] transition">
              <img
                src={item.image}
                alt={item.author}
                className="shadow mx-auto mb-3 rounded-full w-16 h-16"
              />
              <p className="mb-3 text-gray-700 italic">“{item.text}”</p>
              <h4 className="font-semibold text-gray-900">{item.author}</h4>
              <p className="text-gray-500 text-sm">{item.position}</p>
              <p className="mt-1 text-gray-400 text-xs italic">
                {item.company}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
