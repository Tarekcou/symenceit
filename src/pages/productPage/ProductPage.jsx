import React from 'react'
import Stats from '../homePage/Stats';
import ecourt from "../../assets/ecourt.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Collaborate from '../../components/Collaborate';
import { FaBriefcase, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import bari from "../../assets/bari.png";
import tutorly from "../../assets/tutorly.png";
const ProductPage = () => {
  return (
    <div className="flex flex-col items-center bg-amber-50 px-4 py-12 pt-36 min-h-screen">
      {/* Heading Section */}
      <div className="mb-10 w-full text-center">
        <h1 className="font-bold text-gray-800 text-4xl md:text-5xl">
          Every Step Tells Our Story
        </h1>
        <p className="mx-auto mt-2 w-10/12 md:w-8/12 text-gray-600 text-lg">
          At Symence IT, we deliver smart digital solutions to help businesses grow
          in a fast-changing world. Our expert team works across sectors like
          HealthTech, FinTech, Education, e-Governance, Agriculture, Telecom,
          and eCommerce. From web and mobile apps to AI-driven tools, we build
          scalable and secure systems that meet global standards. With solid
          experience in both public and private sectors, Symence IT is trusted as a
          reliable tech partner in Bangladesh and beyond. We don’t just build
          software — we create real impact.
        </p>

        <Stats />
      </div>

      <div className="bg-gray-50 w-full">
        <VerticalTimeline className="mx-auto">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentClassName="bg-blue-600 text-white shadow-xl rounded-lg"
            contentArrowStyle={{ borderRight: "16px solid rgb(37, 99, 235)" }} // still required for arrow
            date="2025 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <div className="mx-auto my-2 w-full">
              <img src={ecourt} alt="e court" />
            </div>
            <h3 className="mb-1 font-bold text-xl">
              অতিরিক্ত বিভাগীয় কমিশনার রাজস্ব আদালত ই কোর্ট{" "}
            </h3>
            <h4 className="mb-3 font-semibold text-blue-1500 text-md">
              বিভাগীয় কমিশনারের কার্যালয়, চট্টগ্রাম
            </h4>
            <p className="!text-sm leading-relaxed">
              ১) সকল স্টেকহোল্ডার (বাদি, বিবাদি, উকিল) এর কাছে মামলার অবস্থা,
              পরবর্তি তারিখ, এবং অন্য সকল তথ্য সহজে পৌছানো ২) SMS এর মাধ্যমে
              তথ্য প্রেরন। এতে করে উকিল কর্তৃক হয়রানি বন্ধ করন ৩) এসিল্যান্ড
              আদালত, এডিসি আদালত এর মধ্যে সমন্বয় সাধনের মাধ্যমে মামলা সংক্রান্ত
              জটিলতা নিরসন।
            </p>
            <Link
              className="btn btn-success"
              to={"https://mamladiary-client.vercel.app/"}
            >
              View
            </Link>
          </VerticalTimelineElement>

          {/* 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentClassName="bg-blue-600 text-white shadow-xl rounded-lg"
            contentArrowStyle={{ borderRight: "16px solid rgb(37, 99, 235)" }} // still required for arrow
            date="2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <div className="mx-auto my-2 w-full">
              <img src={bari} alt="e court" />
            </div>
            <h3 className="mb-1 font-bold text-xl">
              Bari Bazar(Real State Company)
            </h3>
            <h4 className="mb-3 font-semibold text-blue-1500 text-md">Dhaka</h4>
            <p className="!text-sm leading-relaxed">
              1) Real state company website 2) User can buy and sell their
              properties 3) Admin can manage all the users and their properties
            </p>
            <Link
              className="btn btn-success"
              to={"https://baribazar-9589d.web.app/"}
            >
              View
            </Link>
          </VerticalTimelineElement>

          {/* 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentClassName="bg-blue-600 text-white shadow-xl rounded-lg"
            contentArrowStyle={{ borderRight: "16px solid rgb(37, 99, 235)" }} // still required for arrow
            date="2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <div className="mx-auto my-2 w-full">
              <img src={tutorly} alt="e court" />
            </div>
            <h3 className="mb-1 font-bold text-xl">
              Tutorly (Tutor finding application)
            </h3>
            <h4 className="mb-3 font-semibold text-blue-1500 text-md">Dhaka</h4>
            <p className="!text-sm leading-relaxed">
              1) Tutor finding application 2) User can find tutor based on
              language 3) User can book a tutor for their learning 4) Admin can
              manage all the users and their bookings
            </p>
            <Link
              className="btn btn-success"
              to={"https://online-tutor-2c707.firebaseapp.com/"}
            >
              View
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>

      <div className="bg-gray-50 w-full">
        <Collaborate />
      </div>
    </div>
  );
}

export default ProductPage