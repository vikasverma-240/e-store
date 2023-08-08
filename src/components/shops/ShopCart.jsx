// import React, { useState } from "react"

// const ShopCart = ({ shopItems, addToCart }) => {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount(count + 1)
//   }

//   return (
//     <>
//       {shopItems.map((item, index) => {
//         return (
//           <div className='box' key={index}>
//             <div className='product mtop'>
//               <div className='img'>
//                 <span className='discount'>{item.discount}% Off</span>
//                 <img src={item.cover} alt='' />
//                 <div className='product-like'>
//                   <label>{count}</label> <br />
//                   <i className='fa-regular fa-heart' onClick={increment}></i>
//                 </div>
//               </div>
//               <div className='product-details'>
//                 <h3>{item.name}</h3>
//                 <div className='rate'>
//                   <i className='bx bx-star'></i>
//                   <i className='bx bx-star'></i>
//                   <i className='bx bx-star'></i>
//                   <i className='bx bx-star'></i>
//                   <i className='bx bx-star'></i>
//                 </div>
//                 <div className='price'>
//                   <h4>${item.price}.00 </h4>
//                   {/* step : 3  
//                      if hami le button ma click garryo bahne 
//                     */}
//                   <button onClick={() => addToCart(item)}>
//                     <i className='bx bx-plus'></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default ShopCart

import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  // Check if shopItems is defined and an array before using map
  if (!Array.isArray(shopItems)) {
    return <p>No items to display</p>;
  }

  return (
    <>
      {shopItems.map((item, index) => {
        return (
          <div className='box' key={index}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{item.discount}% Off</span>
                <img src={item.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='bx bx-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{item.name}</h3>
                <div className='rate'>
                  <i className='bx bx-star'></i>
                  <i className='bx bx-star'></i>
                  <i className='bx bx-star'></i>
                  <i className='bx bx-star'></i>
                  <i className='bx bx-star'></i>
                </div>
                <div className='price'>
                  <h4>${item.price}.00 </h4>
                  <button onClick={() => addToCart(item)}>
                    <i className='bx bx-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;

