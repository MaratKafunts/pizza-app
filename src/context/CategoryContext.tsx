"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CategoryContextType = {
	categoryContext: string;
	setCategory: (cat: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
	const [categoryContext, setCategory] = useState("Pizza");

	return <CategoryContext.Provider value={{ categoryContext, setCategory }}>{children}</CategoryContext.Provider>;
};

export const useCategory = () => {
	const context = useContext(CategoryContext);
	if (!context) throw new Error("useCategory must be used within a CategoryProvider");
	return context;
};
