import { useRouter } from "next/navigation";

const OrderHeaderSection = () => {
	const router = useRouter();
	return (
		<div className="flex flex-row justify-between items-center">
			<h2 className="text-[38px] text-black font-bold">Order Menu</h2>
			<button
				onClick={() => router.push("/order")}
				className="cursor-pointer text-[24px] text-[#FF9921] font-bold"
			>
				See All
			</button>
		</div>
	);
};

export default OrderHeaderSection;
