import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";
import { toast } from "react-toastify";

export type ProductDetailData = {
	bundle_deal_info: {
		bundle_deal_id?: number;
		bundle_deal_label?: string;
	} | null;
	categories: {
		catid: number;
		display_name: string;
	}[];
	catid: number;
	cmt_count: number;
	description: string;
	discount_stock: number;
	global_sold: number;
	historical_sold: number;
	price: number;
	price_before_discount: number;
	price_min: number;
	price_max: number;
	raw_discount: number;
	shopee_verified: boolean;
	shopid: number;
	shop_vouchers: {
		discount_percentage: number;
		discount_value: number;
	}[];
	images: string[];
	item_rating: {
		rating_count: number[];
		rating_star: number;
	};
	itemid: number;
	liked_count: number;
	name: string;
	tier_variations: { name: string; options: string[] }[];
	stock: number;
	attributes: {
		name: string;
		value: string;
	}[];
};

type ProductDetailState = {
	data: ProductDetailData | null;
	error: boolean;
};

const initialState: ProductDetailState = {
	data: null,
	error: false,
};

const productDetailState = createSlice({
	name: "productDetail",
	initialState,
	reducers: {
		resetProductDetail: (state) => {
			state.data = null;
			state.error = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setProductDetail.fulfilled, (state, action) => {
			const error = action.payload.error;
			const data: ProductDetailData = action.payload.data;
			if (typeof error === "number" && !data) {
				state.error = true;
				toast.error(`Erorr tracking, code: ${action.payload.error}`, {
					position: toast.POSITION.BOTTOM_RIGHT,
				});
			}
			if (data) {
				state.error = false;
				state.data = {
					bundle_deal_info: {
						bundle_deal_id: data.bundle_deal_info?.bundle_deal_id,
						bundle_deal_label:
							data.bundle_deal_info?.bundle_deal_label,
					},
					categories: data.categories.map((c) => ({
						catid: c.catid,
						display_name: c.display_name,
					})),
					catid: data.catid,
					cmt_count: data.cmt_count,
					description: data.description,
					discount_stock: data.discount_stock,
					global_sold: data.global_sold,
					historical_sold: data.historical_sold,
					price: data.price,
					price_before_discount: data.price_before_discount,
					price_min: data.price_min,
					price_max: data.price_max,
					raw_discount: data.raw_discount,
					shopee_verified: data.shopee_verified,
					shopid: data.shopid,
					shop_vouchers: data.shop_vouchers.map((s) => ({
						discount_percentage: s.discount_percentage,
						discount_value: s.discount_value,
					})),
					images: data.images,
					item_rating: data.item_rating,
					itemid: data.itemid,
					liked_count: data.liked_count,
					name: data.name,
					tier_variations: data.tier_variations.map((t) => ({
						name: t.name,
						options: t.options,
					})),
					stock: data.stock,
					attributes: data.attributes?.map((a) => ({
						name: a.name,
						value: a.value,
					})),
				};
			}
		});
	},
});

export const setProductDetail = createAsyncThunk(
	"productDetail/setProductDetail",
	async (asPath: string) => {
		const asPathArr = asPath.split(".");
		const res = await axios(
			`${hostname()}/api/v4/item/get?itemid=${
				asPathArr[asPathArr.length - 1]
			}&shopid=${asPathArr[asPathArr.length - 2]}`,
			{ headers: { "af-ac-enc-dat": "null" } }
		);
		console.log(res.data);

		return res.data;
	}
);

export const { resetProductDetail } = productDetailState.actions;

export default productDetailState.reducer;
