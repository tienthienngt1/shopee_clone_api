import React, { useEffect } from "react";
import { ShopeeMallBody, ShopeeMallHeader, WrapShopeeMall } from "../styled";
import { RootState, useThunkDispatch } from "redux/store";
import { setShopeeMall } from "redux/slice/shopeeMall";
import { ChevronRight } from "react-bootstrap-icons";
import { SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import { Slide } from "components/desktop/common/component";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

type Props = {
	id: string | undefined;
};

const ShopeeMall = ({ id }: Props) => {
	const { data } = useSelector((state: RootState) => state.shopeeMall);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		id && dispatch(setShopeeMall(id));
	}, [id, dispatch]);
	return (
		<WrapShopeeMall>
			<ShopeeMallHeader>
				<div>SHOPEE MALL</div>
				<div>
					Xem Tất Cả &nbsp;
					<ChevronRight />
				</div>
			</ShopeeMallHeader>
			<ShopeeMallBody>
				<Slide
					id="cat_home"
					allowTouchMove={false}
					modules={[Grid, Navigation]}
					grid={{
						rows: 2,
						fill: "row",
					}}
					slidesPerView={6}
					slidesPerGroup={6}
				>
					{data?.map((da) => {
						return (
							<SwiperSlide key={da.shopid}>
								<Link href={`${da.target_url}`} key={da.shopid}>
									<a
										style={{
											height: "100%",
										}}
									>
										<div>
											<Image
												src={
													process.env
														.NEXT_PUBLIC_BASE_IMAGE_URL +
													da.image
												}
												alt={da.shop_name}
												width={130}
												height={130}
											/>
										</div>
									</a>
								</Link>
							</SwiperSlide>
						);
					})}
				</Slide>
			</ShopeeMallBody>
		</WrapShopeeMall>
	);
};

export default ShopeeMall;
