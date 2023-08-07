import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSrc1 from "../../images/categories/shose.webp"


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick} style={{color:'red'}}>
            <button className="next">
                <i class='bx bxs-right-arrow-alt' ></i>
            </button>
        </div>
    )
}
const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
            <i class='bx bx-left-arrow-alt' ></i>
            </button>
        </div>
    )
}
const FlashCard = ({ productItems, addToCart }) => {
    const [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(count + 1)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: NextArrow,
        prevArrow: PrevArrow,

    };
    return (
        <>

            <Slider {...settings}>
                {productItems.map((productItem, index) => {
                    return (
                        <div className="box" key={index}>
                            <div className="product mtop">
                                <div className="img">
                                    <span className="discount">{productItem.discount}% off</span>
                                    <img src={ImageSrc1} alt="flashDeals" srcSet="" width={200} height={200} />
                                    <div className="product-like">
                                        <label htmlFor="">0</label><br />
                                        <i className="bx bxs-home-heart" onClick={increment}></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{productItem.name}</h3>
                                    <div className="rate">
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star-half' ></i>
                                    </div>
                                    <div className="price">
                                        <h4>{productItem.price}.00</h4>
                                        <button onClick={()=> addToCart(productItem)}>
                                            <i className="bx bx-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </Slider>
        </>
    )
}

export default FlashCard
