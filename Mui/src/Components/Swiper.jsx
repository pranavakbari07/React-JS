import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '725px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Swiper() {
    const onChange = currentSlide => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
          <img style={contentStyle} src="carousel-1.jpg" alt="" className='w-[100%]' />
      </div>
      <div>
        <img style={contentStyle} src="carousel-2.jpg" alt="" className='w-[100%]' />
      </div>
      <div>
        <img style={contentStyle} src="carousel-3.jpg" alt="" className='w-[100%]' />
      </div>
      <div>
        <img style={contentStyle} src="carousel-4.jpg" alt="" className='w-[100%]' />
      </div>
    </Carousel>
  );
};

