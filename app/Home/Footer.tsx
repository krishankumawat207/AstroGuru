"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3b1e5a] to-[#7b1fa2] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-6">
            <Link href="/">
              <div className="flex items-center">
                <h4 className="text-3xl font-semibold text-yellow-400">AstroGuru</h4>
              </div>
            </Link>
            <p className="text-lg text-gray-200">
              Explore the wisdom of the cosmos with AstroGuru. Get expert astrological guidance to navigate your life's journey with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-white transition duration-200">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-yellow-400 hover:text-white transition duration-200">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-yellow-400 hover:text-white transition duration-200">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-yellow-400 hover:text-white transition duration-200">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="text-lg space-y-3 text-gray-200">
              <li><Link href="/" className="hover:text-white transition duration-200">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition duration-200">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition duration-200">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services (All Redirect to Contact) */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-yellow-400">Our Services</h4>
            <ul className="text-lg space-y-3 text-gray-200">
              <li><Link href="/contact" className="hover:text-white transition duration-200">Daily Horoscope</Link></li>
              <li><Link href="/contact" className="hover:text-white transition duration-200">Kundli Matching</Link></li>
              <li><Link href="/contact" className="hover:text-white transition duration-200">Career Astrology</Link></li>
              <li><Link href="/contact" className="hover:text-white transition duration-200">Love Compatibility</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <ul className="text-lg space-y-3 text-gray-200">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-yellow-400" />
                <a href="mailto:info@astroguru.com" className="hover:text-white transition duration-200">info@astroguru.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-yellow-400" />
                <a href="tel:+1234567890" className="hover:text-white transition duration-200">+1 234 567 890</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>123 Cosmic Lane, Star City, Universe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-gray-300">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} AstroGuru. All rights reserved. | 
            <Link href="/privacy-policy" className="hover:text-white transition duration-200"> Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white transition duration-200"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
