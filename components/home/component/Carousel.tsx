import { useEffect, useState } from "react";
import Image from "next/image";
import { WrapCarouselStyled } from "../styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import { RootState, useThunkDispatch } from "redux/store";
import { setCarouselBanner } from "redux/slice/homeBanner";
import emptyImage from "public/emptyImage.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ApiError from "components/common/component/ApiError";
import { Loading } from "components/common/component";
import LazyLoad from "react-lazy-load";

const Carousel = () => {
	const { carouselBanner } = useSelector(
		(state: RootState) => state.homeBanner
	);
	const dispatch = useThunkDispatch();
	const [hover, setHover] = useState(false);
	useEffect(() => {
		dispatch(setCarouselBanner());
	}, [dispatch]);
	return (
		<WrapCarouselStyled status={hover}>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				{!carouselBanner ? (
					<ApiError />
				) : carouselBanner?.length > 0 ? (
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
									<Image
										src={ban?.image_url}
										alt={ban?.target_url}
										layout="fill"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<Loading />
				)}
			</div>
			<div>
				<div
					style={{
						position: "relative",
					}}
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
				</div>
				<div
					style={{
						position: "relative",
					}}
				>
					<LazyLoad>
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
					</LazyLoad>
				</div>
			</div>
		</WrapCarouselStyled>
	);
};

export default Carousel;
