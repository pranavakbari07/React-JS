import React from 'react'

export default function Products() {
    let arr = [
        {
            "image": "./ear.jpg",
            "name": "Earrings",
            "price": "$330.00",
            "title": "Jeptum ring earrings",
            "description": "PARTURIENT ADIPISCING Blandit parturient adipiscing faucibus fringilla vestibulum ultricies integer",
            "button": "ADD TO CART"
        },
        {
            "image": "./shirt.jpg",
            "name": "Shirt",
            "price": "$79.00 - $89.00",
            "title": "Jhecked flannel shirt",
            "description": "Viverra a consectetur Enim in malesuada fusce dolor mi massa leo taciti nulla vestibulum",
            "button": "SELECT OPTIONS"
        },
        {
            "image": "./coat.jpg",
            "name": "Coat",
            "price": "$219.00",
            "title": "Basic Korean-style coat",
            "description": "Viverra a consectetur Enim in malesuada fusce dolor mi massa leo taciti nulla vestibulum",
            "button": "SELECT OPTIONS"
        },
        {
            "image": "./camel.jpg",
            "name": "Camel",
            "price": "$390.00",
            "title": "Eingerless gloves in camel",
            "description": "MUS ADIPISCING NISL Condimentum mi curae adipiscing a viverra id vel curae nec parturient",
            "button": "ADD TO CART"
        },
        {
            "image": "./belt.jpg",
            "name": "Belt",
            "price": "$115.00",
            "title": "Classic Sqquare Buckle Belt",
            "description": "Viverra a consectetur Enim in malesuada fusce dolor mi massa leo taciti nulla vestibulum",
            "button": "ADD TO CART"
        },
        {
            "image": "./dress.jpg",
            "name": "Dress",
            "price": "$399.00",
            "title": "Elegant dress with trimming",
            "description": "TEMPUS CONSECTETUR Ac dis vestibulum ut primis eleifend at neque at ornare mus nostra non",
            "button": "ADD TO CART"
        },
        {
            "image": "./chest.jpg",
            "name": "Basic knit dress",
            "price": "$10.00",
            "title": "Basic knit dress chest",
            "description": "TEMPUS CONSECTETUR Ac dis vestibulum ut primis eleifend at neque at ornare mus nostra non",
            "button": "SELECT OPTIONS"
        },
        {
            "image": "./watch (2).jpg",
            "name": "Jasic rubber watch",
            "price": "$333.00",
            "title": "Jasic rubber watch",
            "description": "Viverra a consectetur Enim in malesuada fusce dolor mi massa leo taciti nulla vestibulum",
            "button": "ADD TO CART"
        },
    ]
    return (
            <div className='w-290 m-auto flex flex-wrap justify-between text-center'>
                    {
                        arr.map((e, i) => {
                            return <div className='mt-15'>
                                <img src={e.image} alt={e.name} className='w-[262.5px] h-[334.69px]' />
                                <h2 className='text-[#949494] my-2'>{e.price}</h2>
                                <div className='border-[#f1f1f1] border-3 flex flex-col items-center justify-center w-[262.5px] h-[197px] relative'>
                                    <h2 className='text-[18px] italic'>{e.title}</h2>
                                    <p className='text-[#4C4C4C] mt-3 text-sm leading-relaxed px-2'>{e.description}</p>
                                    <button className='bg-[#1DAAA3] text-white text-[12px] px-[14px] py-[9px] font-[550] absolute top-43 cursor-pointer'>{e.button}</button>
                                </div>
                            </div>
                        })
                    }
            </div>
    )
}
