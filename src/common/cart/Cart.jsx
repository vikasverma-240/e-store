import React from 'react'

const Cart = ({cartItem, addToCart}) => {
  return (
    <>
      <section className="cart-items">
        <div className="container d-flex">
            <div className="cart-details">
                {cartItem.length === 0 && <h1 className="no-items product">No items are add in Cart</h1>}
            </div>
            {cartItem.map((item)=>{
                const productQty = item.price * item.productQty
                return(
                    <div className="cart-list product d_flex">
                        <div className="img">
                            <img src="" alt="" srcset="" />
                            <h1>{item.name}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
      </section>
    </>
  )
}

export default Cart
