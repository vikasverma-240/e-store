import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// const SampleNextArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='next'>
//       <i className='bx bx-right-arrow-alt' ></i>
//       </button>
//     </div>
//   )
// }
// const SamplePrevArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='prev'>
//       <i className='bx bx-left-arrow-alt'></i>
//       </button>
//     </div>
//   )
// }
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 1450,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 1028,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 4,
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
        {productItems.map((productItems, index) => {
          return (
            <div className='box' key={index}>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='bx bx-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                      <i className='bx bx-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
