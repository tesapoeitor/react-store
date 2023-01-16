import React, { useState } from 'react'

import cartImg from "@/icons/bt_add_to_cart.svg"
import { Product } from '../types/Product'
import "@/styles/ProductItem.css"

interface Props {
    product: Product
}

const ProductItem = ({ product }: Props) => {
    const [cart, setCart] = useState("")

    const handleClick = () => {
        setCart("agregado")
    }

    return (
        <div className="product-card">
            <img src={product.images[1]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={cartImg} alt="button add cart" />
                </figure>
                {cart}
            </div>
        </div>
    )
}

export { ProductItem }