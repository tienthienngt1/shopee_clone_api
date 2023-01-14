import { useEffect, useState } from "react";
import {
	CategoryNavShopStyled,
	WrapCategoryNavShop,
	WrapViewMore,
} from "styled/shop";
import { CaretDownFill } from "react-bootstrap-icons";
import { Container } from "components/desktop/common/component";
import { useGetCategoryShop } from "swrHooks";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import Error404 from "components/desktop/common/component/404";
import { ShopCategoriesDataT } from "types/shop";
import { useRouter } from "next/router";
import { routerPush } from "func";

type ViewMoreT = {
	data: ShopCategoriesDataT[];
	onSelectCat: (id: number) => () => void;
};

const ViewMore = ({ data, onSelectCat }: ViewMoreT) => {
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
					{data.map((d) => (
						<div
							key={d.shop_category_id + Math.random() * 99999}
							onClick={onSelectCat(d.shop_category_id)}
						>
							{d.display_name}
						</div>
					))}
				</div>
			)}
		</WrapViewMore>
	);
};

const CategoryNavShop = () => {
	const [catShow, setCatShow] = useState<ShopCategoriesDataT[]>();
	const [catHidden, setCatHidden] = useState<ShopCategoriesDataT[]>();
	const router = useRouter();
	const { shopid } = useSelector((state: RootState) => state.shopid);
	const { data, error } = useGetCategoryShop(shopid ?? 1);

	//handle slice list category to show and the rest is hidden for when hover is show
	useEffect(() => {
		const shopCategories = data?.data?.shop_categories;
		if (shopCategories && shopCategories.length > 4) {
			const categoriesShow = shopCategories.slice(0, 4);
			const categoriesHidden = shopCategories.slice(4);
			setCatHidden(categoriesHidden);
			setCatShow(categoriesShow);
		} else {
			shopCategories && setCatShow(shopCategories);
		}
	}, [data?.data.shop_categories]);

	const handleSelectCat = (id?: number) => () => {
		const element: HTMLElement | null =
			document.getElementById("product_list");
		if (id) {
			routerPush(router, { ...router.query, categoryid: id }, false);
		} else {
			element?.scrollIntoView();
		}
	};

	//handle scroll to product list id when query change
	useEffect(() => {
		const element: HTMLElement | null =
			document.getElementById("product_list");
		router.events.on("routeChangeComplete", () => {
			element?.scrollIntoView();
		});
		return () => {
			router.events.off("routeChangeComplete", () => {});
		};
	}, [router.events]);

	return (
		<>
			{catShow && (
				<WrapCategoryNavShop>
					<Container>
						<CategoryNavShopStyled>
							<div className="active">Dạo</div>
							<div onClick={handleSelectCat()}>
								Tất cả sản phẩm
							</div>
							{catShow.map((c) => (
								<div
									onClick={handleSelectCat(
										c.shop_category_id
									)}
									key={
										c.shop_category_id +
										Math.random() * 999999
									}
								>
									{c.display_name}
								</div>
							))}
							{catHidden && (
								<ViewMore
									data={catHidden}
									onSelectCat={handleSelectCat}
								/>
							)}
						</CategoryNavShopStyled>
					</Container>
				</WrapCategoryNavShop>
			)}
		</>
	);
};

export default CategoryNavShop;
