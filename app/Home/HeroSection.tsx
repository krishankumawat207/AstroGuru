"use client";
import React from "react";
import Reveal from "react-awesome-reveal";
import { fadeInDownShorter2, fadeInLeft, fadeInUp } from "./keyframes";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center font-['Poppins']">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/astrologyBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-10"></div>

      {/* Hero Content */}
      <div className="flex z-20 justify-center items-center h-full flex-col gap-6 max-w-4xl px-6 text-center">
        <Reveal keyframes={fadeInDownShorter2} duration={1000} delay={200}>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight">
            Discover Your  
            <span className="text-yellow-400"> Cosmic Path</span>
          </h1>
        </Reveal>

        <Reveal keyframes={fadeInLeft} duration={1000} delay={400}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto tracking-wide leading-relaxed">
            Unlock the mysteries of the universe with personalized astrological insights.  
            Get daily predictions, compatibility analysis, and career guidance based on your zodiac.
          </p>
        </Reveal>

        <Reveal keyframes={fadeInUp} duration={1000} delay={600}>
  <a
    href="https://wa.me/91XXXXXXXXXX" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-xl hover:bg-green-600 transition duration-300"
  >
    <FaWhatsapp className="text-2xl" /> Book on WhatsApp
  </a>
</Reveal>

       

        {/* Floating Zodiac Symbols */}
        <div className="absolute bottom-6 left-4 right-4 flex justify-around opacity-80">
          {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map((symbol, index) => (
            <span
              key={index}
              className="text-3xl sm:text-4xl text-yellow-400 animate-[float_3s_infinite]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {symbol}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
