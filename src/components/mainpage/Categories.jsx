import React from 'react';
import catImage1 from "../../images/categories/cat1.png";
import catImage2 from "../../images/categories/cat2.png";
import catImage3 from "../../images/categories/cat3.png";
import catImage4 from "../../images/categories/cat4.png";
import catImage5 from "../../images/categories/cat5.png";
import catImage6 from "../../images/categories/cat6.png";
import catImage7 from "../../images/categories/cat7.png";
import catImage8 from "../../images/categories/cat8.png";
import catImage9 from "../../images/categories/cat9.png";
import catImage10 from "../../images/categories/cat10.png";
import catImage11 from "../../images/categories/cat11.png";

const Categories = () => {

    const data = [
        {
            cateImg: catImage1,
            cateName: "Fashion",
        },
        {
            cateImg: catImage2,
            cateName: "Electronic",
        },
        {
            cateImg: catImage3,
            cateName: "Cars",
        },
        {
            cateImg: catImage4,
            cateName: "Home & Garden",
        },
        {
            cateImg: catImage5,
            cateName: "Gifts",
        },
        {
            cateImg: catImage6,
            cateName: "Music",
        },
        {
            cateImg: catImage7,
            cateName: "Health  & Beauty",
        },
        {
            cateImg: catImage8,
            cateName: "Pets",
        },
        {
            cateImg: catImage9,
            cateName: "Baby Toys",
        },
        {
            cateImg: catImage10,
            cateName: "Groceries",
        },
        {
            cateImg: catImage11,
            cateName: "Books",
        },
    ]
  return (
    <>
        <div className="category">
            {data.map((value, index)=>{
                return(
                    <div className='box f_flex' key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Categories
