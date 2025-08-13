import { useCart } from "@/context/CartContext";
import { useMemo } from "react";

function useCalculateTotal() {
	const { products } = useCart();

	const totalPrice = useMemo(() => {
		return products.reduce((sum, product) => {
			const quantity = product.quantity || 1;
			return sum + product.price * quantity;
		}, 0);
	}, [products]);

	return totalPrice;
}

export default useCalculateTotal;
