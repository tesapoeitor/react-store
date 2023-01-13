import React from 'react'

import { ProductItem } from '../components/ProductItem'
import "../styles/ProductsList.css"

const ProductsList = () => {
    return (
        <section className="main-container">
            <div className="cards-container">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </section>
    )
}

export { ProductsList }