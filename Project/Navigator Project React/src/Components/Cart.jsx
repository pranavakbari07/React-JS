import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const allCart = JSON.parse(localStorage.getItem("cart")) || [];
    setRecord(allCart);
  }, []);

  const removeBtn = (index) => {
    const newData = record.filter((_, i) => i !== index);
    setRecord(newData);
    localStorage.setItem("cart", JSON.stringify(newData)); 
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-18.5">
      {record.length === 0 ? (
        <div className="h-145 flex flex-col items-center justify-center text-center gap-2">
          <img src="Cart.png" alt="Empty Cart" className="w-75" />
          <h1 className="text-3xl font-semibold text-gray-700">
            Cart is Empty 😢
          </h1>
          <Link
            to="/"
            className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Continue Shopping 🛍️
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 mt-8">Your Cart 🛒</h1>
          <div className="space-y-4">
            {record.map((e, index) => (
              <div
                key={`${e.id}-${index}`}
                className="flex items-center justify-between p-4 bg-white rounded-lg border"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{e.title}</h3>
                    <p className="text-green-600 font-bold">{e.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeBtn(index)}
                  className="text-red-500 px-4 py-2 border border-red-500 rounded hover:bg-red-50"
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
