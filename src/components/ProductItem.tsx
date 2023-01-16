import React, { useState } from 'react'

import cartImg from "@/icons/bt_add_to_cart.svg"
import "@/styles/ProductItem.css"

const ProductItem = () => {
    const [cart, setCart] = useState("")

    const handleClick = () => {
        setCart("agregado")
    }

    return (
        <div className="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
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