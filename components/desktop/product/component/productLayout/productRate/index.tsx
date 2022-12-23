import React from "react";
import Stars from "components/commons/component/Star";
import ProductRateComment from "./ProductRateComment";
import {
	ProductRateHeader,
	ProductRateTitle,
	WrapProductRate,
} from "../../../styled";
import ProductFromShop from "../ProductFromShop";

type Props = {};

const ProductRate = (props: Props) => {
	return (
		<WrapProductRate>
			<ProductRateTitle>ĐÁNH GIÁ SẢN PHẨM</ProductRateTitle>
			<ProductRateHeader>
				<div>
					<div>
						<span>4.9</span>
						&nbsp; trên 5
					</div>
					<Stars star={4.4} font="20px" />
				</div>
				<div>
					<div className="active">Tất cả</div>
					<div>5 sao (33)</div>
					<div>4 sao (3332)</div>
					<div>3 sao (31)</div>
					<div>2 sao (454)</div>
					<div>1 sao (32)</div>
				</div>
			</ProductRateHeader>
			<ProductRateComment />
		</WrapProductRate>
	);
};

export default ProductRate;
