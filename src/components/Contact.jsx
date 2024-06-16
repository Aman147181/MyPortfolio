import React from "react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="min-h-screen relative z-10 flex w-full flex-col  items-center px-2 sm:px-20 space-y-10 py-10 justify-center">
      <div className="flex space-y-7 flex-col">
        <h1 className=" text-left text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
          Lets Make Your
          <br /> Project Come To Life!
        </h1>
        
        <a
          className="text-left font-truculenta text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
          href="mailto:amanshrestha147181@gmail.com"
        >
          <button className="px-4 py-1 sm:px-7 sm:py-3 text-white bg-black border duration-500  hover:text-black hover:bg-white border-white">
            Contact Me
          </button>
          </a>
         
        
      </div>
      <div className=" flex absolute bottom-10  right-3  space-y-3 text-lg sm:text-2xl customsm:hidden flex-col">
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
    </div>
  );
};

export default Contact;
