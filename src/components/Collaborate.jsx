import React from "react";
import { useNavigate } from "react-router-dom";

const Collaborate = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="relative bg-blue-100 mx-auto my-10 p-10 rounded-3xl w-10/12 overflow-hidden text-center">
      <h2 className="mb-8 font-semibold text-gray-700 text-3xl md:text-5xl">
        Power your digital <br /> transformation with us
      </h2>
      <button
        onClick={handleClick}
        className="bg-orange-400 hover:bg-orange-500 shadow-md px-8 py-3 rounded-xl font-semibold text-white text-lg transition-all duration-300"
      >
        Let's Collaborate!
      </button>

      {/* Optional background shape (like your image's wave) */}
      {/* <svg
        className="bottom-0 left-0 absolute w-full"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#dbeafe"
          fillOpacity="1"
          d="M0,64L60,101.3C120,139,240,213,360,234.7C480,256,600,224,720,197.3C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default Collaborate;
