import React from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Nav />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />

      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 flex flex-row justify-center items-center w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer z-50"
        aria-label="Back to Top"
      >
        <i
          className="fa-solid fa-arrow-up text-base sm:text-lg"
          style={{ color: "#ffffff" }}
        ></i>
      </button>
    </div>
  );
}
