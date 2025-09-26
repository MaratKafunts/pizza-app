import SearchInput from "@/components/ui/SearchInput/SearchInput";
import React from "react";

const Header = () => {
	return (
		<header className="flex max-875:flex-col max-875:justify-center justify-between items-center">
			<div className="max-875:text-center">
				<p className="text-[#B4BCCF] font-medium text-2xl">Hello</p>
				<h2 className="text-[#2F2F2F] font-bold text-3xl">Welcome Back</h2>
			</div>
			<SearchInput />
		</header>
	);
};

export default Header;
