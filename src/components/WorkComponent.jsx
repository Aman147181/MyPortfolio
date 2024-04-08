import React from 'react'

const WorkComponent = ({imgurl, desc, worklink}) => {
  return (
    <div className="flex flex-col space-y-1">
          <div className="w-full sm:hover:scale-105  duration-700 max-w-4xl min-w-[314px] customsm:min-w-[360px] rounded-3xl  customsm:rounded-[44px] h-[450px]   relative overflow-y-hidden ">
            <a href={worklink}>
              <img className="image" src={imgurl} alt="Urban Dwellings" />
            </a>
          </div>
          <div className="flex justify-between  px-5 sm:hidden leading-5 text-xl pt-3 font-truculenta">
            <h1>{desc.one}</h1>
            <h1>{desc.two}</h1>
          </div>
        </div>
  )
}

export default WorkComponent