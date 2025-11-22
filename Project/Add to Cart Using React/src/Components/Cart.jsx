import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      {cart.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center text-center">
          <img src="/Cart.png" alt="" className="w-80" />
          <h1 className="text-3xl font-semibold text-gray-700">
            Cart is Empty
          </h1>
          <Link
            to="/"
            className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Cart Items</h1>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-green-600 font-bold">{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 px-4 py-2 cursor-pointer border border-red-500 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
