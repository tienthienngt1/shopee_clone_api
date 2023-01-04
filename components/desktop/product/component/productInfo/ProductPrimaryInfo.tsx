import React, { Fragment } from "react";
import { WrapProductPrimaryInfo } from "../../styled";
import Stars from "components/commons/component/Star";
import Gicungre from "components/commons/component/Gicungre";
import Image from "next/image";
import { Props } from "../Breadcrumbs";
import { convertNumberToK, convertNumberToVND } from "func";

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

const ProductPrimaryInfo = ({ data }: Props) => {
	return (
		<WrapProductPrimaryInfo>
			<div className="product_primary_info_name">
				{data?.shopee_verified && <span>Yêu Thích</span>}
				<span>{data?.name}</span>
			</div>
			<div className="product_primary_info_sub_name">
				<div>
					<span>{data?.item_rating.rating_star}</span>{" "}
					<Stars
						star={data?.item_rating.rating_star ?? 5}
						font="15px"
					/>
				</div>
				<div>
					<span>{convertNumberToK(data?.cmt_count ?? 1000)}</span>{" "}
					Đánh giá
				</div>
				<div>
					<span>
						{convertNumberToK(data?.historical_sold ?? 1000)}
					</span>{" "}
					Đã bán
				</div>
			</div>
			<div className="product_primary_info_price">
				<div>
					<span>{data?.price_before_discount}</span>
					{data?.price_min && data?.price_max ? (
						<span>
							{convertNumberToVND(data?.price_min ?? 1000)} -{" "}
							{convertNumberToVND(data?.price_max ?? 1000)}
						</span>
					) : (
						<span>{convertNumberToVND(data?.price ?? 1000)}</span>
					)}
					<span>{data?.raw_discount}% GIẢM</span>
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
			{data?.shop_vouchers?.[0] && (
				<div className="product_primary_info_voucher">
					<div>Mã Giảm Giá Của Shop</div>
					<div>
						{data.shop_vouchers?.map((s) => (
							<Fragment
								key={s.discount_value + Math.random() * 10000}
							>
								<Voucher
									title={
										s.discount_percentage
											? `Giảm ${s.discount_percentage}%`
											: `Giảm ${convertNumberToK(
													s.discount_value / 100000
											  )}`
									}
								/>
							</Fragment>
						))}
					</div>
				</div>
			)}
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