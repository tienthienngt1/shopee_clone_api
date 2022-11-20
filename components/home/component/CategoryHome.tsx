import {
	WrapCategoryHomeStyled,
	TitleCategoryHomeStyled,
	ItemCategoryHomeStyled,
	SwiperSlideHeader,
	SwiperSlideFooter,
} from "../styled";
import { SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import Image from "next/image";
import { useEffect } from "react";
import { useThunkDispatch } from "redux/store";
import { setCategoryTree } from "redux/slice/categoryTree";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Slide } from "components/common/component";

export function CategoryHome() {
	const {
		categoryTree: { data },
	} = useSelector((state: RootState) => state);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		dispatch(setCategoryTree());
	}, [dispatch]);
	return (
		<WrapCategoryHomeStyled>
			<TitleCategoryHomeStyled>
				<p>DANH MỤC</p>
			</TitleCategoryHomeStyled>
			<ItemCategoryHomeStyled>
				<Slide
					id="cat_home"
					allowTouchMove={false}
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
						);
					})}
				</Slide>
			</ItemCategoryHomeStyled>
		</WrapCategoryHomeStyled>
	);
}
