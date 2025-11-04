import React from 'react'

export default function Premium() {
  return (
    <div>
      <div className="flex flex-col items-center max-sm:w-200 max-md:w-196 max-lg:w-256 max-xl:w-320">
        <h1 className="text-[15px] font-bold mt-8 max-sm:text-[35px] max-md:text-[20px] max-lg:text-[20px] max-xl:text-[20px]">PREMIUM JEWELERY FOR MEN AND WOMEN</h1>
        <span className="inline-block w-10 h-1 bg-[#bebebe] rounded mt-3"></span>
    </div>

    <div className="flex justify-center mt-10 gap-8 max-sm:w-200 max-md:w-196 max-md:gap-5 max-lg:w-256 max-lg:gap-8 max-xl:w-320">
        <div className="men w-[46%] relative">
            <img src="Man.jpg" alt="" className=""/>
            <h1 className="text-[23px] text-white absolute bottom-[40%] left-[45%]">MEN</h1>
        </div>
        <div className="men w-[46%] relative">
            <img src="Women.jpg" alt="" className=""/>
            <h1 className="text-[23px] text-white absolute bottom-[40%] left-[45%]">WOMEN</h1>
        </div>
    </div>
    </div>
  )
}
