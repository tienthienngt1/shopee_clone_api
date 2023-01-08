import { useState } from "react";
import {
	CategoryNavShopStyled,
	WrapCategoryNavShop,
	WrapViewMore,
} from "styled/shop/categoryNavShop.styled";
import { CaretDownFill } from "react-bootstrap-icons";
import { Container } from "components/desktop/common/component";

const ViewMore = () => {
	const [isShowCat, setShowCat] = useState<boolean>(false);

	return (
		<WrapViewMore
			onMouseEnter={() => setShowCat(true)}
			onMouseLeave={() => setShowCat(false)}
		>
			<div>
				Thêm <CaretDownFill />
			</div>
			{isShowCat && (
				<div className="show_category">
					<div>examples</div>
					<div>Tất cả sản phẩm</div>
					<div>Sản phẩm mới</div>
					<div>Máy hút bụi</div>
					<div>Robot hút bụi</div>
					<div>sản phẩm bán chạy</div>
				</div>
			)}
		</WrapViewMore>
	);
};

const CategoryNavShop = () => {
	return (
		<WrapCategoryNavShop>
			<Container>
				<CategoryNavShopStyled>
					<div className="active">Dạo</div>
					<div>Tất cả sản phẩm</div>
					<div>Sản phẩm mới</div>
					<div>Máy hút bụi</div>
					<div>Robot hút bụi</div>
					<div>sản phẩm bán chạy</div>
					<ViewMore />
				</CategoryNavShopStyled>
			</Container>
		</WrapCategoryNavShop>
	);
};

export default CategoryNavShop;
