import CheckoutPanel from "@/components/sections/CheckoutPanel/CheckoutPanel";
import Header from "@/components/sections/Header/Header";
import Menu from "@/components/sections/Menu/Menu";
import MenuCategory from "@/components/sections/MenuCategory/MenuCategory";
// import Banner from "@/components/ui/Banner/Banner";
import React from "react";

const page = () => {
	return (
		<div className="flex justify-between">
			<div className="relative p-[35px]">
				<Header />
				{/* <Banner /> */}
				<MenuCategory />
				<Menu />
			</div>
			<CheckoutPanel />
		</div>
	);
};

export default page;
