import React, { useState } from 'react'

import cartImg from "@/icons/bt_add_to_cart.svg"
import { Product } from '../types/Product'
import { AppContext } from '../context/AppContext'
import "@/styles/ProductItem.css"

interface Props {
    product: Product
}

const ProductItem = ({ product }: Props) => {
    const { addToCart } = React.useContext(AppContext)!

    const handleClick = (item: Product) => {
        addToCart(item)
    }

    return (
        <div className="product-card">
            <img src={product.images[1]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={cartImg} alt="button add cart" />
                </figure>
            </div>
        </div>
    )
}

export { ProductItem }