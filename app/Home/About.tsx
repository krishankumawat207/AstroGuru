"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaYinYang, FaChartLine, FaStar, FaSun, FaMoon, FaMagic, FaBookOpen, FaPrayingHands, FaOm, FaHandsHelping, FaPhoneAlt, FaEnvelope, FaGlobe, FaEye, FaBible, FaWhatsapp, FaArrowUp, FaHome, FaAward, FaCertificate } from "react-icons/fa";

export default function About() {
  const [isClient, setIsClient] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-gray-100 overflow-hidden">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="fixed top-5 left-5 bg-gray-800 text-white p-3 rounded-full shadow-lg 
                   hover:bg-gray-700 transition-all duration-300 cursor-pointer z-[9999] pointer-events-auto"
      >
        <FaHome className="text-2xl" />
      </Link>

      {/* Hero Section with Background Animation */}
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-10 lg:px-20 h-screen text-center md:text-left">
        {/* Background Animation */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute w-full h-full bg-[url('/astrology-bg.svg')] bg-cover bg-center opacity-30"
          />
        </div>

        {/* Left Section */}
        <div className="w-full md:w-1/2 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg"
          >
            ✨ Unlock Your Destiny with Guruji
          </motion.h1>
          <motion.p className="text-md md:text-lg mt-3 text-gray-300 tracking-wider leading-relaxed">
            Expert astrologer from Jaipur, specializing in Kundali readings, Vedic rituals, and life guidance. Discover your true path today.
          </motion.p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <Link href="/about">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
                Read More
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Explore More Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                Consult Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <motion.div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 relative z-10">
          <div className="relative">
            <Image src="/profile1.jpg" alt="Guruji" width={300} height={300} className="rounded-3xl shadow-2xl border-4 border-yellow-500 transition-transform duration-300 transform hover:scale-105" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
