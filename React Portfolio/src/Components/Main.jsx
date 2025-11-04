import React, { useState, useEffect } from "react";

export default function Main() {
  const [text, setText] = useState("");
  const fullText = "Hey there, I'm Pranav !";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="h-auto text-white px-6 md:px-20 ">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start py-16 md:py-24 lg:py-32 gap-10">
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-[33px] sm:text-[40px] md:text-[50px] lg:text-[55px] font-semibold leading-tight min-h-[1.2em]">
            {text}
            {currentIndex < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </h1>
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] py-2 font-medium">
            A Web Designer
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-neutral-400 mt-3">
            A Web Designer with a passion for turning code into seamless user experiences!
          </p>

          <button
            aria-label="contact"
            className="cursor-pointer mt-8 sm:mt-10 flex items-center gap-2 border-2 border-white py-3 px-6 sm:py-4 sm:px-8 hover:border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all ease-in-out duration-300 mx-auto md:mx-0"
          >
            <a href="#contact">Contact Me</a>
            <i className="fa-solid fa-up-right-from-square"></i>
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-[50%] sm:w-[45%] md:w-[60%] lg:w-[50%] h-auto">
            <img
              src="it's me.jpg"  
              alt="Pranav"
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}