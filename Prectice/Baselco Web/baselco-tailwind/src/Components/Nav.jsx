import React from 'react'

export default function Nav() {
  return (
    <div className='px-15 py-4.5 flex justify-between items-center fixed mt-10 w-full z-99 bg-white'>
        <div className='text-[13px] flex gap-5 outline-none'>
            <select name="" id="">
              <option value="">HOME</option>
            </select>
            <select name="" id="">
              <option value="">SHOP</option>
            </select>
            <select name="" id="">
              <option value="">BLOG</option>
            </select>
            <select name="" id="">
              <option value="">PAGES</option>
            </select>
            <select name="" id="">
              <option value="">FEATURES</option>
            </select>
        </div>
        <img src="logo.png" alt="" className='w-50'/>
        <div className='flex gap-3 justify-end items-center w-90'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fillRule="evenodd" d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004" clipRule="evenodd"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12 20.043a.98.98 0 0 1-.7-.288L4.63 13.08a5.343 5.343 0 0 1 1.423-8.567A5.27 5.27 0 0 1 12 5.371a5.27 5.27 0 0 1 5.947-.858a5.343 5.343 0 0 1 1.423 8.567l-6.676 6.675a.98.98 0 0 1-.694.288M8.355 4.963a4 4 0 0 0-1.844.437a4.4 4.4 0 0 0-2.389 3.243a4.35 4.35 0 0 0 1.215 3.73l6.675 6.675l6.651-6.675a4.35 4.35 0 0 0 1.215-3.73A4.4 4.4 0 0 0 17.489 5.4a4.34 4.34 0 0 0-4.968.852a.744.744 0 0 1-1.042 0a4.47 4.47 0 0 0-3.124-1.289" strokeWidth="0.5" stroke="#000"/></svg>
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 512 512"><circle cx="176" cy="416" r="16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="400" cy="416" r="16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 80h64l48 272h256"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"/></svg>
              <p className='text-[13px]'> 0 / $0.00</p>
            </div>
        </div>
      
    </div>
  )
}
