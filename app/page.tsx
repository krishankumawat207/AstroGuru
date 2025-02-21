"use client";

import { useEffect, useState } from "react";
import { GiLotus } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./Home/Header";
import HeroSection from "./Home/HeroSection";
import Services from "./Home/Services";
import AboutUs from "./Home/About";
import Testimonials from "./Home/Testimonials";
import Footer from "./Home/Footer";
import ContactLanding from "./Home/contact";
import FAQs from "./Home/Faqs";

const DividerWithOm = () => (
  <div className="relative flex items-center my-6">
    <hr className="flex-grow border-t border-gray-400" />
    <motion.div
      className="mx-4 bg-gradient-to-r from-orange-400 to-pink-500 p-3 rounded-full shadow-xl"
      initial={{ scale: 0.8, rotate: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <GiLotus className="w-10 h-10 text-white" />
    </motion.div>
    <hr className="flex-grow border-t border-gray-400" />
  </div>
);

const Home: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>
      <DividerWithOm />

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      <DividerWithOm />

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>
      <DividerWithOm />

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>
      <DividerWithOm />

      {/* Contact Section */}
      <section id="contact">
        <ContactLanding />
      </section>
      <DividerWithOm />

      {/* FAQs Section */}
      <section id="faqs" >
        <FAQs />
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-10 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default Home;
