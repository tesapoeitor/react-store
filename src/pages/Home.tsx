import React from 'react'

import { Header } from "../components/Header"
import { ProductsList } from "../containers/ProductsList"

const Home = () => {
    return (
        <>
            <Header/>
            <ProductsList/>
        </>
    )
}

export { Home }