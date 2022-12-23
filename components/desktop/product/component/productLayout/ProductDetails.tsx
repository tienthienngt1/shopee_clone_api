import React from "react";
import { WrapProductDetails } from "../../styled";
import Breadcrumbs from "../Breadcrumbs";

type Props = {};

const ProductDetails = (props: Props) => {
	return (
		<WrapProductDetails>
			<div>
				<div className="product_details_header">CHI TIẾT SẢN PHẨM</div>
				<div className="product_details_body">
					<div>
						<div>Danh mục</div>
						<div>afwae</div>
					</div>
					<div>
						<div>Kho hàng</div>
						<div>afwae</div>
					</div>
					<div>
						<div>Gửi từ</div>
						<div>afwae</div>
					</div>
				</div>
			</div>
			<div>
				<div className="product_details_header">MÔ TẢ SẢN PHẨM</div>
				<div className="product_details_body">
					<div>eafawef</div>
				</div>
			</div>
		</WrapProductDetails>
	);
};

export default ProductDetails;
