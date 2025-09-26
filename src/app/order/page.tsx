"use client";
import CheckoutProductCard from "@/components/ui/CheckoutProductCard/CheckoutProductCard";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";

const Page = () => {
	const { products } = useCart();
	if (!products.length)
		return (
			<div className="flex flex-col justify-center items-center min-h-dvh">
				<h1 className="font-bold text-3xl text-gray-700">Your cart is empty 🛒</h1>
				<Link
					href="/"
					className="p-3 mt-3 inline-block text-white font-bold rounded-2xl bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-100 shadow-md"
				>
					Back To Menu
				</Link>
			</div>
		);
	return (
		<main className="p-10">
			{products.map((product) => (
				<CheckoutProductCard key={product.id} product={product} />
			))}
		</main>
	);
};

export default Page;
