"use client";
import React, { useMemo } from "react";
import { useCategory } from "@/context/CategoryContext";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { useSearch } from "@/context/SearchContext";

const Menu = () => {
	const { filtered } = useSearch();
	const { categoryContext } = useCategory();

	const filteredItems = useMemo(() => {
		return filtered.filter((product) => product.category === categoryContext);
	}, [categoryContext, filtered]);

	if (filteredItems.length == 0)
		return (
			<div className="flex justify-center mt-10">
				<h1 className="font-bold text-4xl">No Items Found</h1>
			</div>
		);
	return (
		<div className="w-full flex max-1377:flex-col justify-center mt-16 gap-10">
			{filteredItems.map((filteredItem) => {
				return <ProductCard product={filteredItem} key={filteredItem.id} />;
			})}
		</div>
	);
};

export default Menu;
