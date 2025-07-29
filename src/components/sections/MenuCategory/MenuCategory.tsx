"use client";
import MenuCategoryItem from "@/components/ui/MenuCategoryItem/MenuCategoryItem";
import React from "react";

export type Category = {
	name: string;
	link: string;
};

export const categories: Category[] = [
	{ name: "Pizza", link: "pizza" },
	{ name: "Burger", link: "burger" },
	{ name: "Fries", link: "fries" },
	{ name: "Pack", link: "pack" },
];

const MenuCategory = () => {
	return (
		<div className="flex flex-row items-center justify-between mt-[50px]">
			<h3 className="font-bold text-[30px]">Our Menu</h3>
			<div className="flex gap-10">
				{categories.map((category) => {
					return <MenuCategoryItem key={category.name} category={category} />;
				})}
			</div>
		</div>
	);
};

export default MenuCategory;
