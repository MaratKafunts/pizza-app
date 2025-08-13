import { useRef } from "react";

interface CardContentProps {
	isCreditInputActive: boolean;
}

const CardContent: React.FC<CardContentProps> = ({ isCreditInputActive }) => {
	const cardDiv = useRef<HTMLDivElement | null>(null);

	if (!isCreditInputActive) {
		return (
			<div className="text-white p-6 top-0 absolute bg-gradient-to-br from-[#FF9921] to-[#FFCB8E] ml-[10px] flex flex-col justify-between rounded-[35px] h-full w-full">
				<h4 className="text-lg font-semibold">Universal Card</h4>
				<p className="m-auto text-2xl font-bold tracking-widest">5214 4587 9658 1452</p>
				<div className="flex justify-between text-sm">
					<span>John Smith</span>
					<span>12/24</span>
				</div>

				<div className="absolute top-4 right-12 w-[50px] h-[50px] bg-[#FFCB8E] rounded-full"></div>
				<div className="absolute top-4 right-6 w-[50px] h-[50px] bg-[#FFECD6] rounded-full"></div>
			</div>
		);
	} else {
		return (
			<div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
				<div
					style={{ animation: "0.3s" }}
					onClick={(e) => e.stopPropagation()}
					ref={cardDiv}
					className="text-white absolute top-[30%] p-6 bg-gradient-to-br from-[#FF9921] to-[#FFCB8E] flex flex-col justify-between rounded-[35px] h-[200px] w-[420px]"
				>
					<h4 className="text-lg font-semibold">Universal Card</h4>
					<p className="m-auto text-2xl font-bold tracking-widest">5214 4587 9658 1452</p>
					<div className="flex justify-between text-sm">
						<span>John Smith</span>
						<span>12/24</span>
					</div>

					<div className="absolute top-4 right-12 w-[50px] h-[50px] bg-[#FFCB8E] rounded-full"></div>
					<div className="absolute top-4 right-6 w-[50px] h-[50px] bg-[#FFECD6] rounded-full"></div>
				</div>
			</div>
		);
	}
};

export default CardContent;
