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
      <div className="w-full flex relative px-5  sm:pl-10 md:pl-24 justify-center flex-col font-roboto font-light   uppercase mb-5 text-white ">
        <h1 className="text-xl introduction font-[100] opacity-1 leading-9 pt-5 opacity-0 sm:pl-3 pb-2  translate-y-10  z-10 text-white sm:text2xl md:text-3xl lg:text-4xl max-w-4xl font-robotoCondensed uppercase">
          hi, i am{" "}
          <span className="text-slate-200  font-normal">aman shrestha</span>
        </h1>

        <h1 className="z-10 text-white introduction opacity-0 font-[100] sm:pt-3 opacity-1 introduction  translate-y-10 leading-[1] sm:leading-[1.1]  text-[40px] customsm:text-[56px] sm:text-[72px] md:text-[90px]   font-robotoCondensed uppercase">
          an inquisitive and passionate{" "}
          <span className="text-slate-200  font-normal">software engineer</span>{" "}
          based in nepal
        </h1>
      </div>
      <div
        onClick={() => {
          const section = document.getElementById("work");
          section.scrollIntoView({ behavior: "smooth" });
        }}
        className=" w-16 h-16 sm:w-24 sm:h-24 mt-32 text-medium text-3xl sm:hover:text-black duration-700 sm:hover:bg-white animate-bounce flex items-center justify-center  introduction opacity-0 translate-y-10 rounded-full border-white border-2 "
      >
        <FaArrowDown />
      </div>
    </div>
  );
};

export default Home;
