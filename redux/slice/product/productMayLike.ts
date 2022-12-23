import { hostname } from "func";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataCat } from "../category/itemCat";

type ProductMayLikeData = {
	data: DataCat[];
	status: "fulfilled" | "rejected";
};

const initialState: ProductMayLikeData = {
	data: [],
	status: "fulfilled",
};

const productMayLikeState = createSlice({
	name: "productMayLike",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setProductMayLike.fulfilled, (state, action) => {
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
	},
});

export const setProductMayLike = createAsyncThunk(
	"productMayLike/setProductMayLike",
	async () => {
		const res = await axios.get(
			`${hostname()}/api/v4/recommend/recommend?bundle=product_detail_page&catid=100017&item_card=3&itemid=14322959797&limit=48&section=you_may_also_like&shopid=151223348`,
			{
				headers: {
					"af-ac-enc-dat": "null",
				},
			}
		);
		return res.data;
	}
);

export default productMayLikeState.reducer;
