import SearchInput from "@/components/ui/SearchInput/SearchInput";
import React from "react";

const Header = () => {
	return (
		<div className="flex justify-between items-center">
			<div>
				<p className="text-[#B4BCCF] font-medium text-2xl ">Hello</p>
				<h2 className="text-[#2F2F2F] font-bold text-3xl">Welcome Back</h2>
			</div>
			<SearchInput />
		</div>
	);
};

export default Header;
