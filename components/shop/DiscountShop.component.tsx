import { Slide } from "components/desktop/common/component";
import React from "react";
import { WrapDiscountShop } from "styled/shop/discountShop.styled";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DiscountShop = () => {
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
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="discount_shop">
							<div>
								<div>Giảm 100k</div>
								<div>Đơn tối thiểu 2tr</div>
								<div>
									<span>Sản phẩm nhất định</span>
								</div>
								<div>HSD: 31.01.2023</div>
							</div>
							<div>
								<button>Lưu</button>
							</div>
						</div>
					</SwiperSlide>
				</Slide>
			</div>
		</WrapDiscountShop>
	);
};

export default DiscountShop;
