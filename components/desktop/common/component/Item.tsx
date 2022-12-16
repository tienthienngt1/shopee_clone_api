import { useState, useCallback } from "react";
import React from "react";
import { ItemFooter, ItemHeader, WrapItem, FindSameProduct } from "../styled/";
import NextImage from "next/image";
import LazyLoad from "react-lazy-load";
import { DataCat } from "redux/slice/category/itemCat";
import Stars from "components/commons/component/Star";
import { convertNumberToK, convertNumberToVND } from "func";

type Props = {
	data: DataCat;
	isDisplayHover?: boolean;
};

const Item = ({ data, isDisplayHover = true }: Props) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	return (
		<WrapItem
			isDisplayHover={isDisplayHover}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<ItemHeader>
				<div className="item_image">
					<LazyLoad>
						<NextImage
							src={
								process.env.NEXT_PUBLIC_BASE_IMAGE_URL +
								data.image
							}
							alt={data.name}
							layout="fill"
							priority={true}
						/>
					</LazyLoad>
				</div>
				{/* <div className="item_sub_image"></div> */}
				<div className="item_discount">{data.raw_discount}%</div>
				{data.shopee_verified && (
					<div className="item_is_official">Yêu thích</div>
				)}
			</ItemHeader>
			<ItemFooter>
				<div className="item_footer_name">{data.name}</div>
				<div className="item_footer_info">
					{data.price_max && data.price_min ? (
						data.price_max - data?.price_min > 0 ? (
							<div>
								{" "}
								<span>
									{convertNumberToVND(data.price_min)}
								</span>
								&nbsp;-&nbsp;
								<span>
									{convertNumberToVND(data.price_max)}
								</span>
							</div>
						) : (
							<div>{convertNumberToVND(data.price)}</div>
						)
					) : (
						<>
							<div>{convertNumberToVND(data.price)}</div>
							<div>
								Đã bán{" "}
								<span>
									{convertNumberToK(data.historical_sold)}
								</span>
							</div>
						</>
					)}
				</div>
				{data?.shopee_rating && (
					<div className="item_footer_rating">
						<Stars font="0.7rem" star={data.shopee_rating} />
						<div>
							Đã bán:{" "}
							<span>
								{convertNumberToK(data.historical_sold)}
							</span>
						</div>
					</div>
				)}
				{data?.shop_location && (
					<div className="item_footer_location">
						{data.shop_location}
					</div>
				)}
			</ItemFooter>
			{isDisplayHover && isHover && (
				<FindSameProduct>Tìm Sản Phẩm Tương Tự</FindSameProduct>
			)}
		</WrapItem>
	);
};

export default Item;
