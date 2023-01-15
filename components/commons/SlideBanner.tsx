import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import NextImage from "next/image";
import { WrapSlideBanner } from "styled/commons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { BatchListBySpacesT } from "types/commons";

type Props = {
	data?: BatchListBySpacesT;
};

const SlideBanner = ({ data }: Props) => {
	const [hover, setHover] = useState<boolean>(false);
	return (
		<WrapSlideBanner status={hover}>
			<div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				{data && data?.data?.space_banners?.length > 0 && (
					<Swiper
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation
						modules={[Pagination, Navigation, Autoplay]}
						loop
					>
						{data?.data?.space_banners?.[0]?.banners.map((ban: any) => (
							<SwiperSlide key={ban?.image_hash + Math.random() * 99999}>
								<a href={ban?.target_url} target="_blank" rel="noreferrer">
									<div
										style={{
											width: "100%",
											height: "25rem",
											overflow: "hidden",
											borderRadius: "4px",
											position: "relative",
										}}
									>
										<NextImage src={ban?.image_url} alt={ban?.target_url} layout="fill" priority />
									</div>
								</a>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</WrapSlideBanner>
	);
};

export default SlideBanner;
