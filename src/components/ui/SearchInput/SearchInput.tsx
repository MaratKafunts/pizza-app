"use client";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "@/context/SearchContext";

const SearchInput = () => {
	const { setQuery, query } = useSearch();

	return (
		<div className="relative">
			<div className="absolute left-3 top-[25%]">
				<SearchIcon style={{ fontSize: "36px", color: "#61656F" }} />
			</div>
			<input
				className="bg-[#B4BCCF69] w-[360px] h-[60px] rounded-[15px] text-2xl pl-[76px] pr-5"
				placeholder="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type="text"
			/>
		</div>
	);
};

export default SearchInput;
