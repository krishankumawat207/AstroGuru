"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3b1e5a] to-[#7b1fa2] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="space-y-6">
            <Link href="/">
              <div className="flex items-center">
                <h4 className="text-3xl font-semibold text-yellow-400">Pandit Gajanand Shastri Ji</h4>
              </div>
            </Link>
            <p className="text-lg text-gray-200">
              India's Best Celebrity Astrologer, Unlocking the Secrets of Your Destiny with expert astrological guidance.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/world_famous_panditji?igsh=cmcxcTlsZHNjdGZ3" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition duration-200">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://youtube.com/@panditgajanandshastriji?si=LzWlsPYdChhksuN7" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition duration-200">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-yellow-400">Quick Links</h4>
            <ul className="text-lg space-y-4 text-gray-200">
              <li><Link href="/" className="hover:text-white transition duration-200">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition duration-200">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition duration-200">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-yellow-400">Contact Us</h4>
            <ul className="text-lg space-y-4 text-gray-200">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400" />
                <a href="mailto:Shreechetnajyotishkendra@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">Shreechetnajyotishkendra@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-yellow-400" />
                <a href="tel:+919587543485" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">+91-9587543485</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-gray-300">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Pandit Gajanand Shastri Ji. All rights reserved. |
            <Link href="/privacy-policy" className="hover:text-white transition duration-200"> Privacy Policy</Link> |
            <Link href="/terms" className="hover:text-white transition duration-200"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
