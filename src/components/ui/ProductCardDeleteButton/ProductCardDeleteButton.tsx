import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface ProductCardDeleteButtonProps {
	product: Product;
}

const ProductCardDeleteButton: React.FC<ProductCardDeleteButtonProps> = ({ product }) => {
	const { removeProductFromCart } = useCart();
	const removeProduct = () => {
		removeProductFromCart(product.id);
	};
	return (
		<div onClick={removeProduct} className="cursor-pointer absolute top-2 right-4">
			<HighlightOffIcon />
		</div>
	);
};

export default ProductCardDeleteButton;
