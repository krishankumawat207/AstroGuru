"use client";
import { motion } from "framer-motion";
import {FaOm, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// Define your phone number here
const phoneNumber = "1234567890";

const services = [
  { 
    title: "Love Marriage", 
    description: "Want to marry the person you love? Astrology provides the best solution to make it happen.", 
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
  },
  { 
    title: "Ex Love Back", 
    description: "Astrology helps bring back lost love and remove differences between couples.", 
    image: "https://images.pexels.com/photos/984949/pexels-photo-984949.jpeg"
  },
  { 
    title: "Family Issues", 
    description: "Solve family disputes and restore love and harmony among family members.", 
    image: "https://images.pexels.com/photos/426178/pexels-photo-426178.jpeg"
  },
  { 
    title: "Negative Energy Remover", 
    description: "Remove all bad energies and bring positivity into your life with astrology.", 
    image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg"
  },
  { 
    title: "Lucky Number & Color", 
    description: "Discover your lucky number and color to enhance success in life.", 
    image: "https://images.pexels.com/photos/461418/pexels-photo-461418.jpeg"
  },
  { 
    title: "Marriage Predictions", 
    description: "Find out the right time for your marriage with expert astrological guidance.", 
    image: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg"
  },
  { 
    title: "Child Problems", 
    description: "Astrology solutions for child-related concerns and parenthood blessings.", 
    image: "https://images.pexels.com/photos/1153211/pexels-photo-1153211.jpeg"
  },
  { 
    title: "Job & Business", 
    description: "Boost your business and career success with astrology’s powerful rituals.", 
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
  },
  { 
    title: "Love Back", 
    description: "Reignite lost love and strengthen your relationship with astrology.", 
    image: "https://images.pexels.com/photos/3367873/pexels-photo-3367873.jpeg"
  },
  { 
    title: "Relation Solutions", 
    description: "Resolve relationship issues and bring love, care, and affection back.", 
    image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg"
  },
  { 
    title: "Health Problems", 
    description: "Astrology can help improve health and overcome long-term ailments.", 
    image: "https://images.pexels.com/photos/4032002/pexels-photo-4032002.jpeg"
  },
  { 
    title: "Financial Problems", 
    description: "Find astrological solutions to remove financial blockages and attract wealth.", 
    image: "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg"
  },
  { 
    title: "Education & Career", 
    description: "Get astrology-based career guidance for success in studies and jobs.", 
    image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg"
  },
  { 
    title: "Property Disputes", 
    description: "Resolve property disputes and legal issues through astrological remedies.", 
    image: "https://images.pexels.com/photos/3943720/pexels-photo-3943720.jpeg"
  },
  { 
    title: "Success & Fame", 
    description: "Achieve name, fame, and recognition with astrology’s proven guidance.", 
    image: "https://images.pexels.com/photos/3772615/pexels-photo-3772615.jpeg"
  }
];
const ServicesCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-b from-yellow-100 to-white shadow-xl rounded-2xl text-center border border-yellow-300 overflow-hidden transition-all duration-300"
        >
          {/* Service Image */}
          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover border-b-2 border-yellow-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-all duration-300"></div>
          </div>
    
          {/* Service Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-yellow-700">{service.title}</h3>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              {service.description}
            </p>
    
            {/* Contact Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              {/* Call Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
              >
                <FaPhoneAlt className="text-lg" /> Call Now
              </a>
              {/* WhatsApp Chat Button */}
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" /> Chat
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesCard;
