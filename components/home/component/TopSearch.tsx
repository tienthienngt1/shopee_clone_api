import Image from "next/image";
import {
	WrapTopSearch,
	WrapSlide,
	TopSearchHeader,
	TopSearchMain,
	SlideHeader,
	SlideFooter,
} from "../styled";
import { ChevronRight } from "react-bootstrap-icons";
import { Slide } from "components/common/component";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { RootState, useThunkDispatch } from "redux/store";
import { Data, setTopSearch } from "redux/slice/topSearch";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazy-load";

const TopSearch = () => {
	const dispatch = useThunkDispatch();
	const { data } = useSelector((state: RootState) => state.topSearch);
	useEffect(() => {
		dispatch(setTopSearch());
	}, [dispatch]);
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
						? data?.map((da: Data) => (
								<SwiperSlide key={da.count + da.name}>
									<WrapSlide>
										<SlideHeader>
											<div>
												<LazyLoad>
													<Image
														src={`${
															process.env
																.NEXT_PUBLIC_BASE_IMAGE_URL +
															da.images?.[0]
														}`}
														alt={da.name}
														layout="fill"
													/>
												</LazyLoad>
											</div>
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
