import React, { useState } from "react";
import emailLottie from "../../assets/emaillotties.json";
import About from "../homePage/About";
import Lotties from "../../components/Lotties";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate submission delay
    setTimeout(() => {
      setSubmitted(true);

      // ✅ Clear form fields
      setName("");
      setEmail("");
      setMessage("");

      // Auto-hide success message
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center my-10 px-4 py-12 pt-20 min-h-screen">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="font-bold text-gray-800 text-4xl md:text-5xl">
          Connect, Collaborate, Create
        </h1>
        <p className="mx-auto mt-2 w-10/12 md:w-8/12 text-gray-600 text-lg">
          Great ideas start with a conversation. Reach out to discuss your
          goals, explore partnerships, or get support. Together, we’ll turn
          possibilities into achievements.
        </p>
      </div>

      {/* About Section */}
      <About />

      {/* Form & Animation */}
      <div className="flex md:flex-row flex-col-reverse items-center gap-10 w-full max-w-6xl">
        {/* Lottie Animation */}
        <div className="w-full md:w-1/2">
          <Lotties lottie={emailLottie} />
        </div>

        {/* Form */}
        <div className="bg-gray-100 shadow-lg p-8 rounded-2xl w-full md:w-1/2">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div className="w-full">
                <label className="label">
                  <span className="text-lg label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="input-bordered w-full input"
                  required
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="text-lg label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-block text-lg btn btn-primary bg-purple-500"
            >
              Submit
            </button>
          </form>

          {/* ✅ Success Message */}
          {submitted && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow-md animate-fade-in">
              <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
              <p>Thank you for reaching out. We’ll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
