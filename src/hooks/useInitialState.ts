import { useState } from "react"

import { AppContextType } from "../types/AppContextType"
import { Product } from "../types/Product";

const initialState: AppContextType["state"] = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload: Product) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	return {
		state,
		addToCart
	}
}

export { useInitialState }