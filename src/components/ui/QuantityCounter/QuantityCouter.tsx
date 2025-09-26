"use client";
import React from "react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import QuantityButton from "../QuantityButton/QuantityButton";

export enum Action {
	Remove = "remove",
	Add = "add",
}

interface Props {
	product: Product;
}

const QuantityCounter: React.FC<Props> = ({ product }) => {
	const { products } = useCart();
	const findProduct = products.find((p) => p.id === product.id);
	const quantity = findProduct?.quantity ?? 0;

	return (
		<div className="absolute bottom-3 right-3 flex items-center gap-1">
			{quantity == 0 ? (
				""
			) : (
				<>
					<QuantityButton product={product} action={Action.Remove} />
					<p className="font-bold w-8 text-center text-lg">{quantity < 10 ? `0${quantity}` : quantity}</p>
				</>
			)}
			<QuantityButton product={product} action={Action.Add} />
		</div>
	);
};

export default QuantityCounter;
