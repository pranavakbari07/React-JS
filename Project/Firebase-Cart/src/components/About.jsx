import React from "react";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center px-15 max-sm:w-200  max-sm:px-3 max-md:w-196 max-md:px-5 max-lg:w-256 max-lg:px-5 max-xl:w-320 max-xl:px-5">
        <h1 className="text-[15px] font-bold mt-8 max-sm:text-[35px] max-md:text-[20px] max-lg:text-[20px] max-xl:text-[20px]">About Black Mamba</h1>
        <span className="inline-block w-10 h-1 bg-[#bebebe] rounded mt-3"></span>
        <p className="text-center text-[14px] mt-5 font-semibold max-sm:text-[25px] max-md:text-[15px] ">Black Mamba Jewellery is a premium jewellery brand
            offering a versatile range of designs for men and women. Our collection includes necklaces, bracelets,
            earrings, rings, and pendants, all crafted from high-quality materials to ensure durability, style, and
            comfort.</p>
        <p className="text-center text-[14px] mt-2 font-semibold max-sm:text-[25px] max-md:text-[15px] ">With a focus on modern aesthetics and fine craftsmanship,
            we cater to those who value timeless and trendy jewellery. Trusted by over 1 lakh satisfied customers, Black
            Mamba has become a go-to destination for those seeking premium jewellery at affordable prices. Whether
            you're looking to elevate your style or find the perfect gift, our collection has something for everyone.
        </p>
      </div>
      <div className="mt-10 max-sm:w-200 max-md:w-196 max-lg:w-256 max-xl:w-320">
        <img src="ring.jpg" alt="" />
      </div>
    </div>
  );
}
