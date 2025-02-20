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
      <Link href="/" className="fixed top-5 left-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer z-[9999] pointer-events-auto">
        <FaHome className="text-2xl" />
      </Link>
      
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-10 lg:px-20 h-screen text-center md:text-left">
        <div className="w-full md:w-1/2">
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg">
            ✨ Meet Astrologer Karan Sharma
          </motion.h1>
          <motion.p className="text-md md:text-lg mt-3 text-gray-300 tracking-wider leading-relaxed">
            Life is full of mysteries, ups and downs, happiness and sorrows. While situations are beyond our control, astrology helps in managing them. Astrologer Karan Sharma, with years of experience, offers guidance in relationships, business, career, health, and more.
          </motion.p>
        </div>
        <motion.div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative">
            <Image src="/karan-sharma.jpg" alt="Astrologer Karan Sharma" width={300} height={300} className="rounded-3xl shadow-2xl border-4 border-yellow-500 transition-transform duration-300 transform hover:scale-105" />
          </div>
        </motion.div>
      </div>
      
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-900 text-gray-300 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Why Choose Karan Sharma?</motion.h2>
        <p className="text-lg mb-6">Astrology has been a part of our family for generations. My great-grandfather accurately predicted major historical events. Blessed by my ancestors, I continue to guide people with authentic remedies, refining my skills under my mentor and grand uncle.</p>
      </div>

      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-900 text-gray-300 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Services Offered</motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <FaBookOpen className="text-6xl text-blue-400" />
            <p className="mt-2">Kundali Readings</p>
          </div>
          <div className="flex flex-col items-center">
            <FaYinYang className="text-6xl text-red-400" />
            <p className="mt-2">Vedic Remedies</p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine className="text-6xl text-green-400" />
            <p className="mt-2">Career Astrology</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPrayingHands className="text-6xl text-yellow-400" />
            <p className="mt-2">Spiritual Guidance</p>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/services" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-400 transition-all">
            Explore More
          </Link>
        </div>
      </div>
      
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-800 text-gray-300 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Testimonials</motion.h2>
        <div className="space-y-6">
          <p className="text-lg">"Astrologer Karan Sharma helped me remove evil eye effects when things were not going well for me." – Rajan Verma, USA</p>
          <p className="text-lg">"His numerology service helped me recover my business losses and expand internationally." – Diya Sharma, India</p>
          <p className="text-lg">"His remedies changed my child's behavior for the better." – Manvi Jain, London</p>
        </div>
      </div>

      {/* New Section: Astrological Philosophy */}
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-900 text-gray-300 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Astrological Philosophy</motion.h2>
        <p className="text-lg mb-6">At the core of my practice lies the belief that astrology is not just about predicting the future, but about empowering individuals to make informed decisions based on celestial influences. Each consultation aims to enlighten and inspire, guiding clients toward their unique paths.</p>
      </div>

      {/* New Section: Community Involvement */}
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-800 text-gray-300 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Community Involvement</motion.h2>
        <p className="text-lg mb-6">I believe in giving back to the community. My workshops and seminars aim to educate people about astrology, helping them to harness the positive energies in their lives. Together, we strive to create a supportive environment where knowledge can be shared freely.</p>
      </div>

      {/* New Section: FAQs */}
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-900 text-gray-300 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Frequently Asked Questions</motion.h2>
        <div className="space-y-4">
          <p className="text-lg"><strong>Q: How do I prepare for a consultation?</strong></p>
          <p className="text-lg">A: It is beneficial to prepare specific questions and provide your birth details (date, time, and place) to ensure accurate readings.</p>

          <p className="text-lg"><strong>Q: What is the duration of the sessions?</strong></p>
          <p className="text-lg">A: Sessions typically last 60 to 90 minutes, allowing ample time for discussion and exploration of your concerns.</p>

          <p className="text-lg"><strong>Q: Can astrology predict my future?</strong></p>
          <p className="text-lg">A: Astrology provides insights into potential trends and influences, empowering you to make informed decisions rather than deterministic predictions.</p>
        </div>
      </div>
      
      {/* New Section: Contact Information */}
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-800 text-gray-300 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Get in Touch</motion.h2>
        <p className="text-lg mb-4">If you have any questions or would like to schedule a consultation, feel free to reach out!</p>
        <div className="flex justify-center gap-6">
          <p><FaPhoneAlt className="inline text-yellow-400" /> +1 (234) 567-890</p>
          <p><FaEnvelope className="inline text-yellow-400" /> info@karansharma.com</p>
        </div>
        <div className="mt-4">
          <Link href="/contact" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-yellow-400 transition-all">
            Contact Us
          </Link>
        </div>
      </div>
  {/* Scroll to Top Button */}
        {showScroll && (
  <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-10 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}