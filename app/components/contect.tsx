'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ContactUs = () => {
  const [selected, setSelected] = useState<'whatsapp' | 'call' | 'mail' | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const router = useRouter();

  // Contact information
  const contactDetails = {
    whatsapp: { label: 'WhatsApp', value: '+91 9876543210', icon: <FaWhatsapp size={20} />, link: 'https://wa.me/919876543210' },
    call: { label: 'Call', value: '+91 9876543210', icon: <FaPhoneAlt size={20} />, link: 'tel:+919876543210' },
    mail: { label: 'Mail', value: 'astrologer@example.com', icon: <FaEnvelope size={20} />, link: 'mailto:astrologer@example.com' },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        className="relative z-10 w-full max-w-6xl text-center py-16 px-6 bg-black bg-opacity-75 rounded-lg shadow-lg"
      >
        <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-300">Seek guidance with our expertise in astrology.</p>
      </motion.div>

      {/* Home Button */}
      <button 
        onClick={() => router.push('/')}
        className="absolute top-5 left-5 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        <FaHome size={24} />
      </button>

      {/* Contact Options */}
      <div className="w-full max-w-6xl mt-10 p-10 bg-white text-gray-900 shadow-2xl rounded-xl relative z-10">
        <h2 className="text-4xl font-semibold text-center text-indigo-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-6">Choose how you would like to connect with us.</p>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {Object.entries(contactDetails).map(([key, { label, icon, link }]) => (
            <button 
              key={key} 
              className="flex-1 flex items-center justify-center px-6 py-4 border rounded-lg text-white text-lg transition transform hover:scale-105 shadow-md"
              style={{ backgroundColor: key === 'whatsapp' ? '#25D366' : key === 'call' ? '#007BFF' : '#D44638' }}
              onClick={() => setSelected(key as 'whatsapp' | 'call' | 'mail')}
            >
              {icon} <span className="ml-2">{label}</span>
            </button>
          ))}
        </div>

        {selected && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center p-6 border border-gray-200 rounded-lg bg-gray-50 shadow-lg"
          >
            <div className="text-xl font-medium flex items-center justify-center gap-2">
              {contactDetails[selected].icon} {contactDetails[selected].label}
            </div>
            <p className="text-gray-600 mt-2">{contactDetails[selected].value}</p>
            <a
              href={contactDetails[selected].link}
              className="block mt-4 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition"
            >
              {selected === 'whatsapp' ? 'Chat on WhatsApp' : selected === 'call' ? 'Call Now' : 'Send Email'}
            </a>
          </motion.div>
        )}
      </div>

      {/* Address Section */}
      <div className="w-full max-w-6xl mt-10 p-10 bg-gray-800 text-white shadow-2xl rounded-xl relative z-10 text-center">
        <h3 className="text-3xl font-semibold mb-4">Visit Us</h3>
        <p className="text-gray-400">Astrologer Karan Sharma</p>
        <p className="text-gray-400">123 Astrology Lane, Jaipur, Rajasthan, India</p>
        <p className="text-gray-400 flex items-center justify-center gap-2">
          <FaMapMarkerAlt /> Find us on the map below:
        </p>
        <div className="mt-4 w-full h-72 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.24644085972!2d75.7924146!3d26.9124332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c1d17377a84b3%3A0xffd69e4b5fd65841!2sAstrologer%20Karan%20Sharma!5e0!3m2!1sen!2sin!4v1685026745171!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
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
  );
};

export default ContactUs;
