import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="text-[12px] text-white p-3 bg-black text-center max-sm:w-200 max-sm:text-[15px] max-md:w-196 max-lg:w-256 max-xl:w-320">
        <h1>SALE : BUY 1 GET 1 FREE JUST ADD 2 ITEMS TO CART</h1>
      </div>

      <header
        className="h-[687px] pt-3 max-sm:w-200 max-md:w-196 max-lg:w-256 max-xl:w-320 border-b-2 border-black"
        style={{
          backgroundImage: "url(money_magnect_1920_x_1080_px.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <nav className="flex justify-between items-center">
          <div className="ml-13 max-lg:ml-5">
            <img
              src="bBLACK_MAMBA_w_05261145-ac06-4e85-b777-c67c1625df41_480x.png"
              alt="Logo"
              className="w-[180px] h-[64px]"
            />
          </div>

          <ul className="flex text-white text-[14px] gap-8 px-12 max-sm:hidden max-md:hidden max-lg:gap-5 max-lg:px-5">
            <li><a href="">MEN</a></li>
            <li><a href="">WOMEN</a></li>
            <li><a href="">NATURAL STONE JEWELLERY</a></li>
            <li><a href="">SPIRITUAL JEWELLERY</a></li>
            <li><a href="">ABOUT US</a></li>
            <li><a href="">ACCOUNT</a></li>
            <li><a href="">SEARCH</a></li>
            <li><a href="">CART</a></li>
          </ul>

          <div className="hidden max-sm:flex max-sm:mr-7 max-md:flex max-md:mr-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </div>
        </nav>
      </header>
    </div>
  );
}
