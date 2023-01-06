import React from "react";
import { WrapProductDetails } from "../../styled";
import Breadcrumbs from "../Breadcrumbs";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

type Props = {};

const ProductDetails = (props: Props) => {
	const { data } = useSelector((state: RootState) => state.productDetail);
	console.log(data?.description);

	return (
		<WrapProductDetails>
			<div>
				<div className="product_details_header">CHI TIẾT SẢN PHẨM</div>
				<div className="product_details_body">
					<div>
						<div>Danh mục</div>
						<div>
							<Breadcrumbs data={data} displayName={false} />
						</div>
					</div>
					{data?.attributes.map((a) => (
						<div key={Math.random() * 999999999}>
							<div>{a.name}</div>
							<div>{a.value}</div>
						</div>
					))}
					<div>
						<div>Kho hàng</div>
						<div>{data?.stock}</div>
					</div>
					{data?.shop_location && (
						<div>
							<div>Gửi từ</div>
							<div>{data.shop_location}</div>
						</div>
					)}
				</div>
			</div>
			<div>
				<div className="product_details_header">MÔ TẢ SẢN PHẨM</div>
				<div className="product_details_body">
					<div>{data?.description}</div>
				</div>
			</div>
		</WrapProductDetails>
	);
};

export default ProductDetails;
