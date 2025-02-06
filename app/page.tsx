"use client";
import Header from "./components/Home/Header";
import HeroSection from "./components/Home/HeroSection";
import Services from "./components/Home/Services";
import About from "./components/Home/About";
import Testimonials from "./components/Home/Testimonials";
import Pricing from "./components/Home/Pricing";
import Contact from "./components/Home/contact";
import Footer from "./components/Home/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header /> {/* Include the Header component here */}
      <div id="hero" className="bg-lightPrimary ">
        <HeroSection />
      </div>
      <div id="Services" className="bg-lightPrimary">
        <Services />
      </div>{" "}
   
      <div id="About" className="bg-lightPrimary">
        <About />
      </div>
      <div id="Testimonials" className="bg-lightPrimary">
        <Testimonials />
      </div> 
      <div id="contact" className="bg-lightPrimary">
        <Contact />
      </div>
      <div id="Pricing" className="bg-lightPrimary">
        <Pricing />
      </div>
     
      
    <Footer/>

    </>
  );
};

export default Home;
