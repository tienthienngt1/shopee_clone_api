import type { NextPage } from "next";
import { Container, Seo } from "components/desktop/common/component";
import InfoShopOfficial from "components/shop/InfoShopOfficial.component";
import CategoryNavShop from "components/shop/CategoryNavShop.component";
import DiscountShop from "components/shop/DiscountShop.component";
import BannerShop from "components/shop/BannerShop.component";
import ProductByOneCategoryShop from "components/shop/ProductByOneCategory";
import ProductShop from "components/shop/ProductShop";
import MainLayout from "layout/MainLayout";

const Category: NextPage = () => {
	return (
		<>
			<Seo title={`Shopee || Shop`} description={``} />
			<MainLayout fixed={false}>
				<InfoShopOfficial />
				<CategoryNavShop />
				<Container>
					<DiscountShop />
					<BannerShop />
					<ProductByOneCategoryShop />
					<ProductShop />
				</Container>
			</MainLayout>
		</>
	);
};

export default Category;
