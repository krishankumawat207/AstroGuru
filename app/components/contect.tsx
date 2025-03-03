'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaHome, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Footer from '../Home/Footer';

const ContactUs = () => {
  const [selected, setSelected] = useState<'whatsapp' | 'call' | 'mail' | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const router = useRouter();

  // Contact information
  const contactDetails = {
    whatsapp: { label: 'WhatsApp', value: '+91 9587543485', icon: <FaWhatsapp size={20} />, link: 'https://wa.me/919587543485' },
    call: { label: 'Call', value: '+91 9587543485', icon: <FaPhoneAlt size={20} />, link: 'tel:+919587543485' },
    mail: { label: 'Mail', value: 'Shreechetnajyotishkendra@gmail.com', icon: <FaEnvelope size={20} />, link: 'mailto:Shreechetnajyotishkendra@gmail.com' },
    instagram: { label: 'Instagram', value: '@world_famous_panditji', icon: <FaInstagram size={20} />, link: 'https://www.instagram.com/world_famous_panditji' },
    youtube: { label: 'YouTube', value: '@panditgajanandshastriji', icon: <FaYoutube size={20} />, link: 'https://youtube.com/@panditgajanandshastriji' },
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center w-full h-full" 
          style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20240526/pngtree-astrology-zodiac-sign-of-horoscope-in-deep-blue-the-star-and-image_15731970.jpg)' }}>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-5xl text-center py-16 px-6 bg-black bg-opacity-75 rounded-lg shadow-lg"
        >
          <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300">Connect with Gajanand Shastri Ji for expert astrology guidance.</p>
        </motion.div>

        {/* Home Button */}
        <button 
          onClick={() => router.push('/')} 
          className="absolute top-5 left-5 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          <FaHome size={24} />
        </button>

        {/* Contact Options */}
        <div className="w-full max-w-5xl mt-10 p-8 bg-white text-gray-900 shadow-2xl rounded-xl relative z-10">
          <h2 className="text-4xl font-semibold text-center text-indigo-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-6">Choose your preferred way to reach out.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(contactDetails).map(([key, { label, icon, link }]) => (
              <a 
                key={key} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center px-6 py-4 border rounded-lg text-white text-lg transition transform hover:scale-105 shadow-md"
                style={{ backgroundColor: key === 'whatsapp' ? '#25D366' : key === 'call' ? '#007BFF' : key === 'mail' ? '#D44638' : key === 'instagram' ? '#E4405F' : '#FF0000' }}
              >
                {icon} <span className="ml-2">{label}</span>
              </a>
            ))}
          </div>
        </div>

        

        {/* Scroll to Top Button */}
        {showScroll && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="fixed bottom-5 right-5 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
          >
            <FaArrowUp size={24} />
          </button>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
