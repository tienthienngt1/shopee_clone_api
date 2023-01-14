import { WrapListCategoryShop } from "styled/shop/listCategoryShop.styled";
import { Slide } from "components/desktop/common/component";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ListCategoryShop = () => {
	return (
		<WrapListCategoryShop>
			<div>Danh mục của shop</div>
			<div>
				<Slide
					id="listCateogryShop"
					modules={[Navigation]}
					slidesPerView={10}
					slidesPerGroup={10}
					spaceBetween={10}
					allowTouchMove={false}
				>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="list_cat_shop_item">
							<div className="list_cat_shop_item_image"></div>
							<div className="list_cat_shop_item_name">
								fawfawfae
							</div>
						</div>
					</SwiperSlide>
				</Slide>
			</div>
		</WrapListCategoryShop>
	);
};

export default ListCategoryShop;
