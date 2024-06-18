import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen px-4 flex flex-col items-center justify-center space-y-20 sm:space-y-8">
      <div className="w-full max-w-4xl flex relative  justify-center items-center flex-col  space-y-12 font-light    mb-5 text-white ">
        <div className="w-full flex items-center justify-start">
          <h1 className="z-10 text-white   pt-16      text-xl customsm:text-2xl sm:text-3xl md:text-[32px] font-truculenta ">
            Hello, I am Aman Shrestha
          </h1>
        </div>
        <div className="w-full flex items-center justify-end">
          <h1 className="z-10 text-white sm:pt-3     leading-[0.9] sm:leading-[0.9]  text-[74px] customsm:text-[86px] sm:text-[96px] md:text-[110px] lg:text-[132px] xl:text-[150px] md:leading-[0.9]   font-poppins ">
            Software
            <br /> <h1 className=" whitespace-nowrap">—Engineer</h1>
          </h1>
        </div>
        <div className="flex items-center  flex-col-reverse sm:flex-row justify-center xl:justify-end  w-full pt-3 customsm:pt-5 sm:pt-8  sm:space-x-10 md:space-x-12 lg:space-x-16 ">
          <div
            onClick={() => {
              const section = document.getElementById("work");
              section.scrollIntoView({ behavior: "smooth" });
            }}
            className=" w-12 mt-5 flex aspect-square  sm:w-16 md:w-[72px]  text-sm customsm:text-xl md:text-2xl   xl:text-3xl sm:hover:text-black duration-700 sm:hover:bg-white animate-bounce  items-center justify-center  rounded-full border-white border-2 "
          >
           ↓
          </div>
          <div>
            <h1 className="z-10 text-white  text-xl customsm:text-xl sm:text-2xl md:text-[28px] max-w-xl  font-robotoCondensed ">
              <span className="font-normal px-5">
                {" "}{" "}
                A driven and enthusiastic software engineer with a strong
                passion for creating exceptional web experiences.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
