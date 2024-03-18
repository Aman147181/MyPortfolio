import React from 'react'

const Contact = () => {
 
  return (
    <div className=' min-h-screen py-10 flex flex-col space-y-1 items-start px-4 sm:px-16 justify-center'>
      <h1 className='font-lato text-white opacity-1 sm:pl-3  text-base customsm:text-xl sm:text-[24px] leading-[5px] pb-2  uppercase'>got a project in mind? </h1>
      <h1 className='font-lato text-white text-5xl opacity-1  customsm:text-7xl sm:text-[90px] md:text-[120px] pb-12 uppercase'>let's connect </h1>
      <button className='px-6 py-3 bg-black z-20 text-white ml-2 opacity-1  text-sm customsm:text-base md:text-xl hover:text-black hover:font-medium duration-500 hover:bg-white uppercase font-robotoCondensed'>message me</button>
    </div>
  )
}

export default Contact