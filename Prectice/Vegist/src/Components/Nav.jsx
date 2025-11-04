import React from "react";

export default function Nav({dark,setDark}) {
  return (
    <>
      <div className="bg-[#232323] text-white font-[600] text-center py-2.5">
        <h1>
          <span className="text-orange-300">Free shipping </span>order from all
          item
        </h1>
      </div>
      <button onClick={()=>setDark(!dark)}>Loght/Dark</button>
      <nav style={{backgroundColor: dark ? "black" : "white"}} className="flex items-center">
        <img src="logo-1.svg" alt="" className="w-[120px] h-[60px]" />
        <div className="w-[25%] flex justify-between p-[1.5px] rounded-3xl border-1 border-gray-200">
          <input type="text" placeholder="Search our store" className="ml-3"/>
          <button className="bg-[#333333] px-2.5 py-2.5 rounded-full cursor-pointer hover:bg-orange-300 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623zM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0"/></svg>
           <div>
          <h1>ACCOUNT</h1>
          <div className="flex">
            <a href="">Register | Login </a>
          </div>
          
        </div>
        </div>
       
      </nav>
    </>
  );
}
 