import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useCalculateTotal from "@/hooks/useCalculateTotal";

const OrderTotal = () => {
	const totalPriceButton = useRef<HTMLButtonElement | null>(null);
	const totalPrice = useCalculateTotal();

	useEffect(() => {
		const button = totalPriceButton.current;
		if (button) {
			button.style.animation = "none";
			void button.offsetHeight;
			button.style.animation = "pulse 0.5s ease";
		}
	}, [totalPrice]);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95, y: 10 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.9, y: 0 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			// className=" bottom-0 left-[45px] right-[45px]"
			className="mt-20"
		>
			<div className=" flex flex-row justify-between items-center mt-5">
				<h2 className="text-[22px] text-black font-bold">Total:</h2>
				<button ref={totalPriceButton} className="text-[24px] text-[#01C550] font-bold duration-300">
					${totalPrice}
				</button>
			</div>
		</motion.div>
	);
};

export default OrderTotal;
