import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen z-10 flex items-center justify-center">
      <div className="box border-white border-2 py-24 overflow-hidden rounded-[56px] flex flex-col space-y-1 items-center px-10 sm:px-32 justify-center relative">
        <h1 className="font-roboto text-white opacity-1 z-50 sm:pl-3 text-base customsm:text-xl sm:text-[24px] leading-[5px] pb-2 uppercase">
          got a project in mind?{" "}
        </h1>
        <h1 className="font-roboto font-light text-white z-50 text-5xl opacity-1 text-center customsm:text-7xl sm:text-[90px] md:text-[120px] pb-12 uppercase">
          let's connect{" "}
        </h1>
        <a className="z-50" href="mailto:amanshrestha147181@gmail.com">
          <button className="px-6 py-3 bg-black  text-white ml-2 opacity-1 rounded-md text-sm customsm:text-base md:text-xl hover:text-black hover:font-medium duration-500 hover:bg-white uppercase font-robotoCondensed">
            message me
          </button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Contact;
