"use client";

import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [service, setService] = useState("");

  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 py-16 sm:py-24 text-center text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/background-image.jpg')", // Update the image path here
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mt-20 bg-transparent p-8 rounded-3xl shadow-xl max-w-4xl mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-4xl font-extrabold text-white mb-6 tracking-wide">
            Reach Out to AstroGuru
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Whether you&apos;re seeking cosmic insights or need guidance, we&apos;re here to align the stars with your queries.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <FaUser className="text-yellow-400 text-2xl" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-purple-300 bg-transparent text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400 text-2xl" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-purple-300 bg-transparent text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-yellow-400 text-2xl" />
                <input
                  type="tel"
                  placeholder="Your Phone (optional)"
                  className="w-full p-4 border border-purple-300 bg-transparent text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
              </div>
              <div className="relative">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full p-4 border border-purple-300 bg-transparent text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                >
                  <option value="" disabled className="text-black">
                    Select a Service
                  </option>
                  <option value="birth_chart" className="text-gray-700">
                    Birth Chart Reading
                  </option>
                  <option value="tarot_reading" className="text-gray-700">
                    Tarot Reading
                  </option>
                  <option value="compatibility" className="text-gray-700">
                    Compatibility Analysis
                  </option>
                  <option value="horoscope" className="text-gray-700">
                    Personal Horoscope
                  </option>
                </select>
              </div>
            </div>

            <div className="relative">
              <input
                type="date"
                className="w-full p-4 border border-purple-300 bg-transparent text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
              />
            </div>

            <div className="relative">
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-4 border border-purple-300 bg-transparent text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
