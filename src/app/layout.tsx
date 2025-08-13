import React, { ReactNode } from "react";
import { Roboto } from "next/font/google";
import "@/globals.css";
import { CategoryProvider } from "@/context/CategoryContext";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
	display: "swap",
});

export const metadata = {
	title: "My Pizza App",
	description: "Order delicious pizza online",
};

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<html className={roboto.variable} lang="en">
			<body className="font-sans min-h-screen md:min-h-dvh bg-[#FDFDFD]">
				<SearchProvider>
					<CategoryProvider>
						<CartProvider>{children}</CartProvider>
					</CategoryProvider>
				</SearchProvider>
			</body>
		</html>
	);
}
