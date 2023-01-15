import NextImage from "next/image";
import {
	WrapTopSearch,
	WrapSlide,
	TopSearchHeader,
	TopSearchMain,
	SlideHeader,
	SlideFooter,
} from "styled/home";
import { ChevronRight } from "react-bootstrap-icons";
import { Slide } from "components/desktop/common/component";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { RootState } from "redux/store";
import { Data } from "redux/slice/home/topSearch";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazy-load";

const TopSearch = () => {
	const { data } = useSelector((state: RootState) => state.topSearch);
	return (
		<WrapTopSearch>
			<TopSearchHeader>
				<div>TÌM KIẾM HÀNG ĐẦU</div>
				<div>
					Xem Tất Cả <ChevronRight />
				</div>
			</TopSearchHeader>
			<TopSearchMain>
				<Slide
					id="top_search"
					modules={[Navigation]}
					slidesPerGroup={5}
					slidesPerView={6}
					spaceBetween={20}
				>
					{data && data?.length > 0
						? data?.map((da: Data, i) => (
								<SwiperSlide key={da.count + da.name + i}>
									<WrapSlide>
										<SlideHeader>
											<LazyLoad>
												<div>
													<NextImage
														src={`${
															process.env
																.NEXT_PUBLIC_BASE_IMAGE_URL +
															da.images?.[0]
														}`}
														alt={da.name}
														layout="fill"
														priority
													/>
												</div>
											</LazyLoad>
											<div className="top_search_info">
												Bán{" "}
												<span>
													{Intl.NumberFormat(
														"en-US",
														{
															notation: "compact",
														}
													).format(da.count)}
												</span>
												+ / tháng
											</div>
											<div className="top_search_symbol"></div>
										</SlideHeader>
										<SlideFooter>{da.name}</SlideFooter>
									</WrapSlide>
								</SwiperSlide>
						  ))
						: ""}
				</Slide>
			</TopSearchMain>
		</WrapTopSearch>
	);
};

export { TopSearch };
