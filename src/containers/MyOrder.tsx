import React from 'react' 

import { OrderItem } from "../components/OrderItem"
import { AppContext } from '../context/AppContext'
import flechita from "@/icons/flechita.svg"
import "@/styles/MyOrder.css"
import { Product } from '../types/Product'

const MyOrder = () => {
    const { state } = React.useContext(AppContext)!

    const sumTotal = () => {
        const reducer = (total: number, product: Product) => total + product.price
        const sum = state.cart.reduce(reducer, 0)
        return sum
    }

    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={flechita} alt="arrow" />
                <p className="title">My order</p>
            </div>

            {state.cart.map(product => (
                <OrderItem 
                    product={product}
                    key={`order-item${product.id}`}
                />
            ))}

            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>

            <button className="primary-button">
                Checkout
            </button>
        </aside>
    )
}

export { MyOrder }