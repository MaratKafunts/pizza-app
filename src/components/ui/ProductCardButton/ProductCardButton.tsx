"use client";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import { motion } from "framer-motion";
import React, { useState } from "react";

export enum Action {
	Remove = "remove",
	Add = "add",
}

interface ProductCardButtonProps {
	product: Product;
	action: Action;
	checkout?: boolean;
}

const ProductCardButton: React.FC<ProductCardButtonProps> = ({ product, action, checkout }) => {
	const [isPressed, setIsPressed] = useState(false);
	const { addProductToCart, decrementProductQuantity, products } = useCart();

	const isAdd = action === Action.Add;
	const findProduct = products.find((p) => p.id === product.id);
	const shouldRender = isAdd || (!isAdd && findProduct);

	if (!shouldRender) return null;

	const handleClick = () => {
		if (isAdd) {
			addProductToCart(product);
		} else {
			decrementProductQuantity(product);
		}
	};

	const positionClass = checkout
		? isAdd
			? "bottom-3 right-5"
			: "bottom-3 right-[95px]"
		: isAdd
		? "bottom-3 right-5"
		: "bottom-3 right-[70px]";

	const bgClass = isAdd ? "hover:bg-green-500" : "hover:bg-red-500";

	const icon = isAdd ? (
		<>
			<span className="absolute w-5 h-[3px] bg-black rounded-lg" />
			<span className="absolute w-5 h-[3px] bg-black rotate-90 rounded-lg" />
		</>
	) : (
		<span className="absolute w-5 h-[3px] bg-black rounded-lg" />
	);

	return (
		<>
			<motion.button
				onClick={handleClick}
				onMouseDown={() => setIsPressed(true)}
				onMouseUp={() => setIsPressed(false)}
				onMouseLeave={() => setIsPressed(false)}
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{
					scale: isPressed ? 1.1 : 1,
					opacity: 1,
				}}
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.2 }}
				className={`absolute ${positionClass} rounded-[10px] p-5 bg-white ${bgClass} flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out ${
					isPressed ? "scale-110" : "scale-100"
				}`}
			>
				{icon}
			</motion.button>

			{checkout && findProduct?.quantity !== undefined && (
				<div className="w-[25px] absolute right-[65px] bottom-[18px] font-bold text-[20px]">
					{findProduct.quantity < 10 ? `0${findProduct.quantity}` : findProduct.quantity}
				</div>
			)}
		</>
	);
};

export default ProductCardButton;
