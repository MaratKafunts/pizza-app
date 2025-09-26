import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";
import QuantityCouter from "../QuantityCounter/QuantityCouter";
interface ProductCardProps {
	product: Product;
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
	return (
		<div className="relative boxShadow bg-[#FFFFFF] w-full gap-8 h-56 px-2 rounded-4xl flex flex-row justify-around items-center ">
			<div className="flex justify-around items-center w-full">
				<Image
					className="object-contain max-500:ImageSize p-2"
					src={`${base}${product.image}`}
					alt={product.name}
					width={190}
					height={190}
					quality={100}
				/>
				<div className="">
					<h3 className="max-500:text16 text-[22px] font-bold text-[#000000]">{product.name}</h3>
					<p className="max-500:text16 text-[20px] font-semibold text-[#B4BCCF]">
						{product.cookingTime} minutes
					</p>
					<p className="max-500:text25 text-[32px] font-bold text-[#01C550]">{product.price}$</p>
				</div>
			</div>
			<QuantityCouter product={product} />
		</div>
	);
});
ProductCard.displayName = "ProductCard";

export default ProductCard;
