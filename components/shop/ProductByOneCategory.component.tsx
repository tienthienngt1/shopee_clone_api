import { Slide } from "components/desktop/common/component";
import Item from "components/desktop/common/component/Item";
import {
	ProductByOneCategoryShopBody,
	ProductByOneCategoryShopHeader,
	WrapProductByOneCategory,
} from "styled/shop";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { RecommendItemT } from "types/commons";

type Props = {
	title: string;
	items: RecommendItemT[];
};

const ProductByOneCategoryShop = ({ title, items }: Props) => {
	return (
		<WrapProductByOneCategory>
			<ProductByOneCategoryShopHeader>
				{title}
			</ProductByOneCategoryShopHeader>
			<ProductByOneCategoryShopBody>
				{items.slice(0, 6)?.map((i) => (
					<div key={i.itemid + Math.random() * 999999}>
						<Item data={i} isDisplayHover={false} />
					</div>
				))}
			</ProductByOneCategoryShopBody>
		</WrapProductByOneCategory>
	);
};

export default ProductByOneCategoryShop;
