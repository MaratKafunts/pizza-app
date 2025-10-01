"use client";
import { Product } from "@/types/product";
import Image from "next/image";
// import ProductCardButton, { Action } from "../ProductCardButton/ProductCardButton";
import ProductCardDeleteButton from "../ProductCardDeleteButton/ProductCardDeleteButton";
import QuantityCounter from "../QuantityCounter/QuantityCouter";

interface CheckoutProductCardProps {
	product: Product;
}

const CheckoutProductCard: React.FC<CheckoutProductCardProps> = ({ product }) => {
	return (
		<div className="relative mt-7 boxShadow bg-[#FFFFFF] py-1.5 h-24 rounded-3xl flex flex-row justify-around items-center">
			<ProductCardDeleteButton product={product} />
			<div className="flex justify-start items-center w-full">
				<Image
					className="object-contain p-2"
					src={`${product.image}`}
					alt={product.name}
					width={90}
					height={90}
					quality={100}
				/>
				<div className="ml-2">
					<h3 className=" max-[500px]:text-[15px] text-[20px] font-bold text-[#000000]">{product.name}</h3>
					<p className=" max-[500px]:text-[11px] text-[14px] font-semibold text-[#B4BCCF]">
						{product.cookingTime} minutes
					</p>
					<p className="text-[18px] font-bold text-[#01C550]">{product.price}$</p>
				</div>
			</div>
			<QuantityCounter product={product} />
			{/* <ProductCardButton checkout={true} product={product} action={Action.Add} />
			<ProductCardButton checkout={true} product={product} action={Action.Remove} /> */}
		</div>
	);
};

export default CheckoutProductCard;
