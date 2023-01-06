import { useEffect, useState } from "react";
import { WrapProductPrimaryInfo } from "../../styled";
import Stars from "components/commons/component/Star";
import Gicungre from "components/commons/component/Gicungre";
import Image from "next/image";
import { Props } from "../Breadcrumbs";
import { convertNumberToK, convertNumberToVND } from "func";
import { useThunkDispatch } from "redux/store";
import { setSelectedAttribute } from "redux/slice/product/productDetail";

const ProductPrimaryInfo = ({ data }: Props) => {
	const [quantity, setQuantity] = useState(1);
	const [selectedAttribute, setAttribute] = useState<
		{ name: string; option: string }[]
	>([]);
	const dispatch = useThunkDispatch();

	const changeQuantity = (id: number) => () => {
		if (id <= 0) setQuantity(1);
		//@ts-ignore
		else if (id > data?.stock) setQuantity(data.stock);
		else setQuantity(id);
	};

	const handleSelectAttribute = (name: string, option: string) => () => {
		if (selectedAttribute.length === 0) {
			setAttribute([{ name, option }]);
		} else {
			if (!selectedAttribute.some((s) => s.name === name)) {
				const selAttributeCopy = selectedAttribute.concat([
					{ name, option },
				]);
				setAttribute(selAttributeCopy);
			} else {
				const selAttributeCopy = selectedAttribute
					.map((s) => ({
						...s,
						option:
							s.option === option
								? ""
								: s.name === name
								? option
								: s.option,
					}))
					.filter((value) => value.option !== "");
				setAttribute(selAttributeCopy);
			}
		}
	};

	useEffect(() => {
		let optionModels;
		const optionSelected = selectedAttribute.map((s) => s.option);
		const optionSelectedReverse = [...optionSelected].reverse();
		data?.models.forEach((m) => {
			if (
				m.name === optionSelected.toString() ||
				m.name === optionSelectedReverse.toString()
			)
				optionModels = m;
		});
		if (optionModels) dispatch(setSelectedAttribute(optionModels));
	}, [selectedAttribute, dispatch, data?.models]);

	return (
		<WrapProductPrimaryInfo>
			<div className="product_primary_info_name">
				{data?.shopee_verified && (
					<span className="shop_verified_label">Yêu Thích</span>
				)}
				<span>{data?.name}</span>
			</div>

			<div className="product_primary_info_sub_name">
				<div>
					<span>{data?.item_rating.rating_star.toFixed(1)}</span>
					&nbsp;
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
					<span>
						{convertNumberToVND(
							data?.price_before_discount ?? 1000
						)}
					</span>
					{data?.price_min && data?.price_max ? (
						<span>
							{convertNumberToVND(data?.price_min ?? 1000)} -{" "}
							{convertNumberToVND(data?.price_max ?? 1000)}
						</span>
					) : (
						<span>{convertNumberToVND(data?.price ?? 1000)}</span>
					)}
					<span>GIẢM {data?.raw_discount}%</span>
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
							<span
								key={s.discount_value + Math.random() * 10000}
							>
								{s.discount_percentage
									? `Giảm ${s.discount_percentage}%`
									: `Giảm ${convertNumberToK(
											s.discount_value / 100000
									  )}`}
							</span>
						))}
					</div>
				</div>
			)}

			{data?.add_on_deal_info?.add_on_deal_label && (
				<div className="product_primary_info_deal">
					<div>Deal Sốc</div>
					<div>
						<span>{data.add_on_deal_info.add_on_deal_label}</span>
					</div>
				</div>
			)}

			{data?.bundle_deal_info?.bundle_deal_label && (
				<div className="product_primary_info_promotion">
					<div>Combo Khuyến Mãi</div>
					<div>
						<span>{data.bundle_deal_info?.bundle_deal_label}</span>
					</div>
				</div>
			)}

			{data?.tier_variations?.[0] &&
				data?.tier_variations.map((t) => (
					<div
						className="product_primary_info_attribute"
						key={t.name + Math.random() * 9999999}
					>
						<div>{t.name}</div>
						<div>
							{t.options.map((o) => (
								<span
									className={
										selectedAttribute.some(
											(s) => s.option === o
										)
											? "active"
											: ""
									}
									key={o + Math.random() * 9999999999}
									onClick={handleSelectAttribute(t.name, o)}
								>
									{o}
									{selectedAttribute.some(
										(s) => s.option === o
									) && <span>&#10003;</span>}
								</span>
							))}
						</div>
					</div>
				))}

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
						<div onClick={changeQuantity(quantity - 1)}>-</div>
						<div>
							<input
								type="number"
								value={quantity}
								onChange={(e) =>
									setQuantity(Number(e.target.value))
								}
							/>
						</div>
						<div onClick={changeQuantity(quantity + 1)}>+</div>
					</div>
				</div>
				<div>{data?.stock} &nbsp;sản phẩm có sẵn</div>
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
