import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

const TopCart = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // }
  const settings = {
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 1450,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 1028,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

    speed: 500
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
              <div className='box product' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
