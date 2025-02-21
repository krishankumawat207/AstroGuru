"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaHeartBroken, FaBusinessTime, FaBriefcase, FaMoneyBillWave, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion";

const problemCategories = [
  { title: "Relationship Problems", icon: <FaHeartBroken />, content: "Astrology solutions for love and relationship issues." },
  { title: "Business Problems", icon: <FaBusinessTime />, content: "Astrology-based solutions for business growth and challenges." },
  { title: "Career Problems", icon: <FaBriefcase />, content: "Career guidance using astrological insights." },
];

const ContactLanding = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 py-20 text-center text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/background-image.jpg')" }}
      ></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
          Facing Life's Challenges?
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Our expert astrologers are here to guide you through any problem. Don't hesitate to reach out—your answers are just a click away.
        </p>
        <button
          onClick={handleContactClick}
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xl rounded-xl hover:from-yellow-500 hover:to-yellow-700 transition duration-300 shadow-lg"
        >
          Contact Now
        </button>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-300">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p>+91 9876543210</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p>contact@astroguru.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Problems We Solve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {problemCategories.map((problem, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl bg-yellow-500 p-4 rounded-full mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{problem.title}</h3>
                <p className="text-sm text-gray-300">{problem.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLanding;
