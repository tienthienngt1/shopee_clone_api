import { useCallback, useMemo } from "react";
import { WrapFlashsaleTimeNav } from "../styled";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useRouter } from "next/router";

const getTime = (ms: number, id: string) => {
	let result = "";
	if (id === "h") result = new Date(ms * 1000).getHours().toString();
	if (id === "m") result = new Date(ms * 1000).getMinutes().toString();
	if (result.length <= 1) return `0${result}`;
	return result;
};

const FlashsaleTimeNav = () => {
	const { data } = useSelector((state: RootState) => state.allSession);
	const router = useRouter();
	const imageUrl = useMemo(() => {
		return data.filter(
			(d) => d.promotionid.toString() === router.query.promotionId
		);
	}, [data, router.query]);
	const checkPromotionid = useCallback(
		(promotionid: string) => promotionid === router.query.promotionId,
		[router.query]
	);
	const handleClickPromotion = (promotionId: number) => {
		router.push({
			pathname: router.pathname,
			query: {
				promotionId,
			},
		});
	};
	return (
		<>
			<div>
				<Image
					src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${imageUrl?.[0]?.banner}`}
					alt="flashsale-banner"
					width="1200"
					height="240"
					layout="responsive"
					objectFit="contain"
					priority
				/>
			</div>
			<WrapFlashsaleTimeNav>
				{data.length > 1 &&
					data.map((d) => (
						<div
							key={d.banner + Math.random() * 999999999}
							className={
								checkPromotionid(d.promotionid.toString())
									? "active"
									: ""
							}
							onClick={() => handleClickPromotion(d.promotionid)}
						>
							<div>
								{`${getTime(d.start_time, "h")}:${getTime(
									d.start_time,
									"m"
								)}`}
							</div>
							<div>
								{new Date().getTime() / 1000 > d.start_time
									? "Đang Diễn Ra"
									: "Sắp diễn ra"}
							</div>
						</div>
					))}
			</WrapFlashsaleTimeNav>
		</>
	);
};

export default FlashsaleTimeNav;
