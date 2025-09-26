import useCalculateTotal from "@/hooks/useCalculateTotal";

const OrderTotal = () => {
	const totalPrice = useCalculateTotal();

	return (
		<div
			// className=" bottom-0 left-[45px] right-[45px]"
			className="mt-20"
		>
			<div className=" flex flex-row justify-between items-center mt-5">
				<h2 className="text-[22px] text-black font-bold">Total:</h2>
				<button className="text-[24px] text-[#01C550] font-bold duration-300">${totalPrice}</button>
			</div>
		</div>
	);
};

export default OrderTotal;
