import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  useGSAP(() => {
    gsap.to(".introduction", {
      delay: 1,
      opacity: 1,
      duration: 2,
      y: 0,
      stagger: 1,
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-20 sm:space-y-8">
      <div className="w-full flex relative pl-5  sm:pl-10 md:pl-24 justify-center flex-col font-roboto font-light    mb-5 text-white ">
        

        <h1 className="z-10 text-white introduction opacity-0 font-[100] sm:pt-3 opacity-1 introduction  max-w-5xl translate-y-10 leading-[0.9] sm:leading-[0.9]  text-[36px] customsm:text-[56px] sm:text-[72px] md:text-[90px] md:leading-[0.9]   font-playfair ">
        Conscientious <span className="font-nepali">&</span> Adept Software Engineer
          
        </h1>
        <h1 className="z-10 text-white introduction opacity-0 font-[100] pt-16 opacity-1 introduction  translate-y-10 leading-[1] sm:leading-[1]  text-lg customsm:text-lg sm:text-xl md:text-2xl max-w-4xl  font-robotoCondensed ">
      <span className="pl-10"></span> Hi, I am <span className="font-normal">Aman Shrestha</span>, an inquisitive software engineer based in Nepal. With a keen eye for detail and a passion for problem-solving, I strive to create elegant, user-friendly solutions that exceed expectations.
          
        </h1>
      </div>
      <div
        onClick={() => {
          const section = document.getElementById("work");
          section.scrollIntoView({ behavior: "smooth" });
        }}
        className=" w-16 h-16 sm:w-24 sm:h-24  mt-32 text-medium text-3xl sm:hover:text-black duration-700 sm:hover:bg-white animate-bounce flex items-center justify-center  introduction opacity-0 translate-y-10 rounded-full border-white border-2 "
      >
        <FaArrowDown />
      </div>
    </div>
  );
};

export default Home;
