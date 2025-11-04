import React from 'react'

export default function Blog() {
  return (
    <div>
      <div className="flex flex-col gap-3 px-15 mt-10 max-sm:w-200 max-md:w-196 max-md:px-5 max-lg:w-256 max-lg:px-5 max-xl:w-320 max-xl:px-5">
        <h2 className="text-[14px] font-bold max-sm:text-[30px] max-lg:text-[18px]">WHY THE BRAND NAME "BLACK MAMBA"?</h2>
        <p className="text-[13px] max-sm:text-[25px]"><i>The name "Black Mamba" has been chosen for the brand because of the snake's reputation as a powerful, fast and deadly predator. The black color of the snake also aligns well with the theme of the brand being black jewellery. Additionally, the black mamba snake is also known for its elegance and sleekness, which can be a great representation of the brand's jewellery design as well.</i></p>
     </div>
      <div className="w-[100%]  bg-[#eeeeee] mt-10 py-10 max-sm:w-200 max-md:w-196 max-lg:w-256 max-xl:w-320">
        <div className="flex flex-col items-center">
            <h1 className="text-[15px] font-bold max-sm:text-[30px] max-md:text-[20px] max-lg:text-[20px] max-xl:text-[20px]">OUR BLOGS</h1>
            <span className="inline-block w-10 h-1 bg-[#bebebe] rounded mt-4"></span>
        </div>
        <div className="flex justify-center gap-5 mt-10 ">
            <div className="flex flex-col gap-2 w-[46%] ">
                <img src="Blog-1.png" alt="" className="w-full"/>
                <h4 className="text-[13px] font-[400] mt-2">January 23, 2023</h4>
                <p className="text-[23px]">Tips for Caring for Your Black Mamba Brass Jewellery</p>
                <p className="text-[14px] font-[400]">Brass jewellery is a popular and stylish choice, but it does require some care and maintenance to keep it looking its best. Proper care of...</p>
                <a href=""><i>Read more</i></a>
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
                <img src="BLog-2.png" alt="" className="w-full"/>
                <h4 className="text-[13px] font-[400] mt-2">January 23, 2023</h4>
                <p className="text-[23px]">"Unleash Your Inner Edge with Black Mamba Jewellery's Men's Black Jewellery Collection</p>
                <p className="text-[14px] font-[400]">Black Mamba Jewellery offers a wide range of black colored jewellery for men that combines style and elegance. Our collection features an array of unique...</p>
                <a href=""><i>Read more</i></a>
            </div>
        </div>
     </div>
     <div className="flex flex-col items-center py-5">
            <h1 className="text-[15px] font-bold max-sm:text-[30px] max-md:text-[20px] max-lg:text-[20px] max-xl:text-[20px]">FEATURED PRODUCTS</h1>
            <span className="inline-block w-10 h-1 bg-[#bebebe] rounded mt-4"></span>
        </div>
    </div>
  )
}
