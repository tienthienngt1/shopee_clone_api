import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useThunkDispatch } from "redux/store";
import {
	PopularCollectionBody,
	PopularCollectionHeader,
	WrapPopularCollection,
} from "../styled";
import Image from "next/image";
import { Grid, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { setItemCat } from "redux/slice/category/itemCat";
import { Slide } from "components/desktop/common/component";
import { setPopularCollectionCat } from "redux/slice/category/popularCollectionCat";

type Props = {
	id: string | undefined;
};

const PopularCollection = ({ id }: Props) => {
	const { data } = useSelector(
		(state: RootState) => state.popularCollectionCat
	);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		if (id) {
			dispatch(setPopularCollectionCat(id));
		}
	}, [dispatch, id]);
	return (
		<>
			{data &&
				data.length > 0 &&
				data.map((d, i) => (
					<WrapPopularCollection key={d.catid + i}>
						<PopularCollectionHeader>
							{d.title}
						</PopularCollectionHeader>
						<PopularCollectionBody>
							<Slide
								id="popular_collection"
								allowTouchMove={false}
								modules={[Grid, Navigation]}
								grid={{
									rows: 1,
									fill: "row",
								}}
								slidesPerView={5}
								slidesPerGroup={5}
							>
								{d.collection_list.map((c) => (
									<SwiperSlide key={c.image}>
										<div>
											<div>
												<Image
													src={
														process.env
															.NEXT_PUBLIC_BASE_IMAGE_URL +
														c.image
													}
													alt={c.title}
													layout="fill"
												/>
											</div>
											<div>
												<div>{c.title}</div>
												<div>
													TỪ{" "}
													<span>
														{" "}
														{(c.price / 100000)
															.toLocaleString(
																"en-US",
																{
																	style: "currency",
																	currency:
																		"VND",
																}
															)
															.replace(
																/[,]/g,
																"."
															)}{" "}
													</span>{" "}
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Slide>
						</PopularCollectionBody>
					</WrapPopularCollection>
				))}
		</>
	);
};

export default PopularCollection;
