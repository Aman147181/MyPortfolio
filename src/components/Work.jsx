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
        <h1 className="font-truculenta pt-4 pb-4 customsm:pt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl pl-4 lg:pl-12   ">
          Here are some of my projects
        </h1>
      </div>
      
      <div className="flex  items-center   overflow-y-auto scrollbar-hide   py-10  gap-8 pt-5  z-20 lg:px-24">
        
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
