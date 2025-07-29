import React, { ReactNode } from "react";
import { Roboto } from "next/font/google";
import "@/globals.css";
import { CategoryProvider } from "@/context/CategoryContext";
import { CartProvider } from "@/context/CartContext";

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
			<body className="font-sans bg-[#FDFDFD]">
				<CategoryProvider>
					<CartProvider>{children}</CartProvider>
				</CategoryProvider>
			</body>
		</html>
	);
}
