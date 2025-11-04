import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart'

export default function Nav() {
    return (
        <div className='flex justify-between px-30 py-4'>
            <div className='flex gap-5 items-center'>
                <Link to={"/"}>
                    <img src="logo.png" alt="" className='w-[202px] h-[54px]' />
                </Link>
                <div className='city w-[240px] h-[50px] p-[15px] rounded-lg flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <img src="india.png" alt="" className='w-[32px] rounded-sm' />
                        <h1 className='text-[13px] font-semibold text-[#0E4D65]'>Rajkot</h1>
                    </div>
                    <img src="edit.svg" alt="" />
                </div>
                <div className='bg-[#EDF0FA] py-[10px] ml-7 px-[25px] flex justify-between items-center rounded-lg w-[330px] h-[50px]'>
                    <input type="text" placeholder='Search for flowers' />
                    <img src="search.svg" alt="" className='w-[24px] h-[24px]' />
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-0.5 items-center justify-center'>
                    <img src="track.svg" alt="" className='w-[25px] cursor-pointer' />
                    <h1 className='text-[13px]'>Track Order</h1>
                </div>
                <div className='flex flex-col gap-0.5 items-center justify-center'>
                    <button>
                        <Link to={"/cart"}>
                            <img src="cart.svg" alt="" className='w-[25px] cursor-pointer' />
                        </Link>
                    </button>
                    <h1 className='text-[13px]'>Cart</h1>
                </div>
                <div className='flex flex-col gap-0.5 items-center justify-center'>
                    <img src="rupees.svg" alt="" className='w-[25px] cursor-pointer' />
                    <h1 className='text-[13px]'>INR</h1>
                </div>
                <div className='flex flex-col gap-0.5 items-center justify-center'>
                    <img src="user.svg" alt="" className='w-[25px] cursor-pointer' />
                    <h1 className='text-[13px]'>My Account</h1>
                </div>
                <div className='flex flex-col gap-0.5 items-center justify-center'>
                    <img src="menu.svg" alt="" className='w-[25px] cursor-pointer' />
                    <h1 className='text-[13px]'>More</h1>
                </div>
            </div>
        </div>
    )
}