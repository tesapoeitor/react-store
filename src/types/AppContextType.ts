import { Product } from "./Product";

export interface AppContextType {
    state: {cart: Product[]},
    addToCart: (payload: Product) => void
}