import React from "react";
import WorkComponent from "./WorkComponent";

const Work = () => {
  const works = [
    {
      worklink: "https://urban-dwellings.vercel.app/",
      desc: {
        one: "Urban Dwellings",
        two: "React+Tailwind",
      },
      imgurl: "/urban.png",
    },
    {
      worklink: "https://github.com/Aman147181/minor-project",
      desc: {
        one: "Safari Nepal",
        two: "Django + Bootstrap",
      },
      imgurl: "/safari.png",
    },
    {
      worklink: "https://ayushachary.com.np/",
      desc: {
        one: "Rupse Holidays",
        two: "React+Tailwind",
      },
      imgurl: "/rupse.png",
    },
  ];
  return (
    <div className=" flex flex-col px-2 customsm:px-4 sm:px-10 pt-24  py-16 2xl:py-0 justify-center item-center w-full">
      <div className="w-full  ">
        <h1 className="text-white font-normal text-left font-truculenta pl-2 lg:pl-12 leading-3 text-5xl customsm:text-6xl sm:text-7xl md:text-[100px] lg:text-[140px]">
          {`<Feat. Works/>`}
        </h1>
        <h1 className="font-truculenta pt-4 customsm:pt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl pl-4 lg:pl-12   ">
          Here are some of my projects
        </h1>
      </div>
      <div></div>
      <div className="flex  items-center   overflow-y-auto scrollbar-hide   py-10  gap-8 pt-5  z-20 lg:px-12">
        {/* <div className="flex flex-col space-y-1">
          <div className="w-full sm:hover:h-[500px] sm:hover:w-[105%] duration-700 max-w-4xl min-w-[314px] customsm:min-w-[360px] rounded-3xl  customsm:rounded-[44px] h-[450px]   relative overflow-y-hidden ">
            <a href="https://urban-dwellings.vercel.app/">
              <img className="image" src="/urban.png" alt="Urban Dwellings" />
            </a>
          </div>
          <div className="flex justify-between  px-5 sm:hidden leading-5 text-xl pt-3 font-truculenta">
            <h1>Urban Dwellings</h1>
            <h1>React+Tailwind</h1>
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <div className="w-full sm:hover:h-[500px] sm:hover:w-[105%] duration-700 max-w-4xl min-w-[314px] customsm:min-w-[360px] rounded-3xl  customsm:rounded-[44px] h-[450px]  relative overflow-y-hidden  ">
            <a href="https://github.com/Aman147181/minor-project">
              <img className="image" src="/safari.png" alt="Safari Nepal " />
            </a>
          </div>
          <div className="flex justify-between  px-5 sm:hidden leading-5  text-xl pt-3 font-truculenta">
            <h1>Safari Nepal </h1>
            <h1>Django+Bootstrap</h1>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="w-full sm:hover:h-[500px] sm:hover:w-[105%] duration-700 max-w-4xl min-w-[314px] customsm:min-w-[360px] rounded-3xl  customsm:rounded-[44px] h-[450px]   relative overflow-y-hidden ">
            <a href="https://ayushachary.com.np/">
              <img className="image" src="/rupse.png" alt="Rupse Holidays" />
            </a>
          </div>
          <div className="flex justify-between  px-5 sm:hidden leading-5  text-xl pt-3 font-truculenta">
            <h1>Rupse Holidays</h1>
            <h1>React+Tailwind</h1>
          </div>
        </div> */}
        {works.map((el) => (
          <WorkComponent
            imgurl={el.imgurl}
            desc={el.desc}
            worklink={el.worklink}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
