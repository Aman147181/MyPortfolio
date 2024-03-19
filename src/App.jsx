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
    <div className="w-full relative px-4 font-roboto font-light bg-themeBlack  text-white min-h-screen">
      <div className="flex w-full h-screen fixed z-10 md:z-10  top-0 items-center text-slate-300 justify-between">
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

        <div
          onClick={() => scrollToSection("home")}
          className="fixed hover:cursor-pointer z-10 sm:hidden top-5 left-1 sm:left-5"
        >
          <img className="w-5 h-5" src="/logo.png" />
        </div>

        {/* Brand name */}
        <div
          onClick={() => scrollToSection("home")}
          className="fixed z-50 sm:block hover:cursor-pointer hidden uppercase text-xl lg:text-3xl font-shoulder sm:top-5 sm:left-5"
        >
          Aman S.
        </div>

        {/* Navigation */}
        <div className="fixed z-[1000]  top-3 bg-themeBlack opacity-90 p-1 rounded-lg right-2 sm:right-5 flex text-sm sm:text-base lg:text-[18px] flex-col font-robotoCondensed">
          <h1
            onClick={() => scrollToSection("home")}
            className={`hover:text-gray-200 hover:cursor-pointer duration-300 ${
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
