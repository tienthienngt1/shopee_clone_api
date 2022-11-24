import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { WrapSlideBanner } from "../styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

type Props<T> = {
	data: T;
};

const SlideBanner = <T extends any[]>({ data }: Props<T>) => {
	const [hover, setHover] = useState<boolean>(false);
	return (
		<WrapSlideBanner status={hover}>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				{data && data?.length > 0 && (
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
						{data.map((ban: any) => (
							<SwiperSlide key={ban?.image_hash}>
								<div
									style={{
										width: "100%",
										height: "19rem",
										position: "relative",
										overflow: "hidden",
										borderRadius: "4px",
									}}
								>
									<a
										href={ban?.target_url}
										target="_blank"
										rel="noreferrer"
									>
										<Image
											src={ban?.image_url}
											alt={ban?.target_url}
											layout="fill"
										/>
									</a>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</WrapSlideBanner>
	);
};

export default SlideBanner;
