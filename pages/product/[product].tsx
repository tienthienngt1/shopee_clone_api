import { useEffect } from "react";
import { Container, Seo } from "components/desktop/common/component";
import Breadcrumbs from "components/desktop/product/component/Breadcrumbs";
import MainLayout from "layout/MainLayout";
import React from "react";
import { RootState, useThunkDispatch } from "redux/store";
import { setProductDetail } from "redux/slice/product/productDetail";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import Error404 from "components/desktop/common/component/404";
import ProductInfo from "components/desktop/product/component/productInfo";
import ProductShopInfo from "components/desktop/product/component/ProductShopInfo";
import ProductLayout from "../../components/desktop/product/component/productLayout/index";
import ProductFromShop from "components/desktop/product/component/productLayout/ProductFromShop";

const Product: NextPage = () => {
	const router = useRouter();
	const { data, error } = useSelector(
		(state: RootState) => state.productDetail
	);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		if (!router.query.product) return;
		const asPathSplit = router.query.product.toString().split(".");
		if (asPathSplit?.[asPathSplit.length - 1] === data?.itemid.toString())
			return;
		dispatch(setProductDetail(router.asPath));
	}, [router.query.product, dispatch]);

	return (
		<>
			<Seo title="a" description="a" />
			<MainLayout>
				<Container>
					{error ? (
						<Error404 />
					) : (
						<>
							<Breadcrumbs data={data} />
							<ProductInfo data={data} />
							<ProductShopInfo />
							<ProductLayout />
						</>
					)}
				</Container>
			</MainLayout>
		</>
	);
};

export default Product;
