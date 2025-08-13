"use client";
import CheckoutProductCard from "@/components/ui/CheckoutProductCard/CheckoutProductCard";
import { useCart } from "@/context/CartContext";
import { AnimatePresence } from "framer-motion";
import React from "react";

const page = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { products } = useCart();
	return (
		<div className="p-10">
			<AnimatePresence>
				{products.map((product) => (
					<CheckoutProductCard key={product.id} product={product} />
				))}
			</AnimatePresence>
		</div>
	);
};

export default page;
