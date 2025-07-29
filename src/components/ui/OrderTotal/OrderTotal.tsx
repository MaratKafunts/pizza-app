import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

const OrderTotal = () => {
	const [totalPrice, setTotalPrice] = useState(0);
	const { products } = useCart();

	const calculateTotalPrice = products.slice(0, 2).reduce((sum, product) => {
		const quantity = product.quantity || 1;
		return sum + product.price * quantity;
	}, 0);

	useEffect(() => {
		setTotalPrice(calculateTotalPrice);
	}, [calculateTotalPrice, products]);

	return (
		<div className="flex flex-row justify-between items-center mt-5">
			<h2 className="text-[22px] text-black font-bold">Total:</h2>
			<button className="text-[24px] text-[#01C550] font-bold">${totalPrice}</button>
		</div>
	);
};

export default OrderTotal;
