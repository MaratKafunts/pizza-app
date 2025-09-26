import { Product } from "@/types/product";
import Link from "next/link";

interface props {
	products: Product[];
}

const OrderHeaderSection: React.FC<props> = ({ products }) => {
	return (
		<>
			{products.length ? (
				<div className="flex flex-row justify-between items-center max-500:flex-col">
					<h2 className="text-4xl text-black font-bold">Order Menu</h2>
					<Link href="/order" className="cursor-pointer text-[24px] text-[#FF9921] font-bold">
						See All
					</Link>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default OrderHeaderSection;
