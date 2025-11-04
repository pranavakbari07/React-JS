import React from 'react'

export default function Catagories() {
  return (
    <div className='text-center mt-38'>
      <h1 className='text-[#9B9B9B] text-[14px] tracking-widest'>MADE THE HARD WAY</h1>
      <h1 className='text-[26px] tracking-wider my-2'>FEATURED CATEGORIES</h1>
      <h1 className='text-[#9B9B9B] text-[14px] tracking-widest'>___X___</h1>
      <p className='italic font-serif my-3'>Basel Co. is a powerful eCommerce theme for Shopify. Visit <br /> our shop page to see all main features for <a href="#" className='text-[#1daaa3] underline'>Your Store</a></p>
      <div className='w-290 h-[555px] m-auto my-10 flex justify-between'>
        <div className='bag w-[555px] relative text-sm'>
          <div className='bg-white italic w-23 py-2 absolute bottom-5 left-57 tracking-wider'>Bag</div>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='black w-[262.5px] h-[262.5px] text-sm relative'>
            <div className='bg-white italic w-23 py-2 bottom-5 absolute left-22 tracking-wider'>Footwear</div>
          </div>
          <div className='women w-[262.5px] h-[262.5px] text-sm relative'>
            <div className='bg-white italic w-23 py-2 bottom-5 absolute left-22 tracking-wider'>Women</div>
          </div>
        </div>
        <div className='watch w-[262.5px] relative text-sm'>
          <div className='bg-white italic w-23 py-2 absolute bottom-5 left-22 tracking-wider'>Watch</div>
        </div>
      </div>
      <div className='bg-black py-3.5 text-white w-290 m-auto text-sm'>UP TO 70% OFF THE ENTIRE STORE!. MADE WITH LOVE by <a href="#" className='underline'>The4 studio</a></div>
      <h1 className='text-[#9B9B9B] text-[14px] tracking-widest mt-15'>MADE THE HARD WAY</h1>
      <h1 className='text-[26px] tracking-wider my-2'>FEATURED PRODUCTS</h1>
      <h1 className='text-[#9B9B9B] text-[14px] tracking-widest'>___X___</h1>
    </div>
  )
}