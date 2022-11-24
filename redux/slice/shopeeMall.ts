import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Data = {
	image: string;
	shopid: number;
	shop_name: string;
	target_url: string;
};

type ShopeeMallState = {
	data: Data[];
};

const initialState: ShopeeMallState = { data: [] };

const shopeeMallState = createSlice({
	name: "shopeeMall",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setShopeeMall.fulfilled, (state, action) => {
			if (action.payload.data?.official_shops)
				state.data = action.payload.data?.official_shops.map(
					(s: any) => ({
						image: s.logo,
						shopid: s.shopid,
						shop_name: s.shop_name,
						target_url: `/shop/${s.shopid}`,
					})
				);
		});
	},
});

export const setShopeeMall = createAsyncThunk(
	"shopeeMall/setShopeeMall",
	async (id: string) => {
		const res = await axios(
			`/api/v4/official_shop/get_shops?category_id=${id}&limit=24&offset=0`
		);
		return res.data;
	}
);

export default shopeeMallState.reducer;
