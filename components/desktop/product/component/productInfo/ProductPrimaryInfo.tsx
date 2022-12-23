import React from "react";
import { WrapProductPrimaryInfo } from "../../styled";
import Stars from "components/commons/component/Star";
import Gicungre from "components/commons/component/Gicungre";
import Image from "next/image";

type Props = {};
type VoucherProps = {
	title: string;
};

const Voucher = ({ title }: VoucherProps) => {
	return (
		<>
			<span>{title}</span>
		</>
	);
};

const ProductPrimaryInfo = (props: Props) => {
	return (
		<WrapProductPrimaryInfo>
			<div className="product_primary_info_name">
				<span>Yêu Thích</span>
				<span>
					Dép Nam Nữ Quai Ngang Thời Trang, Dép M L B - L A Cao Su Dập
					Nổi Hàng Đẹp
				</span>
			</div>
			<div className="product_primary_info_sub_name">
				<div>
					<span>4.7</span> <Stars star={4.7} font="15px" />
				</div>
				<div>
					<span>9.3k</span> Đánh giá
				</div>
				<div>
					<span>33.3k</span> Đã bán
				</div>
			</div>
			<div className="product_primary_info_price">
				<div>
					<span>đ120.000</span>
					<span>đ52.000 - đ100.000</span>
					<span>50% GIẢM</span>
				</div>
				<div>
					<Gicungre />
					<div>
						<span>Gì Cũng Rẻ</span>
						<br />
						<span>
							Giá tốt nhất so với các sản phẩm cùng loại trên
							Shopee
						</span>
					</div>
				</div>
			</div>
			<div className="product_primary_info_voucher">
				<div>Mã Giảm Giá Của Shop</div>
				<div>
					<Voucher title="Giảm 10k" />
				</div>
			</div>
			<div className="product_primary_info_promotion">
				<div>Combo Khuyến Mãi</div>
				<div>
					<span>Mua 1 tặng 3</span>
				</div>
			</div>
			<div className="product_primary_info_transport">
				<div>Vận Chuyển</div>
				<div>
					<Image
						src="/freeTransport.png"
						width={25}
						height={15}
						alt="free_transport"
					/>
					&nbsp; Miễn phí vận chuyển
				</div>
			</div>
			<div className="product_primary_info_quantity">
				<div>Số Lượng</div>
				<div>
					<div>
						<div>-</div>
						<div>
							<input type="number" defaultValue={1} />
						</div>
						<div>+</div>
					</div>
				</div>
			</div>
			<div className="product_primary_info_cart_button">
				<div>Thêm Vào Giỏ Hàng</div>
				<div>Mua Ngay</div>
			</div>
			<div className="shopee_clone_divider"></div>
			<div className="product_primary_info_footer">
				<div>
					<Image
						src="/safeShopee.png"
						alt="safe_shopee_img"
						width={20}
						height={20}
					/>
					&nbsp; Shopee Đảm Bảo
				</div>
				<div>3 Ngày Trả Hàng / Hoàn Tiền</div>
			</div>
		</WrapProductPrimaryInfo>
	);
};

export default ProductPrimaryInfo;
