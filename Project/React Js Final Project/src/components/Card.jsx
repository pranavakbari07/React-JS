import React from 'react'

export default function Card({ id, title, description, price, category, image, time }) {
  return (
    <>
      <div className="w-55 mt-5 rounded-xl shadow-md border border-gray-200 p-4 flex flex-col items-center hover:shadow-lg transition">
        <img src={image} alt="Amul Taaza" className="w-28 h-28 object-contain mb-2" />

        <div className="text-xs text-gray-500 flex items-center gap-1 mb-1">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
          <span>{time}</span>
        </div>

        <h2 className="text-sm font-semibold text-gray-800 text-center mb-1">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">{description}</p>

        <div className="flex justify-between items-center w-full">
          <span className="text-gray-900 font-semibold">₹ {price}</span>
          <button className="border border-green-500 text-green-600 text-sm px-3 py-1 rounded-md hover:bg-green-500 hover:text-white transition cursor-pointer">ADD</button>
        </div>
      </div>
    </>
  );
}