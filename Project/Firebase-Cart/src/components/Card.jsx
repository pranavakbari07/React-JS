import React from "react";
import ProductCard from "./productcard"; 

export default function Card() {
  const products = [
    {
      id: 1,
      img: "/img-1.jpg",
      title: "Men's Tucano Chain",
      price: "₹1,299.00",
      rating: 4.5,
      color: "2 COLORS AVAILABLE",
    },
    {
      id: 2,
      img: "/img-2.png",
      title: "Men's Tucano Chain",
      price: "₹1,299.00",
      rating: 4.5,
      color: "2 COLORS AVAILABLE",
    },
    {
      id: 3,
      img: "/img-3.jpg",
      title: "Men's Tucano Chain",
      price: "₹1,299.00",
      rating: 4.5,
      color: "2 COLORS AVAILABLE",
    },
    {
      id: 4,
      img: "/img-4.jpg",
      title: "Men's Tucano Chain",
      price: "₹1,299.00",
      rating: 4.5,
      color: "2 COLORS AVAILABLE",
    },
  ];

  return (
    <div className="cards flex gap-5 justify-center mt-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

