"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaHeartBroken, FaBusinessTime, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";


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
            <p>+91 9587543485</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p>Shreechetnajyotishkendra@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p>+91 9587543485</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Pandit Gajanand Shastri Ji</h2>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://www.instagram.com/world_famous_panditji?igsh=cmcxcTlsZHNjdGZ3"
              target="_blank"
              className="text-yellow-400 text-lg hover:underline"
            >
              Instagram Profile
            </a>
            <a
              href="https://youtube.com/@panditgajanandshastriji?si=LzWlsPYdChhksuN7"
              target="_blank"
              className="text-yellow-400 text-lg hover:underline"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLanding;
