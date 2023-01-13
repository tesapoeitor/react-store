import React from 'react'

import { Order } from "../components/Order"
import { OrderItem } from "../components/OrderItem"
import "../styles/Orders.css"

const Orders = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>

                <div className="my-order-content">
                    <Order/>
                    <OrderItem/>
                </div>
            </div>
        </div>
    )
}

export { Orders }