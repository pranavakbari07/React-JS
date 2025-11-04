import React from 'react'

export default function News() {
  let arr = [
    {
      "image": "img1.jpg",
      "date": "18",
      "month": "SEP",
      "button": "Hobbies",
      "title": "Dapibus a at gravida",
      "by": "By",
      "api": "Shopify API",
      "comment": "/ Leave a comment",
      "description": "Ut cubilia metus sagittis rhoncus non suspendisse vestibulum a taciti posuere urna scelerisque neque scelerisque condimentum sed hac sem"
    },
    {
      "image": "img2.jpg",
      "date": "18",
      "month": "SEP",
      "button": "Hobbies",
      "title": "Dapibus a at gravida",
      "by": "By",
      "api": "Shopify API",
      "comment": "/ Leave a comment",
      "description": "In suspendisse at condimentum vitae torquent eu nam a adipiscing convallis quis elit quis mi suscipit adipiscing risus nisi quis leo elementum justo"
    },
    {
      "image": "img3.jpg",
      "date": "18",
      "month": "SEP",
      "button": "Hobbies",
      "title": "Hac fames tempor",
      "by": "By",
      "api": "Shopify API",
      "comment": "/ Leave a comment",
      "description": "Egestas mus a mus rhoncus adipiscing iaculis facilisis a eu nunc varius a per parturient vestibulum suspendisse aenean semper velit aliquam"
    },
    {
      "image": "img4.jpg",
      "date": "18",
      "month": "SEP",
      "button": "Hobbies",
      "title": "Venenatis veulum peus",
      "by": "By",
      "api": "Shopify API",
      "comment": "/ Leave a comment",
      "description": "Sociosqu scelerisque aliquet penatibus pretium vestibulum imperdiet ad metus a tempus congue a venenatis condimentum parturient dis"
    },
    {
      "image": "img5.jpg",
      "date": "18",
      "month": "SEP",
      "button": "Hobbies",
      "title": "Condentum integer ridiculus",
      "by": "By",
      "api": "Shopify API",
      "comment": "/ Leave a comment",
      "description": "A sodales suspendisse vestibulum dui ultrices fermentum a parturient scelerisque potenti placerat blandit purus adipiscing eros habitasse sodales"
    },
    {
      "image": "img6.jpg",
      "date": "18",
      "month": "SEP",
      "button": "Hobbies",
      "title": "Urna ligula inceptos",
      "by": "By",
      "api": "Shopify API",
      "comment": "/ Leave a comment",
      "description": "Vestibulum malesuada elit sit placerat congue viverra congue orci cras mus sociis non mi enim cum ante. Condimentum ac ac ullamcorper arcu."
    },
  ]
  return (
    <div className='w-290 m-auto flex flex-wrap justify-between text-center relative'>
      {
        arr.map((e, i) => {
          return <div className='mt-5 relative' key={i}>
            <div className='bg-white w-[53px] py-0.5 absolute top-3 left-3'>
              <h1 className='text-[24px]'>{e.date}</h1>
              <h1 className='text-[12px]'>{e.month}</h1>
            </div>
            <img src={e.image} alt="" className='w-[360px] h-[225px]' />
            <button className='bg-[#1DAAA3] text-white text-[12px] w-[70px] py-1 absolute top-50 left-37'>{e.button}</button>
            <div className='flex flex-col items-center p-3 text-center w-[360px]'>
              <h1 className='text-[22px]'>{e.title}</h1>
              <div className='flex gap-1 text-[#787878] text-[14px] my-2'>
                <h1>{e.by}</h1>
                <h1 className='text-[#1DAAA3] italic'>{e.api}</h1>
                <h1 className='ml-1 hover:underline cursor-pointer'>{e.comment}</h1>
              </div>
              <p className='text-[#4C4C4C] text-[14px] pb-5'>{e.description}</p>
            </div>
          </div>
        })
      }
      <button className='border-2 text-[12px] font-bold py-[10px] px-[20px] absolute top-212 left-125'>LOAD MORE POSTS</button>
    </div>
  )
}
