import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export type ProductDetailData = {
	add_on_deal_info: {
		add_on_deal_id?: number;
		add_on_deal_label?: string;
	} | null;
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
	models: {
		name: string;
		price: number;
		price_before_discount: number;
		stock: number;
		raw_discount: number;
	}[];
	shop_location: string;
};

type ProductDetailState = {
	data: ProductDetailData | null;
	status: "fulfilled" | "error" | "loading";
};

const initialState: ProductDetailState = {
	data: null,
	status: "loading",
};

const productDetailState = createSlice({
	name: "productDetail",
	initialState,
	reducers: {
		resetProductDetail: (state) => {
			state.data = null;
			state.status = "loading";
		},
		setSelectedAttribute: (state, action) => {
			//@ts-ignore
			state.data = {
				...state.data,
				price: action.payload.price,
				stock: action.payload.stock,
				raw_discount: action.payload.raw_discount,
				price_before_discount: action.payload.price_before_discount,
				price_min: 0,
				price_max: 0,
			};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setProductDetail.fulfilled, (state, action) => {
			const error = action.payload.error;
			const data: ProductDetailData = action.payload.data;
			console.log(data.description);
			if (typeof error === "number" && !data) {
				state.status = "error";
				toast.error(`Erorr tracking, code: ${action.payload.error}`, {
					position: toast.POSITION.BOTTOM_RIGHT,
				});
			}
			if (data) {
				state.status = "fulfilled";
				state.data = {
					shop_location: data.shop_location,
					models: data.models?.map((m) => ({
						name: m.name,
						stock: m.stock,
						price: m.price,
						price_before_discount: m.price_before_discount,
						raw_discount: Math.round(
							((m.price_before_discount - m.price) /
								m.price_before_discount) *
								100
						),
					})),
					add_on_deal_info: {
						add_on_deal_id: data.add_on_deal_info?.add_on_deal_id,
						add_on_deal_label:
							data.add_on_deal_info?.add_on_deal_label,
					},
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
	async (asPath: string, thunkApi) => {
		const asPathArr = asPath.split(".");
		const res = await axios(
			`${process.env.NEXT_PUBLIC_URL_GET_ITEM}item/get?itemid=${
				asPathArr[asPathArr.length - 1]
			}&shopid=${asPathArr[asPathArr.length - 2]}`,
			{
				signal: thunkApi.signal,
			}
		);
		return res.data;
	}
);

export const { resetProductDetail, setSelectedAttribute } =
	productDetailState.actions;

export default productDetailState.reducer;
