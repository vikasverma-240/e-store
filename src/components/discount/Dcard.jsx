import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // autoplay: true,
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
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 1450,
        settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 1028,
        settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 6,
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
        {Ddata.map((value, index) => {
          return (
            <div className='box-mobile product' key={index}>
              <div className='img'>
                <img src={value.cover} alt='' width='100%' />
              </div>
              <h4>{value.name}</h4>
              <span>{value.price}</span>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
