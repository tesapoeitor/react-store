import React from 'react'

import { useGetProducts } from "../hooks/useGetProducts"
import { ProductItem } from '../components/ProductItem'
import "../styles/ProductsList.css"

const API = "https://api.escuelajs.co/api/v1/products"

const ProductsList = () => {
    const products = useGetProducts(API)
    
    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product => (
                    <ProductItem product={product} key={product.id}/>
                ))}
            </div>
        </section>
    )
}

export { ProductsList }