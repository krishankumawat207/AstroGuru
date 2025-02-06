"use client";
import React from "react";
import Reveal from "react-awesome-reveal";
import { fadeInDownShorter2, fadeInLeft,  fadeInUp } from "./keyframes";
const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/astrologyBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 z-10"></div>

      <div className="flex z-20 justify-center items-center h-full flex-col gap-8 max-w-4xl px-4 text-center">
        <Reveal keyframes={fadeInDownShorter2} duration={1000} delay={200}>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-red-400 drop-shadow-lg">
            Discover Your
            <span className="text-purple-400"> Cosmic Path</span>
          </h1>
        </Reveal>

        <Reveal keyframes={fadeInLeft} duration={1000} delay={400}>
          <p className="text-xl sm:text-2xl text-black max-w-2xl mx-auto tracking-wide">
            Unlock the mysteries of the universe with personalized astrological insights tailored just for you.
          </p>
        </Reveal>

        <Reveal keyframes={fadeInUp} duration={1000} delay={600}>
          <a
            href="/consultation"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-xl hover:from-purple-600 hover:to-indigo-700 transition duration-300"
          >
            Book Your Consultation
          </a>
        </Reveal>

        <div className="absolute bottom-4 left-4 right-4 flex justify-around opacity-80">
          {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map((symbol, index) => (
            <span
              key={index}
              className="text-3xl sm:text-4xl text-yellow-400 animate-bounce"
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
