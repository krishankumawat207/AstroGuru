"use client";

const Pricing = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-center text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
          Choose Your Cosmic Path
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Whether you’re new to astrology or seeking deeper insights, our expert astrologers are here to guide you through every aspect of the cosmic universe. Choose the package that resonates with your soul.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       
          <div className="bg-transparent p-6 rounded-3xl shadow-xl max-w-xs mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Astrology Consultation</h3>
            <p className="text-xl text-gray-300 mb-6">
              A one-on-one consultation with our expert astrologer to discuss your birth chart, predictions, and more.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹2000</span>
              <span className="text-xl text-gray-400">/Session</span>
            </div>
            <ul className="text-left text-gray-300 mb-6">
              <li>• Personalized birth chart analysis</li>
              <li>• Career & love life predictions</li>
              <li>• Answers to specific life questions</li>
            </ul>
            <button className="py-2 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 transition duration-300">
              Book Now
            </button>
          </div>

          <div className="bg-transparent p-6 rounded-3xl shadow-xl max-w-xs mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Horoscope Insights</h3>
            <p className="text-xl text-gray-300 mb-6">
              Receive personalized horoscope reports delivered to your inbox, with daily, weekly, or monthly updates.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹1500</span>
              <span className="text-xl text-gray-400">/Month</span>
            </div>
            <ul className="text-left text-gray-300 mb-6">
              <li>• Daily horoscope predictions</li>
              <li>• Weekly & monthly reports</li>
              <li>• Custom analysis based on your zodiac sign</li>
            </ul>
            <button className="py-2 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 transition duration-300">
              Subscribe Now
            </button>
          </div>

          <div className="bg-transparent p-6 rounded-3xl shadow-xl max-w-xs mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Birth Chart & Life Path Analysis</h3>
            <p className="text-xl text-gray-300 mb-6">
              A deep, personalized analysis of your birth chart, along with your life path and cosmic purpose.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹5000</span>
              <span className="text-xl text-gray-400">/Complete Report</span>
            </div>
            <ul className="text-left text-gray-300 mb-6">
              <li>• In-depth birth chart interpretation</li>
              <li>• Life path and soul mission insights</li>
              <li>• Detailed compatibility readings</li>
            </ul>
            <button className="py-2 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 transition duration-300">
              Order Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
