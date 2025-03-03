"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import {  GiTempleGate, GiHolyGrail } from "react-icons/gi";
import { MdOutlineAutoAwesome } from "react-icons/md";

export default function About() {
  const [isClient, setIsClient] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-gray-100 overflow-hidden">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="fixed top-5 left-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 z-[9999]"
      >
        <FaHome className="text-2xl" />
      </Link>

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 h-screen text-center md:text-left">
        {/* Background Animation */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute w-full h-full bg-[url('/astrology-bg.svg')] bg-cover bg-center opacity-40"
          />
        </div>

        {/* Left Section */}
        <div className="w-full md:w-1/2 relative z-10 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg"
          >
            ✨ Discover Your True Destiny
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl mt-3 text-gray-300 tracking-wide leading-relaxed"
          >
            Meet Guruji, an expert astrologer from Jaipur, specializing in Vedic astrology, Kundali readings, and life guidance. Unravel the mysteries of your future today.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/about">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition transform hover:scale-105 shadow-md">
                Read More
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition transform hover:scale-105 shadow-md">
                Explore Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition transform hover:scale-105 shadow-md">
                Consult Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Astrology & Hinduism Related Icons */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-72 h-72 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full shadow-2xl flex items-center justify-center border-4 border-yellow-500 animate-pulse">
            <div className="flex flex-col items-center space-y-3">
              {/* <GiChakra className="text-5xl text-white" /> */}
              <GiTempleGate className="text-5xl text-white" />
              <GiHolyGrail className="text-5xl text-white" />
              <MdOutlineAutoAwesome className="text-5xl text-white" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}