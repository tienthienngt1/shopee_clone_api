import { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import Image from "next/image";
import { useThunkDispatch } from "redux/store";
import { useSelector } from "react-redux";
import { useRouter, NextRouter } from "next/router";

import Stars from "components/commons/component/Star";
import { WrapFlashsaleItems, WrapItem } from "../styled";
import { RootState } from "redux/store";
import {
	ItemsDataT,
	getItemsFlashsale,
	setStatusLoading,
} from "redux/slice/flashsale/items";
import { convertNumberToK } from "func/convertNumberToK";
import { convertIdToUrl, convertNumberToVND, routerPush } from "func";
import { Loading } from "components/desktop/common/component";
import InfiniteScroll from "react-infinite-scroll-component";

type ItemT = {
	item: ItemsDataT;
	router: NextRouter;
};

const Item = ({ item, router }: ItemT) => {
	const handleClickBuy = () => () => {
		routerPush(
			router,
			{ product: convertIdToUrl(item.name, item.shopid, item.itemid) },
			true,
			"product/[product]"
		);
	};

	return (
		<WrapItem
			percent={
				((item.flash_sale_stock - item.stock) / item.flash_sale_stock) *
				100
			}
		>
			<div className="item_flashsale_header">
				<LazyLoad>
					<Image
						src={
							process.env.NEXT_PUBLIC_BASE_IMAGE_URL + item.image
						}
						alt={item.name}
						layout="fill"
						objectFit="cover"
					/>
				</LazyLoad>
				<LazyLoad>
					<Image
						src={
							process.env.NEXT_PUBLIC_BASE_IMAGE_URL +
							item.promo_overlay_image
						}
						alt={item.name}
						layout="fill"
						objectFit="cover"
					/>
				</LazyLoad>
				<div className="item_flashsale_header_discount">
					{" "}
					{item.raw_discount}%{" "}
				</div>
				{item.stock === 0 && !item.hidden_price_display && (
					<div className="item_flashsale_header_soldout">
						Hết Hàng
					</div>
				)}
			</div>
			<div className="item_flashsale_footer">
				<div className="item_flashsale_footer_name">{item.name}</div>
				<div>
					{item.item_rating && (
						<div className="item_flashsale_footer_star">
							<div>
								<Stars star={item.item_rating} font="10px" />
							</div>
							{item.voucher.voucher_code && (
								<div className="item_flashsale_footer_star_voucher">
									{item.voucher.discount_percentage
										? `giảm ${item.voucher.discount_percentage} %`
										: item.voucher.discount_value !== 0 &&
										  `giảm ${convertNumberToK(
												(item.voucher.discount_value ??
													100000000) / 100000 ?? 0
										  )}`}
								</div>
							)}
						</div>
					)}
					<div className="item_flashsale_footer_before_price">
						{convertNumberToVND(item.price_before_discount)}
					</div>
					<div className="item_flashsale_footer_price">
						<div>
							<div>
								{item.price && convertNumberToVND(item.price)}
								{item.hidden_price_display &&
									item.hidden_price_display}
							</div>
							<div>
								<div>
									{item.flash_sale_stock <= 50 &&
									item.flash_sale_stock - item.stock > 0
										? `Đã bán ${
												item.flash_sale_stock -
												item.stock
										  }`
										: item.stock === 0
										? "Đã bán hết"
										: "Đang bán chạy"}
								</div>
								<div></div>
							</div>
						</div>
						<div>
							{item.stock === 0 && !item.hidden_price_display ? (
								<Image
									src="/soldout.png"
									alt="sold-out"
									width={100}
									height={47}
								/>
							) : (
								<button onClick={handleClickBuy()}>
									{new Date().getTime() >
									item.start_time * 1000
										? "Mua Ngay"
										: "Xem Chi Tiết"}
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</WrapItem>
	);
};

const FlashsaleItems = () => {
	const allItemids = useSelector(
		(state: RootState) => state.allItemids.dataFilter
	);
	const items = useSelector((state: RootState) => state.itemsFlashsale.data);
	const { offset, status } = useSelector(
		(state: RootState) => state.itemsFlashsale
	);
	const dispatch = useThunkDispatch();
	const router = useRouter();

	const handleLoadMore = () => {
		dispatch(
			getItemsFlashsale({
				itemids: allItemids
					.slice(offset, offset + 16)
					.map((a) => a.itemid),
				promotionid: Number(router.query.promotionId),
				offset: offset + 16,
				from: "load",
			})
		);
	};

	useEffect(() => {
		if (router.query.promotionId && allItemids.length > 1) {
			dispatch(setStatusLoading());
			dispatch(
				getItemsFlashsale({
					itemids: allItemids.slice(0, 16).map((a) => a.itemid),
					promotionid: Number(router.query.promotionId),
					offset: 16,
				})
			);
		}
	}, [router.query.promotionId, allItemids, dispatch]);

	return (
		<>
			{status === "fulfilled" ? (
				<InfiniteScroll
					dataLength={items.length}
					hasMore={
						allItemids.length > 16 &&
						allItemids.length !== items.length
					}
					loader={<Loading />}
					next={handleLoadMore}
					scrollThreshold={0.7}
					pullDownToRefresh
					refreshFunction={() => console.log("refresh")}
				>
					<WrapFlashsaleItems>
						{items.map((i) => (
							<Item
								item={i}
								key={i.itemid + Math.random() * 9999999}
								router={router}
							/>
						))}
					</WrapFlashsaleItems>
				</InfiniteScroll>
			) : (
				<Loading />
			)}
		</>
	);
};

export default FlashsaleItems;
