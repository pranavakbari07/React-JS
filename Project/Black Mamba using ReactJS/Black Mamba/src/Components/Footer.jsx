import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="flex mt-10 max-sm:w-200 max-sm:flex-col max-md:w-196 max-md:flex-col max-lg:w-256 max-xl:w-320">
        <div className="flex justify-center w-[60%] bg-black py-20 max-sm:w-[100%] max-sm:px-10 max-md:w-[100%] max-md:px-0">
          <div className="w-[45%] max-sm:w-[100%]">
            <img
              src="bBLACK_MAMBA_w_05261145-ac06-4e85-b777-c67c1625df41_480x.png"
              alt="Black Mamba Logo"
              className="w-45"
            />
            <ul className="flex flex-col gap-3 text-white text-[13px] max-sm:text-[21px] font-sans">
              <li className="mt-20 text-[15px] max-sm:text-[25px]">
                <a href="">QUICK LINKS</a>
              </li>
              <li><a href="">ABOUT US</a></li>
              <li><a href="">FAQ'S</a></li>
              <li><a href="">SHIPPING</a></li>
              <li><a href="">EXCHANGES AND RETURNS</a></li>
              <li><a href="">CORPORATE/BULK ORDERS</a></li>
              <li><a href="">JEWELLERY CARE</a></li>
              <li><a href="">PRIVACY POLICY</a></li>
              <li><a href="">TERMS OF SERVICE</a></li>
              <li><a href="">TRACK YOUR ORDER</a></li>
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-4 w-[45%] text-white text-[14px] max-sm:w-[100%] max-sm:text-[25px] max-md:text-[17px]">
            <h3 className="max-md:text-[20px]">ABOUT BLACK MAMBA</h3>
            <p>
              <i>
                Explore the pinnacle of luxury with our curated selection of
                jewelry pieces meticulously crafted for both genders. With an
                extensive network of over 50,000 delighted clientele worldwide,
                our brand symbolizes excellence, offering unrivaled quality and
                enduring elegance. 💍🌟
              </i>
            </p>
            <h4>Customer Care: support@blackmambajewellery.com</h4>
            <h4>+91 99299 99999</h4>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 pl-9 w-[40%] max-sm:w-[100%] max-sm:py-10 max-md:w-196 max-md:py-10">
          <h1 className="text-[#737373] text-[30px] max-sm:text-[40px] max-md:text-[40px] max-lg:text-[22px]">
            Exclusive offers straight to your inbox
          </h1>
          <p className="text-[#737373] text-[13px] max-sm:text-[25px] max-md:text-[20px]">
            Join to get special offers, free giveaways, and once-in-a-lifetime
            deals.
          </p>
          <input
            type="email"
            placeholder="your-email@example.com"
            className="border-b-1 w-[91%] py-2 outline-hidden"
          />
        </div>
      </footer>

      <div className="bg-black text-white py-7 px-15 text-[15px] max-sm:w-200 max-md:w-196 max-lg:w-256 max-xl:w-320">
        <p className="max-sm:text-center max-md:text-center max-lg:text-center">
          © HOUSE OF BLACK MAMBA 2025 TERMS OF SERVICE PRIVACY POLICY
        </p>
      </div>
    </div>
  );
}
