import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

export type Data = {
	itemid: number;
	promotionid: number;
	shopid: number;
	raw_discount: number;
	image: string;
	is_shop_official: boolean;
	is_shop_preferred: boolean;
	name: string;
	price: number;
	stock: number;
	flash_sale_stock: number;
	promo_overlay_image: string;
};
export type Session = {
	end_time: number;
	promotionid: number;
	start_time: number;
	status: number;
};
type FlashSaleState = {
	session?: Session;
	data: Data[];
};

const initialState: FlashSaleState = { session: undefined, data: [] };

const flashSaleState = createSlice({
	name: "flashSale",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setFlashSale.fulfilled, (state, action) => {
			if (action.payload?.data?.session) {
				state.session = {
					end_time: action.payload.data.session.end_time,
					promotionid: action.payload.data.session.promotionid,
					start_time: action.payload.data.session.start_time,
					status: action.payload.data.session.status,
				};
			}
			if (action.payload.data?.items) {
				state.data = action.payload.data.items.map((item: any) => ({
					itemid: item.itemid,
					promotionid: item.promotionid,
					shopid: item.shopid,
					raw_discount: item.raw_discount,
					image: item.image,
					is_shop_official: item.is_shop_official,
					is_shop_preferred: item.is_shop_preferred,
					name: item.name,
					price: item.price,
					stock: item.stock,
					flash_sale_stock: item.flash_sale_stock,
					promo_overlay_image: item.promo_overlay_image,
				}));
			}
		});
	},
});

export const setFlashSale = createAsyncThunk(
	"flashSale/setFlashSale",
	async () => {
		const res = await axios(
			`${hostname()}/api/v4/flash_sale/flash_sale_get_items?limit=16&need_personalize=true&offset=0&sort_soldout=true&with_dp_items=true`
		);
		return res.data;
	}
);

export default flashSaleState.reducer;
