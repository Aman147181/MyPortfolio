import React from "react";
import WorkComponent from "./WorkComponent";

const Work = () => {
  const works = [
    {
      worklink: "https://realstate-theta.vercel.app/",
      desc: {
        one: "Realtor",
        two: "Nextjs + Tailwind",
      },
      imgurl: "/realestate.png",
    },
    {
      worklink: "https://urban-dwellings.vercel.app/",
      desc: {
        one: "Urban Dwellings",
        two: "React+Tailwind",
      },
      imgurl: "/urban.png",
    },
    {
      worklink: "https://magnifico-nine.vercel.app/",
      desc: {
        one: "Magnifiqo Resort",
        two: "Nextjs + Tailwind",
      },
      imgurl: "/magnifico.png",
    },
    
  ];
  return (
    <div className=" flex flex-col px-2 customsm:px-4 sm:px-10 pt-24  py-16 2xl:py-0 justify-center item-center w-full">
      <div className="w-full  ">
        <h1 className="text-white font-normal text-left font-truculenta pl-2 lg:pl-12 leading-3 text-5xl customsm:text-6xl sm:text-7xl md:text-[100px] lg:text-[140px]">
          {`<Feat. Works/>`}
        </h1>
        <h1 className="font-truculenta pt-4 sm:pb-4 customsm:pt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl pl-4 lg:pl-12   ">
          Here are some of my projects
        </h1>
      </div>
      
      <div className="flex  items-center   overflow-y-auto scrollbar-hide   py-10  gap-8 pt-5  z-20 lg:px-24">
        
        {works.map((el, index) => (
          <WorkComponent
            key={index}
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
