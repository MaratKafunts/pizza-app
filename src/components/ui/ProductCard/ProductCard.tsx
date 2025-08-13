import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";
import ProductCardButton, { Action } from "@/components/ui/ProductCardButton/ProductCardButton";

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
	return (
		<div
			style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
			className="relative bg-[#FFFFFF] w-full gap-[30px] h-[230px] rounded-[30px] flex flex-row justify-around items-center "
		>
			<div className="flex justify-around items-center w-full">
				<Image
					className="object-contain p-2"
					src={product.image}
					alt={product.name}
					width={190}
					height={190}
					quality={100}
				/>
				<div className="">
					<h3 className="text-[22px] font-bold text-[#000000]">{product.name}</h3>
					<p className="text-[20px] font-semibold text-[#B4BCCF]">{product.cookingTime} minutes</p>
					<p className="text-[32px] font-bold text-[#01C550]">{product.price}$</p>
				</div>
			</div>
			<ProductCardButton product={product} action={Action.Add} />
			<ProductCardButton product={product} action={Action.Remove} />
		</div>
	);
});
ProductCard.displayName = "ProductCard";

export default ProductCard;
