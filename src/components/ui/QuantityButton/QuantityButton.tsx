import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import { Action } from "../QuantityCounter/QuantityCouter";

interface Props {
	action: Action;
	product: Product;
}

const QuantityButton: React.FC<Props> = ({ action, product }) => {
	const [, setIsPressed] = useState(false);
	const { addProductToCart, decrementProductQuantity } = useCart();

	const isAdd = action === Action.Add;
	const background = isAdd ? "bg-green-500" : "bg-red-500";
	const icon = isAdd ? (
		<>
			<span className="absolute w-5 h-[3px] bg-black rounded-lg" />
			<span className="absolute w-5 h-[3px] bg-black rotate-90 rounded-lg" />
		</>
	) : (
		<span className="absolute w-5 h-[3px] bg-black rounded-lg" />
	);

	const handleClick = () => {
		if (isAdd) {
			addProductToCart(product);
		} else {
			decrementProductQuantity(product);
		}
	};

	return (
		<div
			onClick={handleClick}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseLeave={() => setIsPressed(false)}
			className={`rounded-[10px] p-5 max-[500px]:p-4 hover:${background} flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out`}
		>
			{icon}
		</div>
	);
};

export default QuantityButton;
