import { useState } from "react";
import Image from "next/image";
import { WrapCarouselStyled } from "../styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

type Props = {
	banner: any;
};

const Carousel = ({ banner }: Props) => {
	const [hover, setHover] = useState(false);
	return (
		<WrapCarouselStyled status={hover}>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Swiper
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation
					modules={[Pagination, Navigation, Autoplay, EffectFade]}
					loop
				>
					{banner?.banners.map((ban: any) => (
						<SwiperSlide key={ban.image_hash}>
							<div
								style={{
									width: "100%",
									height: "19rem",
									position: "relative",
									overflow: "hidden",
									borderRadius: "4px",
								}}
							>
								<Image
									loading="lazy"
									src={ban.image_url}
									alt={ban.target_url}
									layout="fill"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				<div
					style={{
						position: "relative",
					}}
				>
					<Image
						src={
							banner?.banners[banner.banners.length - 1].image_url
						}
						alt={
							banner?.banners[banner.banners.length - 1]
								.target_url
						}
						layout="fill"
					/>
				</div>
				<div
					style={{
						position: "relative",
					}}
				>
					<Image
						src={
							banner?.banners[banner.banners.length - 2].image_url
						}
						alt={
							banner?.banners[banner.banners.length - 2]
								.target_url
						}
						layout="fill"
					/>
				</div>
			</div>
		</WrapCarouselStyled>
	);
};

export default Carousel;
