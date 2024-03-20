import React from "react";

const Work = () => {
  return (
    <div className="customsm:min-h-screen flex flex-col px-2 py-10 sm:py-0 justify-center item-center w-full">
      <div className="w-full  ">
        <h1 className="text-white font-normal text-left font-truculenta sm:pl-24 leading-3 text-[44px] sm:text-7xl md:text-[100px] lg:text-[140px]">
          Feat. Works
        </h1>
        <h1 className="font-truculenta pt-4 customsm:pt-2 text-xl md:text-2xl lg:text-4xl sm:pl-24   ">
          Here are some of my projects
        </h1>
      </div>
      <div className="flex  items-center  overflow-y-auto scrollbar-hide   py-10  gap-8 pt-5  z-20 lg:px-24">
        <div className="flex flex-col space-y-1">
          <div className="w-full sm:hover:h-[520px] sm:hover:w-[105%] duration-700 max-w-4xl min-w-[314px] customsm:min-w-[360px] rounded-3xl  customsm:rounded-[44px] h-[480px]  sm:h-[480px] relative overflow-y-hidden ">
            <a href="https://urban-dwellings.vercel.app/">
              <img className=" " src="/urban.png" alt="Urban Dwellings" />
            </a>
          </div>
          <div className="flex justify-between  px-5 sm:hidden leading-5 text-xl pt-3 font-truculenta">
            <h1>Urban Dwellings</h1>
            <h1>React+Tailwind</h1>
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <div className="w-full sm:hover:h-[520px] sm:hover:w-[105%] duration-700 max-w-4xl min-w-[314px] customsm:min-w-[360px] rounded-3xl  customsm:rounded-[44px] h-[480px]  sm:h-[480px] relative overflow-y-hidden ">
            <a href="https://github.com/Aman147181/minor-project">
              <img className="" src="/safari.png" alt="Safari Nepal " />
            </a>
          </div>
          <div className="flex justify-between  px-5 sm:hidden leading-5  text-xl pt-3 font-truculenta">
            <h1>Safari Nepal </h1>
            <h1>Django+Bootstrap</h1>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="w-full sm:hover:h-[520px] sm:hover:w-[105%] duration-700 max-w-4xl min-w-[314px] customsm:min-w-[360px] rounded-3xl  customsm:rounded-[44px] h-[480px]  sm:h-[480px] relative overflow-y-hidden ">
            <a href="https://ayushachary.com.np/">
              <img className="" src="/rupse.png" alt="Rupse Holidays" />
            </a>
          </div>
          <div className="flex justify-between  px-5 sm:hidden leading-5  text-xl pt-3 font-truculenta">
            <h1>Rupse Holidays</h1>
            <h1>React+Tailwind</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
