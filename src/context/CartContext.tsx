"use client";
import { Product } from "@/types/product";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type CartContextType = {
	addProductToCart: (product: Product) => void;
	removeProductFromCart: (product: Product) => void;
	products: Product[];
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem("cart");
		if (stored) {
			setProducts(JSON.parse(stored));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(products));
	}, [products]);

	const addProductToCart = (product: Product) => {
		setProducts((prev) => {
			const existingProduct = prev.find((p) => p.id === product.id);

			if (existingProduct) {
				return prev.map((p) => (p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p));
			} else {
				return [...prev, { ...product, quantity: 1 }];
			}
		});
	};

	const removeProductFromCart = (product: Product) => {
		setProducts((prev) => {
			const existingProduct = prev.find((p) => p.id === product.id);
			if (existingProduct) {
				if (existingProduct.quantity != 1) {
					return prev.map((p) => (p.id === product.id ? { ...p, quantity: (p.quantity || 1) - 1 } : p));
				} else {
					return products.filter((p) => p.id !== product.id);
				}
			} else {
				return prev;
			}
		});
	};

	return (
		<CartContext.Provider value={{ addProductToCart, removeProductFromCart, products }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) throw new Error("useCategory must be used within a CategoryProvider");
	return context;
};
