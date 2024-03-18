import React from "react";

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col px-2 justify-center item-center w-full">
      <div className="w-full  ">
        <h1 className="text-white font-normal text-left font-truculenta sm:pl-24 leading-3 text-[44px] sm:text-7xl md:text-[100px] lg:text-[140px]">
         Feat. Works
        </h1>
      </div>
      <div className="grid grid-cols-1  py-16  sm:grid-cols-2 lg:grid-cols-2 gap-10 pt-20 customsm:px-10 z-20 lg:px-24">
        <div className="col-span-1 rounded-xl relative h-96 overflow-hidden ">
          <img
            className="image"
            src="/urban.png"
            alt="Urban Dwellings"
          />
        </div>

        <div className="col-span-1 rounded-xl relative h-96 overflow-hidden ">
          <img
            className="image"
            src="/safari.png"
            alt="Safari Nepal "
          />
        </div>
        <div className="col-span-1 rounded-xl relative h-96 overflow-hidden ">
          <img
            className="image"
            src="/rupse.png"
            alt="Rupse Holidays"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
