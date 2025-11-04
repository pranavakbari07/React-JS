import React from 'react'

export default function Phone() {
  return (
    <div className='fixed flex justify-between w-full z-99 py-2.5 px-16 bg-[#1aada3]'>
      <div className='flex items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="#fff" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm.801 4.565C6.018 6.207 6.974 6 8 6s1.982.207 2.698.565C11.385 6.91 12 7.475 12 8.25v.753a1 1 0 0 1-1.141.99l-.825-.117a1 1 0 0 1-.842-.806l-.126-.674c-.021-.11-.061-.142-.07-.147c-.177-.105-.507-.25-.996-.25s-.819.145-.996.25c-.009.005-.049.036-.07.147l-.127.674a1 1 0 0 1-.84.806l-.826.117A1 1 0 0 1 4 9.003V8.25c0-.775.615-1.341 1.301-1.685"/></svg>
        <h1 className='text-[12px] text-white'>OUR PHONE NUMBER: <span className='underline'>+77 (756) 334 876</span></h1>
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M15.436 14.778c-.595-.25-1.336-.563-1.336-.803v-1.57A3.55 3.55 0 0 0 15.5 9.6V7.5C15.5 5.57 13.93 4 12 4S8.5 5.57 8.5 7.5v2.1a3.55 3.55 0 0 0 1.4 2.806v1.569c0 .226-.734.54-1.323.792C7.152 15.376 5 16.296 5 18.7v.35h14v-.35c0-2.42-2.144-3.324-3.564-3.922" opacity="0.25"/><path fill="#fff" d="M8.5 9.5v-2a3.5 3.5 0 1 1 7 0v2c0 1.19-.593 2.24-1.5 2.873v.95a1 1 0 0 0 .629.928l1.586.635A4.43 4.43 0 0 1 19 19H5a4.43 4.43 0 0 1 2.785-4.114l1.586-.635a1 1 0 0 0 .629-.928v-.95A3.5 3.5 0 0 1 8.5 9.5"/></svg>
        <a className='text-[11px] text-white' href="">MY ACCOUNT</a>
        </div>
        <a className='text-[11px] text-white' href="">CART</a>
        <a className='text-[11px] text-white' href="">OUR LOCATION</a>
        <a className='text-[11px] text-white' href="">CONTACT US</a>
      </div>
    </div>
  )
}
