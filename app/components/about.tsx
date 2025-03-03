"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaYinYang, FaChartLine, FaStar, FaSun, FaMoon, FaMagic, FaBookOpen, FaPrayingHands, FaOm, 
  FaHandsHelping, FaPhoneAlt, FaEnvelope, FaGlobe, FaEye, FaWhatsapp, FaArrowUp, FaHome, 
  FaAward, FaCertificate, FaInstagram, FaYoutube 
} from "react-icons/fa";
import { GiHolyGrail, GiTempleGate } from "react-icons/gi";
import { MdOutlineAutoAwesome } from "react-icons/md";

export default function About() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-gray-100 overflow-hidden">
      {/* Home Button */}
      <Link href="/" className="fixed top-5 left-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 z-[9999]">
        <FaHome className="text-2xl" />
      </Link>
      
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-10 lg:px-20 h-screen text-center md:text-left">
        <div className="w-full md:w-1/2">
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} 
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg">
            🔮 Meet Astrologer Gajanand Shastri Ji
          </motion.h1>
          <motion.p className="text-md md:text-lg mt-3 text-gray-300 tracking-wider leading-relaxed">
            Unlock the secrets of your destiny with the guidance of world-renowned astrologer Gajanand Shastri Ji. With years of experience and divine knowledge, he offers precise insights into your life’s challenges and opportunities.
          </motion.p>
        </div>
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
      
      {/* Services Section */}
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-900 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">🔹 Services Offered</motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: FaBookOpen, text: "Kundali Readings" },
            { icon: FaYinYang, text: "Vedic Remedies" },
            { icon: FaChartLine, text: "Career Guidance" },
            { icon: FaPrayingHands, text: "Spiritual Healing" },
          ].map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <service.icon className="text-6xl text-yellow-400" />
              <p className="mt-2 text-lg">{service.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/services" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-400 transition-all">
            Explore More
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-800 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">📞 Get in Touch</motion.h2>
        <p className="text-lg mb-4">Connect with Gajanand Shastri Ji for personalized astrological guidance.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <p><FaPhoneAlt className="inline text-yellow-400" /> <strong>Phone:</strong> 9587543485</p>
          <p><FaWhatsapp className="inline text-yellow-400" /> <strong>WhatsApp:</strong> 9587543485</p>
          <p><FaEnvelope className="inline text-yellow-400" /> <strong>Email:</strong> Shreechetnajyotishkendra@gmail.com</p>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="https://www.instagram.com/world_famous_panditji?igsh=cmcxcTlsZHNjdGZ3" target="_blank" className="text-yellow-400 text-3xl hover:text-yellow-300">
            <FaInstagram />
          </Link>
          <Link href="https://youtube.com/@panditgajanandshastriji?si=LzWlsPYdChhksuN7" target="_blank" className="text-yellow-400 text-3xl hover:text-yellow-300">
            <FaYoutube />
          </Link>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      {showScroll && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="fixed bottom-10 right-10 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300">
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}
