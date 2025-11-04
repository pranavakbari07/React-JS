import React from "react";

export default function Card({ id, image, title, weight, price, category }) {
  const addToCart = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, image, title, weight, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    // alert(`${title} added to cart successfully!`);
  };
  return (
    <div className="w-[15%] border-2 bg-white rounded-lg shadow-md overflow-hidden m-4">
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="Product" 
          className="w-[50%] h-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h5 className="font-semibold text-gray-800">{title}</h5>
        <h6 className="text-gray-500 mt-1">{weight}</h6>
      </div>
      <div className="px-4 pb-4 flex items-center justify-between">
        <span className="text-lg font-bold text-green-700">{price}</span>
        <button onClick={() => addToCart(id)} className="text-sm font-medium bg-green-600 cursor-pointer py-2 px-4 rounded">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
