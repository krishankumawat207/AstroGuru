"use client";
import React from "react";
import { FaWhatsapp, FaOm } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Birth Chart Analysis",
    description:
      "Understand your strengths, challenges, and life's purpose through detailed chart readings.",
    image: "/s1.jpg",
  },
  {
    title: "Daily Horoscopes",
    description:
      "Stay aligned with cosmic energies through personalized daily horoscope updates.",
    image: "/s2.jpeg",
  },
  {
    title: "Zodiac Compatibility",
    description:
      "Explore your compatibility with others based on zodiac signs and cosmic influence.",
    image: "/s3.jpg",
  },
  {
    title: "Tarot Card Readings",
    description:
      "Gain clarity and guidance for life's questions through intuitive tarot readings.",
    image: "/s4.jpg",
  },
  {
    title: "Numerology Analysis",
    description:
      "Discover how numbers influence your life and destiny through numerology insights.",
    image: "/s5.avif",
  },
  {
    title: "Spiritual Counseling",
    description:
      "Experience personal growth and healing with our spiritual counseling sessions.",
    image: "/s6.jpg",
  },
];

const Services: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center font-['Poppins'] bg-gradient-to-b from-purple-800 via-purple-900 to-black text-white py-16">
      <div className="flex flex-col items-center my-6">
        <div className="w-24 h-1 bg-black"></div>
        <FaOm className="text-5xl text-yellow-600 my-3" />
        <div className="w-24 h-1 bg-black"></div>
      </div>

      <div className="text-center max-w-5xl px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-xl">
          AstroGuru Services
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          Unlock the power of the stars with our personalized astrology services, guiding you toward a fulfilled life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 px-6 max-w-7xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gradient-to-br from-purple-700 to-black p-8 rounded-2xl shadow-2xl transform transition duration-500 text-center border border-yellow-400 hover:border-red-500 hover:scale-105 hover:bg-opacity-90 hover:shadow-purple-500/50"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-xl transform transition duration-500 hover:scale-110 border-4 border-yellow-500"
                width={500}
                height={256}
              />
            </div>
            <h3 className="text-3xl font-bold text-yellow-400 mt-6 mb-4 drop-shadow-lg">
              {service.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white py-4 px-8 text-xl rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-green-400/50"
        >
          <FaWhatsapp className="text-2xl" /> Book on WhatsApp
        </a>
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-yellow-500 text-black py-3 px-6 text-lg rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-yellow-400/50"
        >
          Explore More Services
        </button>
      </div>
    </section>
  );
};

export default Services;
