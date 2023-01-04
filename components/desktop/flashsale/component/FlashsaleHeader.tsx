import React from "react";
import { WrapFlashsaleHeader } from "../styled";
import Image from "next/image";
import { Clock } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { CountDown } from "components/desktop/home/component";

const FlashsaleHeader = () => {
	const { session } = useSelector((state: RootState) => state.flashSale);
	return (
		<WrapFlashsaleHeader>
			<div>
				<div className="flashsale_header_logo">
					<Image
						src="/flashSaleLogo.png"
						alt="flash-sale-logo"
						width={150}
						height={30}
					/>
				</div>
				<div className="flashsale_header_text">
					<Clock /> &nbsp; KẾT THÚC TRONG
				</div>
				<div>
					<CountDown session={session} />
				</div>
			</div>
		</WrapFlashsaleHeader>
	);
};

export default FlashsaleHeader;
