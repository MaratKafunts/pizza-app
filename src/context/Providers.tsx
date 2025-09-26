"use client";

import { ReactNode } from "react";
import { SearchProvider } from "@/context/SearchContext";
import { CategoryProvider } from "@/context/CategoryContext";
import { CartProvider } from "@/context/CartContext";

export function Providers({ children }: { children: ReactNode }) {
	return (
		<SearchProvider>
			<CategoryProvider>
				<CartProvider>{children}</CartProvider>
			</CategoryProvider>
		</SearchProvider>
	);
}
