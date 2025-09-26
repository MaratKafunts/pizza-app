import { Category } from "@/components/sections/MenuCategory/MenuCategory";
import { useCategory } from "@/context/CategoryContext";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface MenuCategoryProp {
	category: Category;
}

const imageMap: Record<string, string> = {
	Pizza: "/images/categories/pizza.png",
	Burger: "/images/categories/burger.png",
	Fries: "/images/categories/fries.png",
	Pack: "/images/categories/pack.png",
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const MenuCategoryItem: React.FC<MenuCategoryProp> = ({ category }) => {
	const imageSrc = imageMap[category.name];
	const { setCategory, categoryContext } = useCategory();

	const isActive = category.name == categoryContext;

	return (
		<div
			onClick={() => setCategory(category.name)}
			className={clsx(
				"rounded-3xl w-32 px-3 flex items-center justify-around h-[50px]",
				"transition-colors duration-300 cursor-pointer boxShadow",
				isActive ? "bg-orange-400 text-white" : "bg-white"
			)}
		>
			<div className="flex justify-center items-center p-2 rounded-[50%] bg-[#D9D9D9] w-[40px] h-[40px]">
				<Image src={`${base}${imageSrc}`} alt={category.name} width={30} height={30} quality={100} />
			</div>
			<p className="font-bold" style={{ fontSize: "16px" }}>
				{category.name}
			</p>
		</div>
	);
};

export default MenuCategoryItem;
