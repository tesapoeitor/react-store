import React from 'react'

import { ProductInfo } from '../components/ProductInfo'
import "../styles/ProductDetail.css"

const ProductDetail = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
                <ProductInfo/>
        </aside>
    )
}

export { ProductDetail }