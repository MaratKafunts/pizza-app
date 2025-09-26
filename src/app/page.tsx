import CheckoutPanel from "@/components/sections/CheckoutPanel/CheckoutPanel";
import Header from "@/components/sections/Header/Header";
import Menu from "@/components/sections/Menu/Menu";
import MenuCategory from "@/components/sections/MenuCategory/MenuCategory";
// import Banner from "@/components/ui/Banner/Banner";
import React from "react";
import "@/styles/custom.css";

const Page = () => {
	return (
		<div className="flex flex-col-1377 h-full justify-between">
			<main className="flex-grow relative p-[35px]">
				<Header />
				<MenuCategory />
				<Menu />
			</main>
			<aside>
				<CheckoutPanel />
			</aside>
		</div>
	);
};

export default Page;
