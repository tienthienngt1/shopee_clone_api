import { useState } from "react";
import Image from "next/image";
import { WrapCarouselStyled } from "../styled";
import SlideBanner from "components/desktop/common/component/SlideBanner";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import emptyImage from "public/emptyImage.png";
import type { CarouselBanner } from "redux/slice/homeBanner";

const Carousel = () => {
	const { carouselBanner } = useSelector(
		(state: RootState) => state.homeBanner
	);
	const [hover, setHover] = useState(false);
	return (
		<WrapCarouselStyled status={hover}>
			<SlideBanner data={carouselBanner as any[]} />
			{/* <div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				{carouselBanner && carouselBanner?.length > 0 && (
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
						{carouselBanner.map((ban: any) => (
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
			</div> */}
			<div>
				<div
					style={{
						position: "relative",
						cursor: "pointer",
					}}
				>
					<a
						href={
							carouselBanner &&
							carouselBanner[carouselBanner?.length - 1]
								?.target_url
						}
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src={
								carouselBanner && carouselBanner?.length > 0
									? carouselBanner[carouselBanner?.length - 1]
											?.image_url
									: emptyImage
							}
							alt={
								carouselBanner &&
								carouselBanner[carouselBanner?.length - 1]
									?.target_url
							}
							layout="fill"
						/>
					</a>
				</div>
				<div
					style={{
						position: "relative",
						cursor: "pointer",
					}}
				>
					<a
						href={
							carouselBanner &&
							carouselBanner[carouselBanner?.length - 2]
								?.target_url
						}
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src={
								carouselBanner && carouselBanner?.length > 0
									? carouselBanner[carouselBanner?.length - 2]
											?.image_url
									: emptyImage
							}
							alt={
								carouselBanner &&
								carouselBanner[carouselBanner?.length - 2]
									?.target_url
							}
							layout="fill"
						/>
					</a>
				</div>
			</div>
		</WrapCarouselStyled>
	);
};

export default Carousel;
