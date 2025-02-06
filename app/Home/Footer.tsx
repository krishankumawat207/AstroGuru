"use client";

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       
          <div className="space-y-6">
<Link href="/">
    <div className="flex items-center">
          <h4 className="text-3xl font-semibold mb-4 text-yellow-500">AstroGuru</h4>
            
    </div>
  </Link>
            <p className="text-lg text-gray-400">
              Discover your cosmic self with AstroGuru’s personalized astrology services. Let the stars guide you on your life’s journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-500 hover:text-white transition duration-200">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-white transition duration-200">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-white transition duration-200">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-white transition duration-200">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="text-lg space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-200">Home</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Consultations</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-3xl font-semibold mb-4 text-yellow-500">Contact Us</h4>
            <ul className="text-lg space-y-3 text-gray-400">
              <li>
                <strong>Email:</strong> <a href="mailto:info@astroguru.com" className="hover:text-white transition duration-200">info@astroguru.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+1234567890" className="hover:text-white transition duration-200">+1 234 567 890</a>
              </li>
              <li>
                <strong>Address:</strong> 123 Cosmic Lane, Star City, Universe
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-500">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} AstroGuru. All rights reserved. | <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a> | <a href="#" className="hover:text-white transition duration-200">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
