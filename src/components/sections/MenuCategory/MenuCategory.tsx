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
		<div className="flex flex-row max-875:justify-center items-center justify-between mt-12 max-875:flex-col max-875:gap-6">
			<h3 className="font-bold text-3xl">Our Menu</h3>
			<div className="flex gap-10 max-875:justify-center max-[875px]:flex-wrap max-875:gap-4">
				{categories.map((category) => {
					return <MenuCategoryItem key={category.name} category={category} />; //link у категорий пока не используется. Можно или удалить, или использовать для router.push (например, фильтрация через query-параметры).
				})}
			</div>
		</div>
	);
};

export default MenuCategory;
