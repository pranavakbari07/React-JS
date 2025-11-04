import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="text-[26px] tracking-wider text-center mt-10">
        WHAT THE SAY ABOUT AS
      </h1>
      <h1 className="text-[#9B9B9B] text-[14px] tracking-widest text-center">
        ___X___
      </h1>
      <div className="flex justify-center gap-8 mt-8">
        <div className="flex flex-col gap-5 py-5 items-center w-[35%]">
          <img src="Aboutimg1.jpg" alt="" style={{borderRadius:"50%"}} />
          <p className="text-center text-[#4c4c4c] text-[14px]">Fringilla iaculis ante torquent a diam a vestibulum diam nisi augue dictumst <br /> parturient a vestibulum tortor viverra inceptos adipiscing nec a <br /> ullamcorper.Ullamcorper aliquam rutrum.</p>
          <p className="text-[#4c4c4c] text-[14px]"><span className="text-black text-[15px]">John Doe </span>- Happy Customer</p>
        </div>
        <div className="flex flex-col gap-5 py-5 items-center w-[35%]">
          <img src="Aboutimg2.jpg" alt="" style={{borderRadius:"50%"}} />
          <p className="text-center text-[#4c4c4c] text-[14px]">Fringilla iaculis ante torquent a diam a vestibulum diam nisi augue dictumst <br /> parturient a vestibulum tortor viverra inceptos adipiscing nec a <br /> ullamcorper.Ullamcorper aliquam rutrum.</p>
          <p className="text-[#4c4c4c] text-[14px]"><span className="text-black text-[15px]">John Doe </span>- Happy Customer</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[100px] bg-[#f4f4f4] mt-5">
        <div >
          <h1 className="text-[24px]">OUR PARTNERS</h1>
        </div>
        <img src="Aboutlogo1.png" alt="" className="w-[200px] h-[55px] ml-8" />
        <img src="Aboutlogo2.png" alt="" className="w-[200px] h-[55px]"/>
        <img src="Aboutlogo3.png" alt="" className="w-[200px] h-[55px]"/>
        <img src="Aboutlogo4.png" alt="" className="w-[200px] h-[55px]"/>
        <img src="Aboutlogo5.png" alt="" className="w-[200px] h-[55px]"/>
      </div>
    </div>
  );
}
