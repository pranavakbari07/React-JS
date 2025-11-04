import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#1e1e20] w-full mt-18">
        <div className="flex justify-between items-center px-10 p-[57px]">
          <img src="whitelogo.svg" alt="" className="w-[125px] h-[50px]" />
          <ul className="flex gap-10 text-[16px] text-white font-[500]">
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">List your events</a>
            </li>
          </ul>
          <div className="flex flex-col items-center">
            <img
              src="scaner.svg"
              alt=""
              className="w-[100px] h-[100px] rounded-[7px]"
            />
            <h1 className="text-white mt-2 text-[16px] font-[500]">
              Scan to download the app
            </h1>
          </div>
        </div>

        <span className="inline-block w-[95%] ml-10 mt-5 border-1 border-[#77777e]"></span>

        <div className="flex justify-between items-center px-10 py-7">
          <p className="text-[#77777e] text-[14px]">
            By accessing this page, you confirm that you have read, understood,
            and agreed to our Terms of Service, Cookie Policy, Privacy Policy,
            and Content Guidelines. All rights reserved.
          </p>
          <div className="flex gap-3">
            <img src="Whatsapp.svg" alt="" className="w-[30px] h-[30px]" />
            <img src="Facebook.avif" alt="" className="w-[30px] h-[30px]" />
            <img src="instagram.png" alt="" className="w-[30px] h-[30px]" />
            <img src="twitter.png" alt="" className="w-[30px] h-[30px]" />
            <img src="youtube.svg" alt="" className="w-[30px] h-[30px]" />
          </div>
        </div>
      </footer>
    </div>
  );
}
