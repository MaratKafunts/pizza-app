"use client";
import { Product } from "@/types/product";
import Image from "next/image";
import ProductCardButton, { Action } from "../ProductCardButton/ProductCardButton";
import { motion } from "framer-motion";
import ProductCardDeleteButton from "../ProductCardDeleteButton/ProductCardDeleteButton";

interface CheckoutProductCardProps {
	product: Product;
}

const CheckoutProductCard: React.FC<CheckoutProductCardProps> = ({ product }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95, y: 10 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.9, y: 10 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
			className="relative mt-[30px] bg-[#FFFFFF] py-[5px] h-[100px] rounded-[30px] flex flex-row justify-around items-center"
		>
			<ProductCardDeleteButton product={product} />
			<div className="flex justify-start items-center w-full">
				<Image
					className="object-contain p-2"
					src={product.image}
					alt={product.name}
					width={90}
					height={90}
					quality={100}
				/>
				<div className="ml-4">
					<h3 className="text-[20px] font-bold text-[#000000]">{product.name}</h3>
					<p className="text-[14px] font-semibold text-[#B4BCCF]">{product.cookingTime} minutes</p>
					<p className="text-[18px] font-bold text-[#01C550]">{product.price}$</p>
				</div>
			</div>
			<ProductCardButton checkout={true} product={product} action={Action.Add} />
			<ProductCardButton checkout={true} product={product} action={Action.Remove} />
		</motion.div>
	);
};

export default CheckoutProductCard;
