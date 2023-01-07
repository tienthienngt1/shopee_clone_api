import React from "react";
import { WrapProductLayout } from "../../styled";
import ProductDetails from "./ProductDetails";
import ProductRate from "./productRate";
import ProductFromShop from "./ProductFromShop";
import ProductMayLike from "./ProductMayLike";
import LazyLoad from "react-lazy-load";

const ProductLayout = () => {
	return (
		<WrapProductLayout>
			<ProductDetails />
			<ProductRate />
			<ProductFromShop />
			<ProductMayLike />
		</WrapProductLayout>
	);
};

export default ProductLayout;
