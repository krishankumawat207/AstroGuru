"use client";
import Image from "next/image";
import amitabh_bachan from "../../public/amitabh-bachchan.jpeg"
import Rani_Mukherjee from "../../public/Rani-Mukherjee.jpeg"
import virat_kohli from "../../public/virat-kohli.webp"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amitabh Bachchan",
      title: "Legendary Bollywood Actor",
      review:
        "AstroGuru’s insights have guided me throughout my journey, helping me navigate the challenges of life with wisdom and strength. Truly remarkable.",
      image:amitabh_bachan,
    },
    {
      name: "Rani Mukherjee",
      title: "Famous Bollywood Actress",
      review:
        "The guidance I received from AstroGuru was not only accurate but deeply insightful. It helped me make the right decisions in both my personal and professional life.",
      image:Rani_Mukherjee ,
    },
    {
      name: "Virat Kohli",
      title: "Indian Cricket Captain",
      review:
        "AstroGuru’s advice has been a key factor in my performance. Their precise readings and cosmic insights give me confidence before every match.",
      image: virat_kohli,
    },
  ];

  return (
    <section className="bg-black text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-8">
          What Celebrities Are Saying About AstroGuru
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12">
          Top leaders, celebrities, and influencers trust AstroGuru for astrological guidance that empowers their decisions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{testimonial.name}</h3>
              <p className="text-gray-300 mb-4">{testimonial.title}</p>
              <p className="text-gray-200 italic">{`"${testimonial.review}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
