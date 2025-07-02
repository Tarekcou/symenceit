import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailLottie from "../../assets/emaillotties.json"
          import { Player } from "@lottiefiles/react-lottie-player";
import About from "../homePage/About";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4 py-12 pt-20 min-h-screen">
      {/* Heading Section */}
      <div className="mb-10 text-center">
        <h1 className="font-bold text-gray-800 text-4xl md:text-5xl">
          Connect, Collaborate, Create
        </h1>
        <p className="mx-auto mt-2 w-10/12 md:w-8/12 text-gray-600 text-lg">
          Great ideas start with a conversation. Reach out to discuss your
          goals, explore partnerships, or get support. Together, we’ll turn
          possibilities into achievements.{" "}
        </p>
      </div>

    {/* About Page */}
    <div>
      <About />   

    </div>

      {/* Form & Animation */}
      <div className="flex md:flex-row flex-col-reverse items-center gap-10 w-full max-w-6xl">
        {/* Left side: Lottie/illustration */}
        <div className="w-full md:w-1/2">
          {/* <DotLottieReact
            src="https://lottie.host/04bce22b-607e-4df4-8398-1499a682cff8/wMfW4qpJdW.lottie"
            loop
            autoplay
          /> */}
          <Player
            autoplay
            loop
            src={emailLottie}
            style={{ height: "300px", width: "100%" }}
          />
        </div>

        {/* Right side: Form */}
        <div className="bg-gray-100 shadow-lg p-8 rounded-2xl w-full md:w-1/2">
          <form className="space-y-6">
            <div className="flex gap-2">
              <div>
                <label className="label">
                  <span className="text-lg label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input-bordered w-full input"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-lg label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="input-bordered w-full input"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="text-lg label-text">Your Message</span>
              </label>
              <textarea
                className="textarea-bordered w-full min-h-[120px] textarea"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-block text-lg btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
