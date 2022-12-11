import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
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
	status: string;
	total: number;
};

const initialState: ItemCatState = { data: [], status: "fulfilled", total: 0 };

const itemCatState = createSlice({
	name: "itemCat",
	initialState,
	reducers: {
		setLoadingItemCat: (state) => {
			state.status = "loading";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setItemCat.fulfilled, (state, action) => {
			if (action.payload?.error)
				toast.error(`Erorr tracking, code: ${action.payload.error}`, {
					position: toast.POSITION.BOTTOM_RIGHT,
				});
			if (action.payload?.data?.sections?.[0]?.data?.item) {
				state.total = action.payload?.data?.sections?.[0]?.total;
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
			}
			if (action.payload?.items) {
				state.total = action.payload?.total_count;
				state.data = action.payload.items.map((i: any) => ({
					itemid: i.itemid,
					price_before_discount: i.item_basic.price_before_discount,
					price_min: i.item_basic.price_min,
					price_max: i.item_basic.price_max,
					price: i.item_basic.price,
					raw_discount: i.item_basic.raw_discount,
					shopee_verified: i.item_basic.shopee_verified,
					shopee_rating: i.item_basic.shopee_rating,
					historical_sold: i.item_basic.historical_sold,
					shop_location: i.item_basic.shop_location,
					image: i.item_basic.image,
					name: i.item_basic.name,
				}));
			}
			state.status = "fulfilled";
		});
	},
});

export const setItemCat = createAsyncThunk(
	"itemcat/setItemCat",
	async (id: string) => {
		let res;
		const query = id.split(".");
		const catid = query?.[query.length - 1];
		if (!id.includes("?") && query.length <= 3) {
			res = await axios(
				`api/v4/recommend/recommend?bundle=category_landing_page&cat_level=1&catid=${catid}&limit=60&offset=0`,
				{ headers: { "af-ac-enc-dat": "null" } }
			);
		} else {
			const paramsArr = id.split("?");
			const params = paramsArr[0].split(".");
			res = await axios(
				`api/v4/search/search_items?limit=60&match_id=${
					params[params.length - 1]
				}&page_type=search&scenario=PAGE_CATEGORY&version=2&${
					paramsArr[1]
				}`
			);
		}
		return res?.data;
	}
);

export const { setLoadingItemCat } = itemCatState.actions;

export default itemCatState.reducer;
