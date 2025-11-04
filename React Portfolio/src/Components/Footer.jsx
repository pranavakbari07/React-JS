import React from 'react'

export default function Footer() {
  

  return (
    <div className="h-auto text-white px-4 sm:px-8 md:px-20 lg:px-30">
      <footer
        className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between items-center w-full border-t border-t-gray-300 py-8 md:py-10"
      >
        <p className="text-sm md:text-base text-center md:text-left">© 2023 anurag gharat</p>

        <div className="flex flex-row items-center gap-4 sm:gap-6">

          <div className="flex flex-row gap-3 sm:gap-4 text-xl">
            <a
              href="https://github.com/pranavakbari07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2 transition-all ease-in-out duration-300"
            >
              <i className="fa-brands fa-github text-base sm:text-lg" style={{ color: "#ffffff" }}></i>
            </a>

            <a
              href="https://www.linkedin.com/in/pranav-akbari-b49866332/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2 transition-all ease-in-out duration-300"
            >
              <i className="fa-brands fa-linkedin text-base sm:text-lg" style={{ color: "#fafcff" }}></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}