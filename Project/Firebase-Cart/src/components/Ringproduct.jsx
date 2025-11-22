import React, { useEffect } from "react";  
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ringproduct({ product }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="card1">
        <div className="cardimg">
          <img
            src={product.img}
            alt={product.title}
            className="h-80 max-sm:h-81 max-md:h-45 max-lg:h-59 max-xl:h-74"
          />
        </div>
        <div className="carddetails">
          <h1 className="text-center text-[14px] mt-3 max-sm:text-[30px]">
            {product.title}
          </h1>
          <h2 className="text-center text-[14px] mt-1 max-sm:text-[30px]">
            {product.price}
          </h2>
          <h3 className="flex items-center justify-center mt-1 max-sm:text-[30px]">
            {product.rating} &#9733;
          </h3>
          <button 
            className="cursor-pointer border-1 py-2 px-26 hover:bg-black hover:text-white duration-300 mt-1 max-sm:mt-12 max-md:px-10 max-md:mt-5 max-lg:px-18"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
