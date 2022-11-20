import { useState } from "react";
import React from "react";
import { Data } from "redux/slice/dailyDiscover";
import { ItemFooter, ItemHeader, WrapItem, FindSameProduct } from "../styled/";
import Image from "next/image";
import LazyLoad from "react-lazy-load";

export type Props = {
	data: Data;
};

const Item = ({ data }: Props) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	return (
		<WrapItem>
			<ItemHeader>
				<div className="item_image">
					<LazyLoad>
						<Image
							src={
								process.env.NEXT_PUBLIC_BASE_IMAGE_URL +
								data.image
							}
							alt={data.name}
							layout="fill"
						/>
					</LazyLoad>
				</div>
				<div className="item_sub_image"></div>
				<div className="item_discount">{data.raw_discount}%</div>
				{data.shopee_verified && (
					<div className="item_is_official">Yêu thích</div>
				)}
			</ItemHeader>
			<ItemFooter>
				<div className="item_footer_name">{data.name}</div>
				<div className="item_footer_info">
					<div>
						{(data.price / 100000)
							.toLocaleString("en-US", {
								style: "currency",
								currency: "VND",
							})
							.replace(/[,]/g, ".")}
					</div>
					<div>
						Đã bán{" "}
						<span>
							{Intl.NumberFormat("en-US", {
								notation: "compact",
								maximumFractionDigits: 1,
							}).format(data.historical_sold)}
						</span>
					</div>
				</div>
			</ItemFooter>
			<FindSameProduct></FindSameProduct>
		</WrapItem>
	);
};

export default Item;
