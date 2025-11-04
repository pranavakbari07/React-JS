import React from 'react'

export default function Contact() {
  return (
    <div className="h-auto text-white px-4 sm:px-8 md:px-20 lg:px-30 ">
      <div className="w-full py-8 sm:py-10" id="contact">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-5">Contact</h1>
          <p className="dark:text-neutral-300 text-neutral-600 text-sm sm:text-base">
            I would love to hear from you. Whether you have a question about my services, want to discuss a
            potential project, or simply want to say hello, don't hesitate to get in touch. I am here to help and
            excited to start a conversation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          {/* Contact Info - Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 sm:gap-6">
            <div className="w-full lg:w-2/3 rounded-xl p-6 flex flex-col items-center lg:items-start gap-3">
              <i className="fa-regular fa-envelope text-[25px]" style={{ color: "#9333ea" }}></i>
              <p className="text-base">pranavakbari07@gmail.com</p>
            </div>

            <div className="w-full lg:w-2/3 rounded-xl p-6 flex flex-col items-center lg:items-start gap-3">
              <i className="fa-solid fa-phone text-[25px]" style={{ color: "#9333ea" }}></i>
              <p className="text-base">+91-8160815985</p>
            </div>

            <div className="w-full lg:w-2/3 rounded-xl p-6 flex flex-col items-center lg:items-start gap-3">
              <i className="fa-solid fa-location-dot text-[25px]" style={{ color: "#9333ea" }}></i>
              <p className="text-base">Rajkot - India.</p>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4 p-6 lg:p-8 xl:p-10">
            <h2 className="font-medium text-xl w-full text-center lg:text-left">Send me a Message</h2>

            <input
              type="text"
              name="name"
              id="name"
              className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6
              placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Your Name"
            />

            <input
              type="email"
              name="email"
              id="email"
              className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6
              placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Your Email"
            />

            <textarea
              rows="3"
              name="message"
              id="message"
              className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6
              placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6 resize-none"
              placeholder="Your Message"
            ></textarea>

            <button
              className="cursor-pointer flex flex-row items-center gap-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-lg w-full lg:w-auto justify-center"
              aria-label="Send"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}