"use client";
import { Product } from "@/types/product";
import products from "@/data/products.json";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SearchInputType = {
	filtered: Product[];
	setQuery: (value: string) => void;
	query: string;
};

const SearchContext = createContext<SearchInputType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
	const [query, setQuery] = useState("");

	const filtered = useMemo(() => products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())), [query]);

	return <SearchContext.Provider value={{ filtered, setQuery, query }}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
	const ctx = useContext(SearchContext);
	if (!ctx) throw new Error("useSearch must be used within SearchProvider");
	return ctx;
};
