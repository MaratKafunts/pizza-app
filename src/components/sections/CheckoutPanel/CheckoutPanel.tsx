"use client";
import React from "react";
import CreditCardBackgound from "@/components/ui/CreditCardBackground.tsx/CreditCardBackground";
import CreditCardContent from "@/components/ui/CreditCardContent/CreditCardContent";
import CheckoutProductCard from "@/components/ui/CheckoutProductCard/CheckoutProductCard";
import { useCart } from "@/context/CartContext";
import OrderTotal from "@/components/ui/OrderTotal/OrderTotal";
import OrderHeaderSection from "@/components/ui/OrderHeaderSection/OrderHeaderSection";
import { AnimatePresence } from "framer-motion";

const CheckoutPanel = () => {
	const { products } = useCart();

	// const initialValue = 0;
	// const sumWithInitial = products.reduce((accumulator, currentValue) => accumulator.p + currentValue, initialValue);

	return (
		<div
			style={{
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
			}}
			className="box-border flex flex-col justify-start p-[45px] h-[100vh] bg-[#FFFFFF]"
		>
			<div className="relative">
				<CreditCardBackgound />
				<CreditCardContent />
			</div>

			<div className="mt-[63px]">
				<OrderHeaderSection />
				<AnimatePresence>
					{products.slice(0, 2).map((product) => (
						<CheckoutProductCard key={product.id} product={product} />
					))}
				</AnimatePresence>
				<OrderTotal />
			</div>
		</div>
	);
};

export default CheckoutPanel;
