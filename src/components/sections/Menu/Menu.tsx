"use client";
import React, { useMemo } from "react";
import products from "@/data/products.json";
import { useCategory } from "@/context/CategoryContext";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

const Menu = () => {
	const { categoryContext } = useCategory();
	const filteredItems = useMemo(() => {
		return products.filter((product) => product.category === categoryContext);
	}, [categoryContext]);

	return (
		<div className="flex flex-row justify-center mt-[86px] gap-10">
			{filteredItems.map((filteredItem) => {
				return <ProductCard product={filteredItem} key={filteredItem.id} />;
			})}
		</div>
	);
};

export default Menu;
