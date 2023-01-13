import React from 'react' 

import { OrderItem } from "../components/OrderItem"
import "../styles/CheckOut.css"

const CheckOut = () => {
    return (
        <aside className="product-detail">
            <div className="title-container">
                <img src="./icons/flechita.svg" alt="arrow" />
                <p className="title">My order</p>
            </div>

            <OrderItem />

            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>$560.00</p>
            </div>

            <button className="primary-button">
                Checkout
            </button>
        </aside>
    )
}

export { CheckOut }