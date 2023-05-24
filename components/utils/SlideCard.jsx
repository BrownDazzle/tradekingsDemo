"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Image from "next/image"


const SlideCard = ({ items }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
  }
  return (
    <>
      <Slider {...settings}>
        <img src="/assets/tk-images/boom_plus.jpg" className="w-[500px] h-[300px] transition-opacity duration-500 object-cover left-0 right-0" />
        <img src="/assets/tk-images/aloha.jpg" className="w-[500px] h-[300px] transition-opacity duration-500 object-cover left-0 right-0" />
        <img src="/assets/tk-images/mediherb.jpg" className="w-[500px] h-[300px] transition-opacity duration-500 object-cover left-0 right-0" />
        <img src="/assets/tk-images/hygienix.jpg" className="w-[500px] h-[300px] transition-opacity duration-500 object-cover left-0 right-0" />
      </Slider>
    </>
  )
}

export default SlideCard
