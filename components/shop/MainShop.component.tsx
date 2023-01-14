import { Fragment, useEffect } from "react";
import { useGetShopTab } from "swrHooks/useGetShopTab";
import BannerShop from "./BannerShop.component";
import DiscountShop from "./DiscountShop.component";
import ListCategoryShop from "./ListCategoryShop.component";
import ProductByOneCategoryShop from "./ProductByOneCategory.component";
import { Loading } from "components/desktop/common/component";
import Error404 from "components/desktop/common/component/404";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const MainShop = () => {
	const { shopid } = useSelector((state: RootState) => state.shopid);
	const { data, error, isLoading } = useGetShopTab(shopid ?? 0);
	console.log("mainShop");
	return (
		<>
			{isLoading && <Loading />}
			{error && <Error404 />}
			{data &&
				data?.data?.decoration?.map((d) => (
					<Fragment key={Math.random() * 99999999}>
						{d.shop_voucher && (
							<DiscountShop
								voucher_list={d.shop_voucher.voucher_list}
							/>
						)}
						{d.single_banner && (
							<BannerShop
								url={
									d.single_banner?.banners?.[0]?.banner_image
								}
								aspectRatio={d.single_banner?.display_ratio}
							/>
						)}
						{d.hostposts_image && (
							<BannerShop
								url={d.hostposts_image.filename}
								aspectRatio={d.hostposts_image.image_ratio}
							/>
						)}
						{d.image_catogories && <ListCategoryShop />}
						{d.product_grid && (
							<ProductByOneCategoryShop
								title={d.product_grid.title}
								items={d.product_grid.items}
							/>
						)}
						{d.product_by_category && (
							<ProductByOneCategoryShop
								title={d.product_by_category.display_name}
								items={d.product_by_category.items}
							/>
						)}
						{d.top_products && (
							<ProductByOneCategoryShop
								title={d.top_products.title}
								items={d.top_products.items}
							/>
						)}
					</Fragment>
				))}
		</>
	);
};

export default MainShop;
