import CheckoutPanel from "@/components/sections/CheckoutPanel/CheckoutPanel";
import Header from "@/components/sections/Header/Header";
import Menu from "@/components/sections/Menu/Menu";
import MenuCategory from "@/components/sections/MenuCategory/MenuCategory";
// import Banner from "@/components/ui/Banner/Banner";
import React from "react";

const page = () => {
	return (
		<div className="flex [@media(max-width:1377px)]:flex-col justify-between">
			<div className="w-full relative p-[35px]">
				<Header />
				<MenuCategory />
				<Menu />
			</div>
			<CheckoutPanel />
		</div>
	);
};

export default page;
