"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What types of astrology consultations does Panditji provide?",
    answer:
      "Panditji offers Vedic astrology, Kundali matching, Muhurat selection, and personalized horoscope readings.",
  },
  {
    question: "How can I schedule a puja or ritual with Panditji?",
    answer:
      "You can schedule a puja or ritual by filling out the booking form on our website or contacting us directly via phone.",
  },
  {
    question: "Are online astrology consultations available?",
    answer:
      "Yes, Panditji provides online consultations via video calls for clients who can't visit in person.",
  },
  {
    question: "What details are needed for an accurate Kundali reading?",
    answer:
      "Please provide your full name, date of birth, exact time of birth, and place of birth for an accurate Kundali analysis.",
  },
  {
    question: "Can Panditji assist with Vastu Shastra consultations?",
    answer:
      "Yes, Panditji offers Vastu Shastra consultations to help harmonize your living or working space.",
  }
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">FAQs</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-xl p-5 bg-gray-800 shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-medium text-lg text-blue-300 focus:outline-none"
            >
              {faq.question}
              {activeIndex === index ? (
                <FaChevronUp className="text-blue-400" />
              ) : (
                <FaChevronDown className="text-blue-400" />
              )}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-gray-300 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
