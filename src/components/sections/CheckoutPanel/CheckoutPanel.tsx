"use client";
import React from "react";
import CheckoutProductCard from "@/components/ui/CheckoutProductCard/CheckoutProductCard";
import { useCart } from "@/context/CartContext";
import OrderTotal from "@/components/ui/OrderTotal/OrderTotal";
import OrderHeaderSection from "@/components/ui/OrderHeaderSection/OrderHeaderSection";
import TagFacesTwoToneIcon from "@mui/icons-material/TagFacesTwoTone";

const CheckoutPanel = () => {
	const { products } = useCart();

	return (
		<div className="relative box-border boxShadow h-full flex flex-col w-full justify-start p-[45px] bg-[#FFFFFF]">
			<div className="mx-auto max-[500px]:w-full relative flex justify-between items-center w-[400px] rounded-[25px] p-8 bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-100 shadow-md">
				<div>
					<p className="text-2xl font-semibold text-white">Welcome to</p>
					<h1 className="text-4xl font-extrabold tracking-wide text-white drop-shadow-md">FoodONTray</h1>
				</div>
				<div className="absolute top-4 right-4 text-black">
					<TagFacesTwoToneIcon />
				</div>
			</div>

			<div className="mt-[63px]">
				<OrderHeaderSection products={products} />
				{products.slice(0, 2).map((product) => (
					<CheckoutProductCard key={product.id} product={product} />
				))}

				{products.length > 0 && <OrderTotal key="order-total" />}
			</div>
		</div>
	);
};

export default CheckoutPanel;
