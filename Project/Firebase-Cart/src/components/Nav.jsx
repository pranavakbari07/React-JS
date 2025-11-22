import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Nav() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

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
        <nav className="flex  justify-end items-center">
          <div className="ml-13 max-lg:ml-5">
            <Link to="/deshboard">
              <img
                src="bBLACK_MAMBA_w_05261145-ac06-4e85-b777-c67c1625df41_480x.png"
                alt="Logo"
                className="w-[180px] h-[64px] mr-85 cursor-pointer"
              />
            </Link>
          </div>

          <ul className="flex text-white text-[14px] gap-8 px-12 max-sm:hidden max-md:hidden max-lg:gap-5 max-lg:px-5">
            <li><a href="">MEN</a></li>
            <li><a href="">WOMEN</a></li>
            <li><a href="">NATURAL STONE JEWELLERY</a></li>
            <li><a href="">SPIRITUAL JEWELLERY</a></li>
            <li><a href="">ABOUT US</a></li>
            <li><a href="">ACCOUNT</a></li>
            <li><a href="">SEARCH</a></li>
            <li>
              <Link to="/cart" className="relative">
                CART
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4 max-sm:mr-7 max-md:mr-7">
            <Link to="/cart" className="relative hidden max-sm:block max-md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            <div className="hidden max-sm:flex max-md:flex">
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
          </div>
        </nav>
      </header>
    </div>
  );
}
