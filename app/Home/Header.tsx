"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaGoogle, FaAward, FaCertificate, FaStar, FaMedal, FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full text-sm font-serif">
      {/* Top Header: Contact & Social */}
      <div className="bg-gradient-to-r from-[#3b1e5a] to-[#7b1fa2] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left: Phone & Email */}
          <div className="flex flex-wrap items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="h-4 w-4" />
              <a href="tel:+91-9915014230" className="hover:underline">+91-9915014230</a>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope className="h-4 w-4" />
              <a href="mailto:panditkaransharma@gmail.com" className="hover:underline">panditkaransharma@gmail.com</a>
            </div>
          </div>

          {/* Right: Tagline & Social Icons */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <span className="font-semibold text-xs md:text-sm uppercase tracking-wider">India&apos;s Best Celebrity Astrologer</span>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:scale-110 transition"><FaFacebookF className="h-4 w-4" /></a>
              <a href="#" className="hover:scale-110 transition"><FaInstagram className="h-4 w-4" /></a>
              <a href="#" className="hover:scale-110 transition"><FaGoogle className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#3b1e5a] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">AstroGuru</h1>
            <p className="text-sm md:text-lg font-light italic">Unlocking the Secrets of Your Destiny</p>
          </div>
          <div className="flex space-x-6">
            {[
              { icon: <FaAward className="text-yellow-400 text-3xl" />, name: "AIFAS" },
              { icon: <FaCertificate className="text-yellow-400 text-3xl" />, name: "ISO 9001:2015" },
              { icon: <FaMedal className="text-yellow-400 text-3xl" />, name: "AHD" },
              { icon: <FaStar className="text-yellow-400 text-3xl" />, name: "3 Best Rated" },
              { icon: <FaGlobe className="text-yellow-400 text-3xl" />, name: "IAF" },
            ].map((award, index) => (
              <div key={index} className="flex flex-col items-center">
                {award.icon}
                <p className="text-xs mt-1">{award.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-[#7b1fa2] to-[#3b1e5a] shadow-md py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <nav className="flex items-center space-x-6 text-white font-medium">
            <Link href="/" className="hover:text-yellow-400 transition-all">Home</Link>
            <Link href="/about" className="hover:text-yellow-400 transition-all">About</Link>
            <Link href="/services" className="hover:text-yellow-400 transition-all">Services</Link>
            <Link href="/#contact">
              <button className="bg-yellow-400 text-[#3b1e5a] px-4 py-1 rounded hover:bg-yellow-500 transition-all">Contact Now</button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
