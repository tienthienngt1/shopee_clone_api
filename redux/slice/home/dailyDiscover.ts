import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

export type Data = {
	itemid: number;
	raw_discount: number;
	shopee_verified: boolean;
	historical_sold: number;
	image: string;
	name: string;
	price: number;
	shopid: number;
};

type DailyDiscoverState = {
	data: Data[];
};

const initialState: DailyDiscoverState = { data: [] };

const dailyDiscoverState = createSlice({
	name: "dailyDiscover",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setDailyDiscover.fulfilled, (state, action) => {
			if (action.payload?.data?.sections?.[0]?.data?.item)
				state.data =
					action.payload?.data?.sections?.[0]?.data?.item.map(
						(i: any) => ({
							itemid: i.itemid,
							raw_discount: i.raw_discount,
							shopee_verified: i.shopee_verified,
							historical_sold: i.historical_sold,
							image: i.image,
							name: i.name,
							price: i.price,
							shopid: i.shopid,
						})
					);
		});
	},
});

export const setDailyDiscover = createAsyncThunk(
	"dailyDiscover/setDailyDiscover",
	async () => {
		try {
			const res = await axios(
				`${hostname()}/api/v4/recommend/recommend?bundle=daily_discover_main&item_card=3&limit=60&offset=0`
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export default dailyDiscoverState.reducer;
