import { useEffect } from "react";
import Image from "next/image";
import {
	WrapFlashSaleStyled,
	FlashSaleHeaderStyled,
	FlashSaleMainStyled,
	WrapSwiperSlide,
} from "../styled";
import flashSaleLogo from "public/flashSaleLogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import { useThunkDispatch, RootState } from "redux/store";
import { Data, setFlashSale } from "redux/slice/flashSale";
import { ChevronRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

type ItemType = {
	sale: Data;
};

const Item = (props: ItemType) => (
	<WrapSwiperSlide
		// flashSaleStock={props.sale.flash_sale_stock}
		// stock={props.sale.stock}
		percent={
			(Number(props.sale.flash_sale_stock) - Number(props.sale.stock)) /
			Number(props.sale.flash_sale_stock)
		}
	>
		<div className="swiper_slide_header">
			<Image
				src={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + props.sale.image}
				alt={props.sale.name}
				layout="fill"
			/>
		</div>
		<div className="swiper_slide_footer">
			<div className="swiper_slide_footer_price">đ{props.sale.price}</div>
			<div className="swiper_slide_footer_progress">
				ĐÃ BÁN {props.sale.flash_sale_stock - props.sale.stock}{" "}
			</div>
		</div>
		<div className="swiper_slide_discount">{props.sale.raw_discount}%</div>
	</WrapSwiperSlide>
);

const FlashSale = () => {
	const flashSale = useSelector((state: RootState) => state.flashSale);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		dispatch(setFlashSale());
	}, [dispatch]);
	return (
		<WrapFlashSaleStyled>
			<FlashSaleHeaderStyled>
				<div>
					<Image
						src={flashSaleLogo}
						alt="flash_sale_log"
						width={120}
						height={25}
					/>
				</div>
				<div>
					Xem Tất Cả <ChevronRight />
				</div>
			</FlashSaleHeaderStyled>
			<FlashSaleMainStyled>
				<Swiper
					modules={[Grid, Navigation]}
					slidesPerView={6}
					slidesPerGroup={6}
					spaceBetween={10}
				>
					{flashSale.data?.[0]
						? flashSale.data.map((sale: Data) => (
								<>
									<SwiperSlide>
										<Item sale={sale} />
									</SwiperSlide>
								</>
						  ))
						: "error"}
				</Swiper>
			</FlashSaleMainStyled>
		</WrapFlashSaleStyled>
	);
};

export default FlashSale;
