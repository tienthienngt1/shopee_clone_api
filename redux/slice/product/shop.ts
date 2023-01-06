import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

type ShopStateDataT = {
	avatar: string;
	username: string;
	is_official_shop: boolean;
	item_count: number;
	ctime: number;
	rating: number;
	response_rate: number;
	response_time: number;
	follower_count: number;
	last_active_time: number;
};

type InitialStateT = {
	data?: ShopStateDataT;
	status: "fulfilled" | "rejected" | "loading";
};

const initialState: InitialStateT = {
	data: undefined,
	status: "loading",
};

const shopState = createSlice({
	name: "shop",
	initialState,
	reducers: {
		resetShop: (state) => {
			state.data = undefined;
			state.status = "loading";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setShop.fulfilled, (state, action) => {
			const data = action.payload.data;
			if (data) {
				state.data = {
					avatar: data.account.portrait,
					username: data.account.username,
					is_official_shop: data.is_official_shop,
					item_count: data.item_count,
					last_active_time: data.last_active_time,
					ctime: data.ctime,
					follower_count: data.follower_count,
					response_rate: data.response_rate,
					response_time: data.response_time,
					rating:
						data.rating_bad + data.rating_good + data.rating_normal,
				};
				state.status = "fulfilled";
			} else {
				state.status = "rejected";
			}
		});
	},
});

export const setShop = createAsyncThunk(
	"shop/setShop",
	async (shopid: string, thunkapi) => {
		const res = await axios(
			`${hostname()}/api/v2/shop/get?is_brief=1&shopid=${shopid}`,
			{
				headers: { "af-ac-enc-dat": "null" },
				signal: thunkapi.signal,
			}
		);
		return res.data;
	}
);

export const { resetShop } = shopState.actions;
export default shopState.reducer;
