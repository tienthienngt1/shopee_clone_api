import {
	WrapCategoryHomeStyled,
	TitleCategoryHomeStyled,
	ItemCategoryHomeStyled,
	SwiperSlideHeader,
	SwiperSlideFooter,
} from "../styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import Image from "next/image";
import { useEffect } from "react";
import { useThunkDispatch } from "redux/store";
import { setCategoryTree } from "redux/slice/categoryTree";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export default function CategoryHome() {
	const {
		categoryTree: { data },
	} = useSelector((state: RootState) => state);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		dispatch(setCategoryTree());
	}, [dispatch]);
	return (
		<WrapCategoryHomeStyled>
			<TitleCategoryHomeStyled>DANH MỤC</TitleCategoryHomeStyled>
			<ItemCategoryHomeStyled>
				<Swiper
					allowTouchMove={false}
					navigation={{
						nextEl: ".swiper-button-next-custom",
						prevEl: ".swiper-button-prev-custom",
					}}
					modules={[Grid, Navigation]}
					grid={{
						rows: 2,
						fill: "row",
					}}
					slidesPerView={10}
					slidesPerGroup={10}
				>
					{data?.map((da) => {
						if (da.catid === 11082137) return;
						return (
							<>
								<SwiperSlide key={da.catid}>
									<SwiperSlideHeader>
										<div>
											<Image
												src={
													process.env
														.NEXT_PUBLIC_BASE_IMAGE_URL +
													da.image
												}
												alt={da.name}
												width={90}
												height={90}
											/>
										</div>
									</SwiperSlideHeader>
									<SwiperSlideFooter>
										{da.display_name}
									</SwiperSlideFooter>
								</SwiperSlide>
							</>
						);
					})}
				</Swiper>
				<div className="swiper-button-prev-custom">
					<ChevronLeft />
				</div>
				<div className="swiper-button-next-custom">
					<ChevronRight />
				</div>
			</ItemCategoryHomeStyled>
		</WrapCategoryHomeStyled>
	);
}
