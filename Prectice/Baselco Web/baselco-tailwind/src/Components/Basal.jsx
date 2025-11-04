import React from 'react'

export default function Basal() {
  return (
    <div className='basal mt-25 flex items-center justify-center'>
      <div className='flex w-[70%] h-[340px] bg-white border-4 border-[#efefef]'>
        <div className='flex flex-col items-center w-[50%] h-[332px] border-r-1 border-e-[#efefef]'>
            <img src="logo.png" className='mt-10' alt="" />
            <h1 className='text-[14px] text-[#676767] mt-2'>MINIMALISTIC AJAX E-COMMERCE THEME</h1>
            <p className='text-[14px] text-[#4c4c4c] mt-3 text-center'>Adipiscing dignissim euismod ad venenatis volutpat sociis <br /> feugiat purus ridiculus rhoncus nullam sodales euismod ad <br /> venenatis volutpa ridiculus.</p>
            <button className='text-[12px] bg-black text-white px-2 py-2 mt-5'>PURCHASE BASEL</button>
        </div>
        <div className='flex flex-col items-center w-[50%] h-[332px]'>
            <h1 className='text-[23px] italic mt-11'>About the shop</h1>
            <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#000" d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z" stroke-width="0.5" stroke="#000"/></svg>
            <p className='mt-3 text-center text-[14px] text-[#4c4c4c]'><span className='text-black font-bold'>Basel & Company –</span> is a famous worldwide fashion store <br /> dipiscing dignissim euismod ad venenatis volutpat sociis <br /> feugiat purus ridiculus.</p>
            <button className='border-1 mt-8 border-[#bebebe] text-[11px] px-3 py-1.5 text-[#6d6d6d] '>SHOP NOW</button>
        </div>
      </div>
    </div>
  )
}
