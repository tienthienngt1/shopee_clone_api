import React from "react";
import { WrapProductLayout } from "../../styled";
import ProductDetails from "./ProductDetails";
import ProductRate from "./productRate";
import ProductFromShop from "./ProductFromShop";
import ProductMayLike from "./ProductMayLike";

type Props = {};

const ProductLayout = (props: Props) => {
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
