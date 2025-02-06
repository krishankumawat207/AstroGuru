"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-indigo-900 to-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 drop-shadow-xl">
            AstroGuru Services
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Unlock the power of the stars with our personalized astrology services, guiding you toward a fulfilled life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
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
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: loaded ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 text-center border border-yellow-400 hover:border-red-500"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl transform transition duration-500 hover:scale-110 border-4 border-yellow-500"
                  width={500} // Set the width
                  height={256} // Set the height
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
      </div>
    </section>
  );
}
