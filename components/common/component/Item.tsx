import React from "react";
import { ItemFooter, ItemHeader, WrapItem } from "../styled/itemStyled";

type Props = {};

const Item = (props: Props) => {
	return (
		<WrapItem>
			<ItemHeader>
				<div className="item_image"></div>
				<div className="item_sub_image"></div>
				<div className="item_discount">30%</div>
				<div className="item_is_official">Yêu thích</div>
			</ItemHeader>
			<ItemFooter>
				<div className="item_footer_name">
					[SIÊU HÓT] Áo Hoodie Nỉ Form Rộng Tay Phồng - Áo Nỉ Túi Bụng
					(Ảnh Thật)
				</div>
				<div className="item_footer_info">
					<div>đ 15.000</div>
					<div>Đã bán 5.4k</div>
				</div>
			</ItemFooter>
		</WrapItem>
	);
};

export default Item;
