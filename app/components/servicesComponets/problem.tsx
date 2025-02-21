"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaOm, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaHeartBroken, FaBusinessTime, FaBriefcase, FaUserMd, FaUsers, FaShieldAlt, FaChild, FaBookOpen, FaGem, FaEyeSlash, FaGraduationCap, FaRing, FaFilm, FaPaintBrush, FaMoneyBillWave, FaSadCry } from "react-icons/fa";

// Example problem categories
const problemCategories = [
  { title: "Relationship Problems", icon: <FaHeartBroken />, content: "Astrology solutions for love and relationship issues." },
  { title: "Business Problems", icon: <FaBusinessTime />, content: "Astrology-based solutions for business growth and challenges." },
  { title: "Career Problems", icon: <FaBriefcase />, content: "Career guidance using astrological insights." },
  { title: "Health Problems", icon: <FaUserMd />, content: "Astrology remedies for better health and wellness." },
  { title: "Family Problems", icon: <FaUsers />, content: "Resolve disputes and strengthen family bonds." },
  { title: "Negative Energy Removal", icon: <FaShieldAlt />, content: "Methods to cleanse negative energies from life." },
  { title: "Child Problems", icon: <FaChild />, content: "Astrological solutions for child-related concerns." },
  { title: "Horoscope Reading", icon: <FaBookOpen />, content: "Accurate horoscope readings for a better future." },
  { title: "Gem Stone Recommendation", icon: <FaGem />, content: "Find the right gemstone for prosperity and luck." },
  { title: "Evil Eye Removal", icon: <FaEyeSlash />, content: "Protect yourself and your loved ones from evil eye effects." },
  { title: "Education & Career Problem", icon: <FaGraduationCap />, content: "Guidance for students and professionals to achieve success." },
  { title: "Marriage Predictions", icon: <FaRing />, content: "Know the right time and match for your marriage." },
  { title: "Lost Love Solutions", icon: <FaSadCry />, content: "Bring back lost love with astrology." },
  { title: "Sudden Business/Job Problems", icon: <FaMoneyBillWave />, content: "Astrological solutions for unexpected job issues." },
];

const ProblemsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="text-center my-10 px-6 py-12 bg-gradient-to-b from-gray-900 to-black">
      {/* Header Section */}
      <div className="flex flex-col items-center my-6">
        <div className="w-24 h-1 bg-white"></div>
        <FaOm className="text-5xl text-yellow-400 my-3" />
        <div className="w-24 h-1 bg-white"></div>
      </div>
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 uppercase drop-shadow-lg">
        Problems We Solve
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
        Choose from our astrology services to solve troubles and find peace in life.
      </p>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
        {problemCategories.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)} // Toggle contact icons on mobile
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-800 text-white shadow-xl rounded-xl flex flex-col items-center p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="text-4xl bg-yellow-500 p-4 rounded-full mb-4">{service.icon}</div>

            {/* Content */}
            <h3 className="text-xl font-bold text-yellow-400">{service.title}</h3>
            <p className="text-sm mt-2 text-gray-300 text-center">{service.content}</p>

            {/* Contact Icons (Appear on Hover for Desktop, Click for Mobile) */}
            <motion.div
              className={`absolute inset-0 flex items-center justify-center bg-black/70 rounded-xl transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-0 md:opacity-0 md:hover:opacity-100"
              }`}
            >
              <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-3 mt-4">
                {/* WhatsApp Icon */}
                <a
                  href="https://wa.me/your-whatsapp-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                >
                  <FaWhatsapp className="text-2xl" /> Chat
                </a>

                {/* Call Icon */}
                <a
                  href="tel:+your-phone-number"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                >
                  <FaPhoneAlt className="text-2xl" /> Call Now
                </a>

                {/* Email Icon */}
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
                >
                  <FaEnvelope className="text-2xl" /> Email Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsSection;
