import React, { useState } from "react";

export default function Card({ obj, index }) {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const cartItem = {
      id: `item-${index}`,
      image: obj.image,
      title: obj.title,
      price: obj.price
    };
    
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    setIsAdded(true);
  };

  return (
    <div className="w-[15%] border-2 bg-white rounded-lg shadow-md overflow-hidden m-4">
      <div className="flex justify-center items-center">
        <img
          src={obj.image}
          alt="Product"
          className="w-[50%] h-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h5 className="font-semibold text-gray-800">{obj.title}</h5>
        <h6 className="text-gray-500 mt-1">{obj.weight}</h6>
      </div>
      <div className="px-4 pb-4 flex items-center justify-between">
        <span className="text-lg font-bold text-green-700">{obj.price}</span>
        <button
          onClick={handleAddToCart}
          className={"text-sm font-medium bg-green-600 cursor-pointer py-2 px-4 rounded"}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
