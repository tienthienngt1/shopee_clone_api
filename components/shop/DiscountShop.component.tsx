import { Slide } from "components/desktop/common/component";
import React from "react";
import { WrapDiscountShop } from "styled/shop";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ShopVoucherT } from "types/shop";
import { convertNumberToK } from "../../func/convertNumberToK";

const DiscountShop = (props: ShopVoucherT) => {
	return (
		<WrapDiscountShop>
			<div>
				<label>Mã Giảm Giá Của Shop</label>
			</div>
			<div>
				<Slide
					id="discount-shop"
					modules={[Navigation]}
					slidesPerView={4}
					slidesPerGroup={4}
					spaceBetween={10}
					allowTouchMove={false}
				>
					{props?.voucher_list?.map((v) => (
						<SwiperSlide key={v.end_time + Math.random() * 9999999}>
							<div className="discount_shop">
								<div>
									<div>
										Giảm{" "}
										{v.discount_value
											? convertNumberToK(
													v.discount_value / 100000
											  )
											: v.discount_percentage + "%"}
									</div>
									<div>
										Đơn tối thiểu{" "}
										{convertNumberToK(v.min_spend / 100000)}{" "}
									</div>
									<div>
										<span>Sản phẩm nhất định</span>
									</div>
									<div>
										HSD:{" "}
										{new Date(v.end_time * 1000).getDate()}.
										{new Date(
											v.end_time * 1000
										).getMonth() + 1}
										.
										{new Date(
											v.end_time * 1000
										).getFullYear()}
									</div>
								</div>
								<div>
									<button>Lưu</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Slide>
			</div>
		</WrapDiscountShop>
	);
};

export default DiscountShop;
