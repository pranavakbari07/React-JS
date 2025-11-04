import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white py-1 shadow-lg border-b border-gray-200">
        <div className=" mx-auto">
          <div className="flex justify-between px-15 items-center h-16">
            <div className="flex gap-4">
              <div className="flex items-center">
                <Link to="/">
                  <img className="h-8 w-auto" src="blikit.svg" alt="Logo" />
                </Link>
              </div>
              <div className="hidden md:flex items-center">
                <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-[15px] text-black ml-2">
                    <span className="text-[17px] text-black font-bold">
                      Delivery in 8 minutes
                    </span>
                    <br /> B62, Pocket B, South City I...
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              <Link to="/cart" className="font-bold">
                <button className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
