import React from 'react';

export default function Cards({ id, title, desc, price }) {
    const addToCart = (id) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ id, title,desc , price });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${title} added to cart!`);
    };

    return (
        <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">₹{price}</p>
                <button onClick={() => addToCart(id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add to Cart</button>
            </div>
        </div>
    );
}
