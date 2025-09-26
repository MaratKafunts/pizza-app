"use client";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "@/context/SearchContext";

const SearchInput = () => {
	const { setQuery, query } = useSearch();

	return (
		<div className="flex max-875:mt-5 items-center bg-[#B4BCCF69] rounded-2xl px-4 w-80 h-16">
			<SearchIcon style={{ fontSize: "28px", color: "#61656F" }} />
			<input
				className="bg-transparent outline-none text-2xl ml-2"
				placeholder="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
