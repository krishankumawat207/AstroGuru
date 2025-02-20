"use client";
import { motion } from "framer-motion";
import { FaOm, FaPhoneAlt, FaWhatsapp , FaHeartBroken, FaBusinessTime,FaEnvelope , FaBriefcase, FaUserMd, FaUsers, FaShieldAlt, 
  FaChild, FaBookOpen, FaGem, FaEyeSlash, FaGraduationCap, FaRing, FaFilm, 
  FaPaintBrush, FaBalanceScale, FaHome, FaUserCheck, FaHandshake, FaMoneyBillWave, FaSadCry} from 'react-icons/fa';

// Example problemCategories array (update as per your actual data)
const problemCategories = [
  { title: 'Relationship Problems', icon: <FaHeartBroken />, content: 'Detailed information about relationship problems and astrology solutions.' },
  { title: 'Business Problems', icon: <FaBusinessTime />, content: 'Astrology-based solutions for business growth and overcoming challenges.' },
  { title: 'Career Problems', icon: <FaBriefcase />, content: 'Guidance for career success using astrological insights.' },
  { title: 'Health Problems', icon: <FaUserMd />, content: 'Astrology remedies for better health and wellness.' },
  { title: 'Family Problems', icon: <FaUsers />, content: 'Resolve disputes and strengthen family bonds.' },
  { title: 'Negative Energy Removal', icon: <FaShieldAlt />, content: 'Methods to cleanse negative energies from life.' },
  { title: 'Child Problems', icon: <FaChild />, content: 'Solutions for child-related concerns and parenting guidance.' },
  { title: 'Horoscope Reading', icon: <FaBookOpen />, content: 'Accurate horoscope readings for a better future.' },
  { title: 'Kundli Making & Matching', icon: <FaBalanceScale />, content: 'Kundli services for marriage compatibility and life analysis.' },
  { title: 'Gem Stone Recommendation', icon: <FaGem />, content: 'Find the right gemstone for prosperity and luck.' },
  { title: 'Evil Eye Removal', icon: <FaEyeSlash />, content: 'Protect yourself and your loved ones from evil eye effects.' },
  { title: 'Education & Career Problem', icon: <FaGraduationCap />, content: 'Guidance for students and professionals to achieve success.' },
  { title: 'Marriage Predictions', icon: <FaRing />, content: 'Know the right time and match for your marriage.' },
  { title: 'Bollywood Astrologer', icon: <FaFilm />, content: 'Astrological guidance for those in the entertainment industry.' },
  { title: 'Lucky Number, Lucky Color', icon: <FaPaintBrush />, content: 'Discover your lucky number and color for success.' },
  { title: 'Marital Life Problems', icon: <FaHandshake />, content: 'Solutions for marital issues and maintaining harmony.' },
  { title: 'Love Relationship Problems', icon: <FaSadCry />, content: 'Astrological remedies to strengthen love bonds.' },
  { title: 'Divorce Problems', icon: <FaBalanceScale />, content: 'Guidance to prevent or handle divorce situations.' },
  { title: 'Children Out of Control', icon: <FaChild />, content: 'Solutions for child discipline and behavior issues.' },
  { title: 'Best Online Astrologer', icon: <FaUserCheck />, content: 'Connect with expert astrologers online for solutions.' },
  { title: 'Evil Eye on Your House', icon: <FaHome />, content: 'Identify and remove evil eye effects from your home.' },
  { title: 'Love Problem Solution', icon: <FaHeartBroken />, content: 'Effective astrological remedies for love problems.' },
  { title: 'Love Specialist Astrologer', icon: <FaHeartBroken />, content: 'Expert astrologers to help with love issues.' },
  { title: 'Sudden Business/Job Problems', icon: <FaMoneyBillWave />, content: 'Astrological solutions for unexpected challenges.' },
  { title: 'Verified Astrologer in India', icon: <FaUserCheck />, content: 'Find trusted astrologers for your concerns.' },
  { title: 'Lost Love Solutions', icon: <FaHeartBroken />, content: 'Bring back lost love with astrological guidance.' },
];

const ProblemsSection = () => {
  return (
    <div className="text-center my-10 px-6 bg-black py-12">
      {/* Top Divider Line */}
      <div className="flex flex-col items-center my-6">
        <div className="w-24 h-1 bg-white"></div>
        <FaOm className="text-5xl text-yellow-400 my-3" />
        <div className="w-24 h-1 bg-white"></div>
      </div>
      <h2 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 uppercase drop-shadow-lg">
        Problems We Solve
      </h2>
      <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4 leading-relaxed">
        Choose from our astrology services to solve troubles and find peace in life.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
        {problemCategories.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-xl rounded-lg flex items-center p-5 hover:shadow-2xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-4xl bg-black p-3 rounded-full mr-4">
              {service.icon}
            </div>
  
            {/* Content */}
            <div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm mt-1">{service.content}</p>
            </div>
  
            {/* WhatsApp, Call, and Email Icons (Show Only on Hover) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg"
            >
              <div className="flex justify-center space-x-2 mt-4">
                {/* WhatsApp Icon */}
                <a
                  href="https://wa.me/your-whatsapp-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                >
                  <FaWhatsapp className="text-2xl" /> Chat
                </a>
  
                {/* Call Icon */}
                <a
                  href="tel:+your-phone-number"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                >
                  <FaPhoneAlt className="text-2xl" /> Call Now
                </a>
  
                {/* Email Icon */}
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
                >
                  <FaEnvelope className="text-2xl" /> Email Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsSection;
