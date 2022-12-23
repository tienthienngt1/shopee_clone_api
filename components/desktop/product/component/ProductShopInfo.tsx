import React from "react";
import {
	ProductShopInfoLeft,
	ProductShopInfoRight,
	WrapProductShopInfo,
} from "../styled";
import { ChatLeftDotsFill, Shop } from "react-bootstrap-icons";
import Image from "next/image";

const ProductShopInfo = () => {
	return (
		<WrapProductShopInfo>
			<ProductShopInfoLeft>
				<div>
					<div>
						<Image
							src="https://cf.shopee.vn/file/a451f434833c6f9787fe6f2113c4ff19_tn"
							alt="shop_name"
							width={80}
							height={80}
							priority
						/>
					</div>
					<div>Yêu thích</div>
				</div>
				<div>
					<div>5rewrewmfe</div>
					<div>Online 1 giờ trước</div>
					<div>
						<div>
							<ChatLeftDotsFill /> &nbsp; Chat Ngay
						</div>
						<div>
							<Shop /> &nbsp; Xem Shop
						</div>
					</div>
				</div>
			</ProductShopInfoLeft>
			<ProductShopInfoRight>
				<div>
					<div>
						Đánh Giá: <span>990</span>
					</div>
					<div>
						Tỷ Lệ Phản Hồi: <span>80%</span>{" "}
					</div>
					<div>
						Tham Gia: <span>15 tháng trước</span>
					</div>
				</div>
				<div>
					<div>
						Sản Phẩm: <span>20</span>
					</div>
					<div>
						Thời Gian Phản Hồi: <span>trong vài giờ</span>
					</div>
					<div>
						Người theo dõi: <span>800</span>{" "}
					</div>
				</div>
			</ProductShopInfoRight>
		</WrapProductShopInfo>
	);
};

export default ProductShopInfo;
