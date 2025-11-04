import React from 'react'

export default function Join() {
    return (
        <div>
            <div className='join mt-22 flex flex-col justify-center items-center text-white'>
                <h2 className='italic text-[26px]'>Connect to Basel & Co.</h2>
                <h1 className='text-[58px]'>Join Our Newsletter</h1>
                <p className='text-[14px] text-center'>Hey you, sign up it only takes a second to be the first to <br /> find out about our latest news and promotionsâ ¦</p>
                <div className='flex gap-5 mt-6'>
                    <div className='flex items-center gap-3 border-b-2 px-2 py-1 w-[390px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44" /></svg>
                        <input type="email" placeholder='Your email address' className='outline-none' />
                    </div>
                    <button className='w-[140px] bg-white text-black py-2 text-sm cursor-pointer'>SIGN UP</button>
                </div>
            </div>
            <h1 className='text-[26px] tracking-wider my-2 text-center mt-20'>LATEST NEWS</h1>
            <h1 className='text-[#9B9B9B] text-[14px] tracking-widest text-center'>___X___</h1>
        </div>
    )
}
