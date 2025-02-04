import React from 'react'
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {
    const filterdata = list.filter((data)=>data.category ==="Free");

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-2 md:px-20'>
        <div className='md:ml-2 my-3 ml-3 md:mt-1'>
        <h1 className='text-semibold text-xl  pb-2'>Free Offered Courses</h1>
        <p className='dark:text-slate-500 text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id in a voluptates voluptatum incidunt, praesentium rerum, ex ducimus quod adipisci consequatur assumenda placeat similique? Ab maiores omnis dolore ducimus.</p>
        </div>
    
    <div>
    <Slider {...settings}>
         {filterdata.map((item)=>(
          <Cards item = {item} key={item.id}/>
         ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook