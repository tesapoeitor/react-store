import { useState, useEffect } from "react"
import axios from "axios"

import { Product } from "../types/Product"

const useGetProducts = (API: string) => {
    const [products, setProducts] = useState<Product[]>([])

    const fetchData = async (API: string) => {
        const response = await axios.get<Product[]>(API)
        setProducts(response.data)
    }

    useEffect(() => {
        fetchData(API)
    }, [])

    return products
}

export { useGetProducts }