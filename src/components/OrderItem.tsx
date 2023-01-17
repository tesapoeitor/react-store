import React from 'react'

import { Product } from "../types/Product"
import "../styles/OrderItem.css"

interface Props { 
    product: Product
}

const OrderItem = ({ product }: Props) => {
    return (
        <div className="shopping-cart">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    )
}

export { OrderItem }