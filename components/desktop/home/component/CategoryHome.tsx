import {
	WrapCategoryHomeStyled,
	TitleCategoryHomeStyled,
	ItemCategoryHomeStyled,
	SwiperSlideHeader,
	SwiperSlideFooter,
} from "../styled";
import { SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import NextImage from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Slide } from "components/desktop/common/component";
import Link from "next/link";
import { convertIdToUrl } from "../../../../func/convertIdToUrl";

export function CategoryHome() {
	const { data } = useSelector((state: RootState) => state.categoryTree);
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
								<Link
									href={convertIdToUrl(
										da.display_name,
										da.catid
									)}
									key={da.catid}
								>
									<a
										style={{
											height: "100%",
										}}
									>
										<div>
											<SwiperSlideHeader>
												<div>
													<NextImage
														src={
															process.env
																.NEXT_PUBLIC_BASE_IMAGE_URL +
															da.image
														}
														alt={da.name}
														width={90}
														height={90}
														priority
													/>
												</div>
											</SwiperSlideHeader>
											<SwiperSlideFooter>
												{da.display_name}
											</SwiperSlideFooter>
										</div>
									</a>
								</Link>
							</SwiperSlide>
						);
					})}
				</Slide>
			</ItemCategoryHomeStyled>
		</WrapCategoryHomeStyled>
	);
}
