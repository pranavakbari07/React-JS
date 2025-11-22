import React from 'react'
import Ringproduct from './Ringproduct';

export default function Ring() {
    const products = [
    {
        id : 1,
        img : '/pro-1.jpg',
        title : 'Mens Flare Ring' ,
        price : '₹1,199.00',
        rating : 6.5,
    },
    {
        id : 2,
        img : '/pro-2.jpg',
        title : 'Mens Cargo Ring' ,
        price : '₹1,199.00',
        rating : 5.5,
    },
    {
        id : 3,
        img : '/pro-3.jpg',
        title : 'Mens Nebula Ring' ,
        price : '₹1,199.00',
        rating : 7.5,
    },
    {
        id : 4,
        img : '/pro-4.jpg',
        title : 'Mens Sake Glossy Ring' ,
        price : '₹1,199.00',
        rating : 5.5,
    }
  ];
  return (
    <div className="cards flex gap-5 justify-center mt-4">
      {products.map((product) => (
        <Ringproduct 
          key={product.id}
          product={product}
        /> 
      ))}
    </div>
  )
}
