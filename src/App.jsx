import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all section elements
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    
    section.scrollIntoView({ behavior: "smooth" });
      
    
  };

  return (
    <div className="w-full relative px-4  font-roboto font-light bg-themeBlack  text-white min-h-screen">
      <div className="fixed bottom-10 left-1 sm:left-5 space-y-5 text-base sm:text-2xl flex flex-col">
        <a href="https://www.linkedin.com/in/aman-shrestha-445b5b214/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/aman.shrestha.7524/">
          <FaFacebookF />
        </a>
        <a href="mailto:amanshrestha147181@gmail.com">
          <MdEmail />
        </a>
      </div>

      {/* Brand name */}
      <div className="w-full pr-5 flex justify-between backdrop-blur-[8px] 2xl:backdrop-blur-none fixed top-0 bg-themeBlack/80 2xl:bg-themeBlack/0  z-50">
        <div
          onClick={() => scrollToSection("home")}
          className="  hover:cursor-pointer  uppercase text-xl lg:text-3xl font-shoulder pt-3"
        >
          Aman S.
        </div>

        {/* Navigation */}
        <div className="   p-3 rounded-lg flex leading-5 sm:leading-6   text-base sm:text-lg flex-col font-robotoCondensed">
          <h1
            onClick={() => scrollToSection("home")}
            className={`hover:text-gray-200  hover:cursor-pointer duration-300 ${
              activeSection === "home" ? "text-white" : "text-gray-500"
            }`}
          >
            home
          </h1>
          <h1
            onClick={() => scrollToSection("work")}
            className={`hover:text-gray-200 hover:cursor-pointer duration-300 ${
              activeSection === "work" ? "text-white" : "text-gray-500"
            }`}
          >
            work
          </h1>
          <h1
            onClick={() => scrollToSection("contact")}
            className={`hover:text-gray-200 hover:cursor-pointer duration-300 ${
              activeSection === "contact" ? "text-white" : "text-gray-500"
            }`}
          >
            contact
          </h1>
        </div>
      </div>

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
