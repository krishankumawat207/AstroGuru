'use client';
import { useState, useEffect } from 'react';
import TestimonialSlider from './servicesComponets/TestimonialSlider';
import { motion } from 'framer-motion';
import { FaOm, FaArrowUp } from 'react-icons/fa';
import ProblemsSection from './servicesComponets/problem';
import ServicesCard from './servicesComponets/servicesCard';
import Footer from '../Home/Footer';

const Services = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <div
          className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/ornate-magic-frame-reverse-side-tarot-cards-border-with-mystic-ornament-astrology-pattern-banner_274258-832.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Unlock Your Destiny</h1>
            <p className="text-md md:text-lg max-w-xl mx-auto mb-4">
              Discover insights into your life with our expert astrology services. Let the stars guide you.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 bg-yellow-500 text-black font-semibold text-lg rounded-lg shadow-lg"
            >
              Get Your Reading
            </motion.button>
          </motion.div>
        </div>

        <div className="flex flex-col items-center my-6">
          <div className="w-24 h-1 bg-black"></div>
          <FaOm className="text-5xl text-yellow-600 my-3" />
          <div className="w-24 h-1 bg-black"></div>
        </div>

        {/* Services Section */}
        <div className="text-center my-10 px-6">
          <h2 className="text-3xl font-bold mb-4">What We Have</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Choose from our astrology services to solve troubles and find peace in life.
          </p>
        </div>

        <ServicesCard />
        <ProblemsSection />
        <TestimonialSlider />
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all"
        >
          <FaArrowUp size={24} className="text-white" />
        </button>
      )}
    </>
  );
};

export default Services;
