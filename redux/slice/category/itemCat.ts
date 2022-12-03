import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Data } from "../home/dailyDiscover";

export interface DataCat extends Data {
	price_before_discount?: number;
	price_min?: number;
	price_max?: number;
	shopee_rating?: number;
	shop_location?: string;
}

type ItemCatState = {
	data: DataCat[];
};

const initialState: ItemCatState = { data: [] };

const itemCatState = createSlice({
	name: "itemCat",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setItemCat.fulfilled, (state, action) => {
			if (action.payload?.data?.sections?.[0]?.data?.item)
				state.data = action.payload.data.sections[0].data.item.map(
					(i: any) => ({
						itemid: i.itemid,
						price_before_discount: i.price_before_discount,
						price_min: i.price_min,
						price_max: i.price_max,
						price: i.price,
						raw_discount: i.raw_discount,
						shopee_verified: i.shop_verified,
						shopee_rating: i.shop_rating,
						historical_sold: i.historical_sold
							? i.historical_sold
							: i.sold,
						shop_location: i.shop_location,
						image: i.image,
						name: i.name,
					})
				);
			else {
				state.data = [];
			}
		});
	},
});

export const setItemCat = createAsyncThunk(
	"itemcat/setItemCat",
	async (id: string) => {
		const res = await axios(
			`api/v4/recommend/recommend?bundle=category_landing_page&cat_level=1&catid=${id}&limit=60&offset=0`
		);
		return res.data;
	}
);

export default itemCatState.reducer;
