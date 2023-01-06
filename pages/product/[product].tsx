import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import MainLayout from "layout/MainLayout";
import { RootState, useThunkDispatch } from "redux/store";
import {
	resetProductDetail,
	setProductDetail,
} from "redux/slice/product/productDetail";
import { Container, Loading, Seo } from "components/desktop/common/component";
import Breadcrumbs from "components/desktop/product/component/Breadcrumbs";
import Error404 from "components/desktop/common/component/404";
import ProductInfo from "components/desktop/product/component/productInfo";
import ProductShopInfo from "components/desktop/product/component/ProductShopInfo";
import ProductLayout from "components/desktop/product/component/productLayout/index";

const Product: NextPage = () => {
	const router = useRouter();
	const { data, status } = useSelector(
		(state: RootState) => state.productDetail
	);
	const dispatch = useThunkDispatch();

	useEffect(() => {
		if (router.query.product && status !== "fulfilled" && router.asPath) {
			console.log("dispatch");
			console.log("router: " + router.query.product);
			console.log("status: " + status);
			console.log("router.asPath: " + router.asPath);

			dispatch(setProductDetail(router.asPath));
		}
		// reset data when unmout
		return () => {
			dispatch(resetProductDetail());
		};
	}, [router.query.product, dispatch, router.asPath]);

	return (
		<>
			<Seo
				title={data?.name ?? "Shopee"}
				description={data?.name ?? "Shopee"}
			/>
			<MainLayout fixed={false}>
				<Container>
					{status === "error" ? (
						<Error404 />
					) : status === "fulfilled" ? (
						<>
							<Breadcrumbs data={data} />
							<ProductInfo data={data} />
							<ProductShopInfo />
							<ProductLayout />
						</>
					) : (
						<Loading />
					)}
				</Container>
			</MainLayout>
		</>
	);
};

export default Product;
