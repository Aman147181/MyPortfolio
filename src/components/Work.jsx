import React from "react";
import WorkComponent from "./WorkComponent";

const Work = () => {
  const works = [
    {
      worklink: "https://magnifico-nine.vercel.app/",
      desc: {
        one: "Magnifiqo Resort",
        two: "Nextjs + Tailwind",
      },
      imgurl: "/magnifico.png",
    },
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
    
  ];
  return (
    <div className=" flex flex-col  bg-black    pt-12 px-1 customsm:px-12 md:px-20 2xl:py-0 justify-center item-center w-full">
      <div className=" bg-black  w-full sticky  z-[40] bg-opacity-100 top-[54px]  xl:top-10 ">
        <h1 className=" text-white   font-normal w-full pt-8 pl-3 pb-2   text-left uppercase font-poppins   text-xl customsm:text-5xl  md:text-6xl">
          selected works
        </h1>
      </div> 

      <div className="flex flex-col justify-center  items-end  px-4  pt-4     gap-y-20   z-20 ">
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
