import { hostname } from "func";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataCat } from "../category/itemCat";

type ProductFromShopData = {
	data: DataCat[];
	status: "fulfilled" | "rejected";
};

const initialState: ProductFromShopData = { data: [], status: "fulfilled" };
const productFromShopState = createSlice({
	name: "productFromShop",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setProductFromShop.fulfilled, (state, action) => {
			const item = action.payload.data?.sections?.[0]?.data?.item;
			if (item) {
				state.data = item.map((i: any) => ({
					itemid: i.itemid,
					shopid: i.shopid,
					raw_discount: i.raw_discount,
					shopee_verified: i.shopee_verified,
					historical_sold: i.historical_sold,
					image: i.image,
					name: i.name,
					price: i.price,
					shopee_rating: i.shopee_rating,
				}));
				state.status = "fulfilled";
			} else {
				state.data = [];
				state.status = "rejected";
			}
		});
		builder.addCase(setProductFromShop.rejected, (_state, action) => {
			console.log(action.error);
		});
	},
});

export const setProductFromShop = createAsyncThunk(
	"productFromShop/setProductFromShop",
	async () => {
		const res = await axios.get(
			`${hostname()}/api/v4/recommend/recommend?bundle=product_detail_page_ftss&limit=25&section=from_same_shop&item_card=3&catid=100017&itemid=20514831586&shopid=690767043`,
			{
				headers: {
					"af-ac-enc-dat": "null",
				},
			}
		);
		return res.data;
	}
);

export default productFromShopState.reducer;
