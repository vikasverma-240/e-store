import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({productItems}) => {
    return (
        <>
            <section className="flash background">
                <div className="container">
                    <div className="heading f_flex">
                        <i className="bx bxs-zap"></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard productItems={productItems}/>
                </div>
            </section>

        </>
    )
}

export default FlashDeals
