import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen z-10 flex items-center px-2 py-10 justify-center">
      <div className="box sm:before:w-[120%]  sm:before:h-[20%] before:h-[120%] before:w-[20%]  border-white border-2 sm:py-16 py-32 overflow-hidden rounded-[36px] sm:rounded-[56px] flex flex-col space-y-2 items-center px-10 sm:px-32 justify-center relative">
        <h1 className="font-roboto text-white opacity-1 z-50 sm:pl-3 text-base customsm:text-xl sm:text-[24px] leading-[5px] pb-5 uppercase">
          got a project in mind?{" "}
        </h1>
        <h1 className="font-roboto font-medium text-white z-50 text-5xl opacity-1 text-center customsm:text-7xl sm:text-[90px] md:text-[120px] pb-12 uppercase">
          let's connect{" "}
        </h1>
        <a className="z-50" href="mailto:amanshrestha147181@gmail.com">
          <button className="px-6 py-3 bg-black  text-white ml-2 opacity-1 rounded-md text-sm customsm:text-base md:text-xl hover:text-black hover:font-medium duration-700 hover:bg-white uppercase font-robotoCondensed">
            message me
          </button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Contact;
