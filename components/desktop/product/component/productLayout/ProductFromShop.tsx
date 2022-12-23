import React, { useEffect } from "react";
import { WrapProductFromShop } from "../../styled";
import { RootState, useThunkDispatch } from "redux/store";
import { setProductFromShop } from "redux/slice/product/productFromShop";
import { ChevronRight } from "react-bootstrap-icons";
import { Slide } from "components/desktop/common/component";
import { Navigation } from "swiper";
import Item from "components/desktop/common/component/Item";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

const ProductFromShop = () => {
	const dispatch = useThunkDispatch();
	const { data } = useSelector((state: RootState) => state.productFromShop);
	useEffect(() => {
		dispatch(setProductFromShop());
	}, [dispatch]);

	return (
		<WrapProductFromShop>
			<div>
				<div>CÁC SẢN PHẨM KHÁC CỦA SHOP</div>
				<div>
					Xem Tất Cả
					<ChevronRight />
				</div>
			</div>
			<div>
				<Slide
					id="product_from_shop"
					modules={[Navigation]}
					slidesPerGroup={5}
					slidesPerView={6}
					spaceBetween={20}
				>
					{data.map((d) => (
						<SwiperSlide key={d.image + Math.random() * 1111}>
							<Item data={d} isDisplayHover={false} />
						</SwiperSlide>
					))}
				</Slide>
			</div>
		</WrapProductFromShop>
	);
};

export default ProductFromShop;
