import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-auto text-white px-6 md:px-20">
      <nav className="flex justify-between items-center py-9" id="home">
        <h3 className="text-[25px] font-bold">AP.</h3>

        <ul className="hidden md:flex gap-9 py-2 px-5 rounded-full">
          <li>
            <a
              href="#home"
              className="hover:text-[#9333ea] transition-all duration-200"
            >
              <i className="fa-solid fa-house mr-2"></i> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#9333ea] transition-all duration-200"
            >
              <i className="fa-solid fa-user mr-2"></i> About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-[#9333ea] transition-all duration-200"
            >
              <i className="fa-solid fa-code mr-2"></i> Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#9333ea] transition-all duration-200"
            >
              <i className="fa-solid fa-phone mr-2"></i> Contact
            </a>
          </li>
        </ul>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </div>
      </nav>

      <div
        className={`md:hidden bg-[#111] rounded-lg overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 p-5">
          <li>
            <a
              href="#home"
              className="hover:text-[#9333ea] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-house mr-2"></i> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#9333ea] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-user mr-2"></i> About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-[#9333ea] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-code mr-2"></i> Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#9333ea] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-phone mr-2"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
