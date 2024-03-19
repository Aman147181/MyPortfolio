import React from "react";

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col px-2 justify-center item-center w-full">
      <div className="w-full  ">
        <h1 className="text-white font-normal text-left font-truculenta sm:pl-24 leading-3 text-[44px] sm:text-7xl md:text-[100px] lg:text-[140px]">
          Feat. Works
        </h1>
        <h1 className="font-truculenta pt-2 text-base sm:text-xl md:text-2xl lg:text-4xl sm:pl-24   ">Here are some of my projects</h1>
      </div>
      <div className="flex  items-center  overflow-y-auto scrollbar-hide   py-10  gap-8 pt-10 customsm:px-10 z-20 lg:px-24">
        <div className="w-full customsm:hover:h-[560px] customsm:hover:w-[110%] duration-700 max-w-4xl min-w-[314px] customsm:min-w-[360px]  rounded-[44px] h-[460px]  customsm:h-[520px] relative overflow-y-hidden ">
          <a href="https://urban-dwellings.vercel.app/">
            <img className=" " src="/urban.png" alt="Urban Dwellings" />
          </a>
        </div>

        <div className="w-full max-w-4xl customsm:hover:h-[560px] customsm:hover:w-[110%]  duration-700 min-w-[314px] customsm:min-w-[360px] rounded-[44px]  h-[460px]  customsm:h-[520px] relative  overflow-hidden ">
          <a href="https://github.com/Aman147181/minor-project">
            <img className="" src="/safari.png" alt="Safari Nepal " />
          </a>
        </div>
        <div className="w-full max-w-4xl customsm:hover:h-[560px] customsm:hover:w-[110%] duration-700 min-w-[314px] customsm:min-w-[360px] rounded-[44px] h-[460px]  customsm:h-[520px] relative  overflow-hidden ">
          <a href="https://ayushachary.com.np/">
            <img className="" src="/rupse.png" alt="Rupse Holidays" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
