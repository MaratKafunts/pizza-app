import React, { ReactNode } from "react";
import { Roboto } from "next/font/google";
import "@/globals.css";
import { Providers } from "@/context/Providers";

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
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
