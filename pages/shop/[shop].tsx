import type { NextPage } from "next";
import { Container, Seo } from "components/desktop/common/component";
import MainLayout from "layout/MainLayout";
import InfoShopOfficial from "components/shop/InfoShopOfficial.component";
import CategoryNavShop from "components/shop/CategoryNavShop.component";
import ProductShop from "components/shop/ProductShop.component";
import MainShop from "components/shop/MainShop.component";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Shop: NextPage = () => {
	const { shopid } = useSelector((state: RootState) => state.shopid);
	return (
		<>
			<Seo title={`Shopee || Shop`} description={``} />
			<MainLayout fixed={false}>
				<InfoShopOfficial />
				{shopid && (
					<>
						<CategoryNavShop />
						<Container>
							<MainShop />
							<ProductShop />
						</Container>
					</>
				)}
			</MainLayout>
		</>
	);
};

export default Shop;
