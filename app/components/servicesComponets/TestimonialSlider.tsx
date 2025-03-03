"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amitabh Bachchan",
    title: "Legendary Bollywood Actor",
    review: "Pandit Gajanand Shastri Ji's guidance has been a beacon of light in my life.",
    image: "/amitabh-bachchan.jpeg", // ✅ Correct way to reference images in public folder
  },
  {
    name: "Rani Mukherjee",
    title: "Famous Bollywood Actress",
    review: "With Pandit Ji’s accurate Kundali matching services, my life has been filled with harmony and prosperity.",
    image: "/Rani-Mukherjee.jpeg",
  },
  {
    name: "Virat Kohli",
    title: "Indian Cricket Star",
    review: "Performing Puja and Havan under Pandit Ji’s guidance has given me immense strength and focus before important matches.",
    image: "/virat-kohli.webp",
  },
  {
    name: "Anil Ambani",
    title: "Renowned Businessman",
    review: "Pandit Gajanand Shastri Ji’s Vastu consultation transformed my business.",
    image: "/Anil.webp",
  },
  {
    name: "Sachin Tendulkar",
    title: "Cricket Legend",
    review: "His Pitru Dosha remedies brought peace and prosperity to my family.",
    image: "/Sachin.jpg",
  },
  {
    name: "Deepika Padukone",
    title: "Leading Bollywood Actress",
    review: "Numerology insights from Pandit Ji have guided my career and personal life.",
    image: "/deepika.webp",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black text-white py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6">
          Celebrities Trust Pandit Gajanand Shastri Ji
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Experience life-changing astrological guidance with Pandit Ji’s expertise.
        </p>
        <div className="relative flex items-center justify-center overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-0 p-3 bg-gray-700 rounded-full hover:bg-gray-600 z-10"
          >
            <FaArrowLeft className="text-white text-2xl" />
          </button>
          <div className="w-80 h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">
              
                <Image
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500" 
                width={96} 
                height={96} 
                priority // ✅ Ensure images load faster
              />
              
                </div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-300 mb-2">{testimonials[currentIndex].title}</p>
                <p className="text-gray-200 italic">"{testimonials[currentIndex].review}"</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 p-3 bg-gray-700 rounded-full hover:bg-gray-600 z-10"
          >
            <FaArrowRight className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
