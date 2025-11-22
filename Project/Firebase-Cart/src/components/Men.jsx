import React from 'react'

export default function Men() {
  return (
    <div>
      <div className="flex flex-col items-center max-sm:w-200 max-md:w-196 max-lg:w-256 max-xl:w-320">
        <h1 className="text-[15px] font-bold mt-8 max-sm:text-[40px] max-md:text-[20px] max-lg:text-[20px]">Men & women jewellery</h1>
        <span className="inline-block w-10 h-1 bg-[#bebebe] rounded mt-3"></span>
        <div className="flex gap-3 mt-8 pb-9 max-sm:flex-wrap max-sm:justify-center">
            <button className="py-2 px-3 rounded-full text-[13px] max-sm:text-[24px] max-sm:px-4  bg-[#e2e2e2]">MEN'S CHAIN</button>
            <button className="py-2 px-3 rounded-full text-[13px] max-sm:text-[24px] max-sm:px-4 ">MEN'S BRACELET</button>
            <button className="py-2 px-3 rounded-full text-[13px] max-sm:text-[24px] max-sm:px-4 ">MEN'S RING</button>
            <button className="py-2 px-3 rounded-full text-[13px] max-sm:text-[24px] max-sm:px-4 ">WOMEN'S PENDANT</button>
            <button className="py-2 px-3 rounded-full text-[13px] max-sm:text-[24px] max-sm:px-4 ">WOMEN'S EARRINGS</button>
        </div>
    </div>
    </div>
  )
}
