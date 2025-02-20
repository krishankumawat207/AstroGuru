"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Amitabh Bachchan",
    text: "AstroGuru’s insights have guided me throughout my journey, helping me navigate life's challenges with clarity. Their predictions are extremely accurate and life-changing.",
    image: "/amitabh-bachchan.jpeg",
  },
  {
    name: "Rani Mukherjee",
    text: "AstroGuru offers the best astrological guidance. Their consultations have empowered me to make informed decisions in both my personal and professional life.",
    image: "/Rani-Mukherjee.jpeg",
  },
  {
    name: "Virat Kohli",
    text: "AstroGuru’s advice has significantly boosted my performance on the field. Their cosmic insights are spot on and truly inspirational.",
    image: "/virat-kohli.webp",
  },
  {
    name: "Shah Rukh Khan",
    text: "AstroGuru has completely transformed my outlook on life with their accurate predictions and life-changing insights.",
    image: "/shah-rukh-khan.jpeg",
  },
  {
    name: "Deepika Padukone",
    text: "The astrological guidance from AstroGuru has been my beacon of hope during challenging times, providing me with clarity and purpose.",
    image: "/deepika-padukone.jpeg",
  },
  {
    name: "Sachin Tendulkar",
    text: "Their reliable and precise readings helped me overcome personal obstacles and achieve greater heights in my career.",
    image: "/sachin-tendulkar.jpeg",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-wider uppercase text-yellow-500 mb-8 drop-shadow-lg">
          What Our Clients Say
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
          Top leaders, celebrities, and influencers trust AstroGuru for astrological guidance that empowers their decisions.
        </p>
        <div className="relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="max-w-lg bg-gray-800 p-8 rounded-lg shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-yellow-500 object-cover"
                />
              </div>
              <p className="text-lg sm:text-xl text-gray-300 italic px-4 leading-relaxed">
                “{testimonials[currentIndex].text}”
              </p>
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                {testimonials[currentIndex].name}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
