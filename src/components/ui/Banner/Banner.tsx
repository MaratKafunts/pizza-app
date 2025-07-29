"use client";
import { categories } from "@/components/sections/MenuCategory/MenuCategory";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const Banner = () => {
	const [activeBanner, setActiveBanner] = useState("Pizza");

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveBanner((prev) => {
				const currentIndex = categories.findIndex((categoryIndex) => categoryIndex.name === prev);
				const nextIndex = (currentIndex + 1) % categories.length;
				return categories[nextIndex].name;
			});
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative">
			{categories.map((category, index) => {
				return (
					<div
						key={index}
						className={clsx(
							"rounded-[40px]",
							"absolute",
							"w-full",
							"transition-transform duration-[1000ms] ease-in-out",
							category.name === activeBanner
								? "bg-[#2F2F2F] -translate-x-0 opacity-100"
								: "-translate-x-full opacity-5 pointer-events-none"
						)}
					>
						<h1>Get Your {category.name} Now!</h1>
					</div>
				);
			})}
		</div>
	);
};

export default Banner;
