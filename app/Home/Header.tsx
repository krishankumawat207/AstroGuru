"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image"; // Added for image optimization

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white sticky top-0 z-50 shadow-xl">
      <div className="px-6 py-4 max-w-7xl w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.jpeg" // Use next/image for optimization
            alt="Gurushisya Logo"
            className="w-12 h-12 rounded-full"
            width={48} // Defined width
            height={48} // Defined height
          />
          <div className="text-3xl font-extrabold tracking-wide">
            <Link href="/">
              <span className="hover:text-yellow-300 transition-all duration-300">AstroGuru</span>
            </Link>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#hero">
            <p className="text-white hover:text-yellow-300 transition-all duration-300">Home</p>
          </Link>
          <Link href="#Services">
            <p className="text-white hover:text-yellow-300 transition-all duration-300">Services</p>
          </Link>
          <Link href="#About">
            <p className="text-white hover:text-yellow-300 transition-all duration-300">About</p>
          </Link>
          <Link href="#Testimonials">
            <p className="text-white hover:text-yellow-300 transition-all duration-300">Testimonials</p>
          </Link>
          <Link href="#Pricing">
            <p className="text-white hover:text-yellow-300 transition-all duration-300">Pricing</p>
          </Link>
          <Link href="#contact">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300">
              Get in Touch
            </button>
          </Link>
        </nav>

        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white text-black shadow-lg py-4 transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link href="#hero">
                <p className="text-lg text-purple-600 hover:text-yellow-500 transition-all duration-300" onClick={toggleMenu}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="#Services">
                <p className="text-lg text-purple-600 hover:text-yellow-500 transition-all duration-300" onClick={toggleMenu}>
                  Services
                </p>
              </Link>
            </li>
            <li>
              <Link href="#About">
                <p className="text-lg text-purple-600 hover:text-yellow-500 transition-all duration-300" onClick={toggleMenu}>
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="#Testimonials">
                <p className="text-lg text-purple-600 hover:text-yellow-500 transition-all duration-300" onClick={toggleMenu}>
                  Testimonials
                </p>
              </Link>
            </li>
            <li>
              <Link href="#Pricing">
                <p className="text-lg text-purple-600 hover:text-yellow-500 transition-all duration-300" onClick={toggleMenu}>
                  Pricing
                </p>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <button className="bg-purple-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300" onClick={toggleMenu}>
                  Contact Now
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
