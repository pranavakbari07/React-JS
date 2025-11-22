import React from 'react'

export default function Luxury() {
  return (
    <div>
      <div className="flex gap-8 px-25 mt-12 max-sm:w-200 max-sm:flex-col max-sm:flex-col-reverse max-sm:px-10 max-md:w-196 max-md:px-5 max-lg:w-256 max-lg:px-5 max-xl:w-320 max-xl:px-5">
        <div className="flex flex-col items-center justify-center gap-4 w-[60%] max-sm:w-[100%]">
                <h1 className="text-[15px] mt-8 max-sm:text-[30px] max-lg:text-[20px] max-xl:text-[20px]">LUXURY PACKAGING</h1>
                <span className="inline-block w-10 h-1 bg-[#bebebe] rounded "></span>
                <p className="text-center text-[13px] max-sm:text-[25px]">At Black Mamba Jewellery, we believe that packaging is just as important as the product itself. That's why we take great care in packaging our jewellery to ensure that it arrives to our customers in perfect condition.</p>
                <p className="text-center text-[13px] max-sm:text-[25px]">All of our jewellery comes packaged in a beautiful sleeve pouch, which not only protects the piece but also adds a touch of luxury.</p>
        </div>
        <div className="w-[60%] max-sm:w-[100%] max-md:w-[70%]">
            <img src="Primium.jpg" alt=""/>
        </div>
    </div>
    <div className="w-[100%] bg-black mt-13 py-5 max-sm:w-200 max-md:w-196 max-lg:w-256 max-xl:w-320">
        <div className="flex flex-col items-center text-white">
            <h1 className="text-[15px] mt-8 max-md:text-[25px] max-lg:text-[20px] max-xl:text-[20px]">our commitments</h1>
            <span className="inline-block w-10 h-1 bg-[#bebebe] rounded mt-3"></span>
        </div>
        <div className="flex justify-center gap-3 text-white text-center mt-5">
            <div className="flex flex-col items-center w-[29%] py-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" className="mb-3"><path fill="#a9a9a9" d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"/></svg>
                <h2>HASSLE Free exchange</h2>
                <p className="text-[13px] mt-2 text-[#a9a9a9]">Hassle free exchange within 7 days after delivery</p>
            </div>
            <div className="flex flex-col items-center w-[29%] py-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" className="mb-3"><path fill="#a9a9a9" d="M3.75 2a.75.75 0 0 0-.662.397l-2 3.75a.75.75 0 0 0 .071.815l4.934 6.316A3.3 3.3 0 0 1 6 12.5a2.5 2.5 0 0 1 1.451-2.27L6.598 7.5h.943A3 3 0 0 1 8.264 6H6.398l.625-2.5h1.954l.427 1.707a3 3 0 0 1 1.5-.18l-.38-1.527H11.8L13.133 6h-.397a2.99 2.99 0 0 1 .649 2.825l1.456-1.863a.75.75 0 0 0 .07-.815l-2-3.75A.75.75 0 0 0 12.25 2zm-.883 4L4.2 3.5h1.277L4.852 6zm.616 1.5h1.544l1.029 3.293zM12.5 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S7 13.75 7 12.5A1.5 1.5 0 0 1 8.5 11h4a1.5 1.5 0 0 1 1.5 1.5" stroke-width="0.2" stroke="#a9a9a9"/></svg>
                <h2>PREMIUM QUALITY</h2>
                <p className="text-[13px] mt-2 text-[#a9a9a9]">All are products are quality checked before shipping</p>
            </div>
            <div className="flex flex-col items-center w-[29%]  py-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 512" className="mb-3"><path fill="#a9a9a9" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z" stroke-width="13" stroke="#a9a9a9"/></svg>
                <h2>FREE SHIPPING</h2>
                <p className="text-[13px] mt-2 text-[#a9a9a9]">Free express shipping pan India.</p>
            </div> 
        </div>
     </div>
    </div>
  )
}
