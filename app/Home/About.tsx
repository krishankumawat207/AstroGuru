"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-indigo-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400">About AstroGuru</h1>
          <p className="text-lg text-indigo-200 mt-4">
            Unlock the secrets of the universe with astrology&apos;s ancient wisdom and modern insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
          
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-6">Meet Our Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Guru Raj",
                role: "Chief Astrologer",
                image: "/profile1.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Numerology Expert",
                image: "/profile2.webp",
              },
              {
                name: "Arjun Patel",
                role: "Tarot Card Reader",
                image: "/profile3.webp",
              },
            ].map((expert, index) => (
              <div
                key={index}
                className="bg-indigo-700 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 text-center"
              >
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={128}
                  height={128}
                  className="object-cover rounded-full mx-auto mb-4 border-4 border-yellow-400"
                />
                <h3 className="text-xl font-semibold text-yellow-400">{expert.name}</h3>
                <p className="text-indigo-100">{expert.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission Section*/}
        <div className="mt-16 bg-indigo-900 p-10 rounded-xl">
          <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-6">Our Mission</h2>
          <ul className="space-y-4 text-indigo-200 text-lg">
            <li className="flex items-center">
              <FaBullseye className="text-yellow-400 text-2xl mr-3" />
              Guide individuals on their spiritual journey through astrology.
            </li>
            <li className="flex items-center">
              <FaLightbulb className="text-yellow-400 text-2xl mr-3" />
              Provide deep insights into life&apos;s mysteries with expert readings.
            </li>
            <li className="flex items-center">
              <FaUsers className="text-yellow-400 text-2xl mr-3" />
              Empower individuals with knowledge about their future and growth.
            </li>
            <li className="flex items-center">
              <FaStar className="text-yellow-400 text-2xl mr-3" />
              Combine ancient wisdom with modern techniques for accurate predictions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
