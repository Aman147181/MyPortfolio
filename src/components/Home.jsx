import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Home = () => {
  useGSAP(() => {
    gsap.to('.introduction', {delay:1, opacity:1, duration: 2, y: 0, stagger:1   });
  }, []);
  return (
    <div className="w-full flex relative px-5  sm:pl-10 md:pl-24 justify-center flex-col font-roboto font-light   uppercase text-white h-screen">
      
      <h1 className="text-lg introduction font-[100] opacity-1 leading-9 pt-5 opacity-0 sm:pl-3  translate-y-10  z-10 text-white sm:text-xl md:text-2xl lg:text-3xl max-w-4xl font-robotoCondensed uppercase">
      hi, i am <span className="text-slate-200  font-light">aman shrestha</span> 
      </h1>
      
      <h1 className="z-10 text-white introduction opacity-0 font-[100] sm:pt-3 opacity-1 introduction  translate-y-10 leading-10 sm:leading-[1] text-[30px] customsm:text-[44px] sm:text-[60px] md:text-[80px]   font-robotoCondensed uppercase">
         an inquisitive and passionate <span className="text-slate-200  font-light">software engineer</span> based in nepal
      </h1>
      
    </div>
  );
};

export default Home;
