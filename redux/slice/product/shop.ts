import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

const initialState = {
	data: [],
};

const ShopState = createSlice({
	name: "shop",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export const setShop = createAsyncThunk(
	"shop/setShop",
	async (shopid: string) => {
		const res = await axios(
			`${hostname()}/api/v2/shop/get?is_brief=1&shopid=${shopid}`,
			{
				headers: { "af-ac-enc-dat": "null" },
			}
		);
		return res.data;
	}
);

export default ShopState.reducer;
