import { WrapCategoryHomeStyled, TitleCategoryHomeStyled, ItemCategoryHomeStyled, SwiperSlideHeader, SwiperSlideFooter } from "styled/home";
import { SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import NextImage from "next/image";
import { Slide } from "components/desktop/common/component";
import Link from "next/link";
import { convertIdToUrl } from "func/convertIdToUrl";
import { useGetCategoryTree } from "swrHooks/pages/useGetCategoryTree";

export function CategoryHome() {
	const { data } = useGetCategoryTree();
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
					{data?.data?.category_list?.map((cat) => {
						return (
							<SwiperSlide key={cat.catid}>
								<Link href={convertIdToUrl(cat.display_name, cat.catid)} key={cat.catid}>
									<a
										style={{
											height: "100%",
										}}
									>
										<div>
											<SwiperSlideHeader>
												<div>
													<NextImage src={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + cat.image} alt={cat.display_name} width={90} height={90} priority />
												</div>
											</SwiperSlideHeader>
											<SwiperSlideFooter>{cat.display_name}</SwiperSlideFooter>
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
