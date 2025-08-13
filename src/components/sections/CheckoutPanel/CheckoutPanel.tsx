"use client";
import React, { useState } from "react";
import CreditCardBackgound from "@/components/ui/CreditCardBackground.tsx/CreditCardBackground";
import CreditCardContent from "@/components/ui/CreditCardContent/CreditCardContent";
import CheckoutProductCard from "@/components/ui/CheckoutProductCard/CheckoutProductCard";
import { useCart } from "@/context/CartContext";
import OrderTotal from "@/components/ui/OrderTotal/OrderTotal";
import OrderHeaderSection from "@/components/ui/OrderHeaderSection/OrderHeaderSection";
import { AnimatePresence } from "framer-motion";

const CheckoutPanel = () => {
	const { products } = useCart();
	const [isCreditInputActive, setIsCreditInputActive] = useState<boolean>(false);

	return (
		<div
			style={{
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
			}}
			className="relative box-border [@media(min-width:1377px)]:min-h-[100dvh] flex flex-col justify-start p-[45px] bg-[#FFFFFF]"
		>
			<div className="flex justify-center">
				<div onClick={() => setIsCreditInputActive((prev) => !prev)} className="relative w-[405px]">
					<CreditCardBackgound />
					<CreditCardContent isCreditInputActive={isCreditInputActive} />
				</div>
			</div>

			<div className="mt-[63px]">
				<OrderHeaderSection />
				<AnimatePresence>
					{products.slice(0, 2).map((product) => (
						<CheckoutProductCard key={product.id} product={product} />
					))}

					{products.length > 0 && <OrderTotal key="order-total" />}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default CheckoutPanel;
