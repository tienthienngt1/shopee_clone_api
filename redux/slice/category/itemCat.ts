import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import type { Data } from "../home/dailyDiscover";
import { hostname } from "func";

export interface DataCat extends Data {
	shopid: number;
	price_before_discount?: number;
	price_min?: number;
	price_max?: number;
	shopee_rating?: number;
	shop_location?: string;
}

type ItemCatState = {
	data: DataCat[] | null;
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
			const itemSections =
				action.payload?.data?.sections?.[0]?.data?.item;
			const items = action.payload?.items;
			if (itemSections) {
				state.total = action.payload?.data?.sections?.[0]?.total;
				state.data = itemSections.map((i: any) => ({
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
					shopid: i.shopid,
				}));
			}
			if (itemSections === null || items === null) state.data = null;
			if (items) {
				state.total = action.payload?.total_count;
				state.data = items.map((i: any) => ({
					itemid: i.itemid,
					price_before_discount: i.item_basic.price_before_discount,
					price_min: i.item_basic.price_min,
					price_max: i.item_basic.price_max,
					price: i.item_basic.price,
					raw_discount: i.item_basic.raw_discount,
					shopee_verified: i.item_basic.shopee_verified,
					shopee_rating:
						i.item_basic.shopee_rating ||
						i.item_basic?.item_rating?.rating_star,
					historical_sold: i.item_basic.historical_sold,
					shop_location: i.item_basic.shop_location,
					image: i.item_basic.image,
					name: i.item_basic.name,
					shopid: i.shopid,
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
		const page = catid.split("?")?.[1];
		if ((!id.includes("?") && query.length <= 3) || page.length <= 7) {
			res = await axios(
				`${hostname()}/api/v4/recommend/recommend?bundle=category_landing_page&cat_level=1&catid=${
					!catid.includes("?") ? catid : catid.split("?")?.[0]
				}&limit=60&offset=${
					!page ? 0 : (Number(page.split("=")?.[1]) - 1) * 60
				}`,
				{ headers: { "af-ac-enc-dat": "null" } }
			);
		} else {
			const paramsArr = id.split("?");
			const params = paramsArr[0].split(".");
			const page = paramsArr[1]
				.split("&")
				?.filter((p) => p.includes("page"));
			const newest = page?.[0].split("=")?.[1];
			res = await axios(
				`${hostname()}/api/v4/search/search_items?limit=60&match_id=${
					params[params.length - 1]
				}&page_type=search&scenario=PAGE_CATEGORY&version=2&newest=${
					newest ? Number(newest) * 60 : 0
				}&${paramsArr[1]}`
			);
		}
		return res?.data;
	}
);

export const { setLoadingItemCat } = itemCatState.actions;

export default itemCatState.reducer;
