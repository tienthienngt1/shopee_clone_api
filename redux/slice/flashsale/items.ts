import { hostname } from "func/hostname";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type ItemsDataT = {
	brand_sale_logo: string;
	end_time: number;
	flash_sale_stock: number;
	image: string;
	is_shop_official: boolean;
	item_rating: number;
	itemid: number;
	name: string;
	price: number;
	price_before_discount: number;
	promo_overlay_image: string;
	raw_discount: number;
	shopid: number;
	start_time: number;
	stock: number;
	hidden_price_display: string;
	voucher: {
		discount_percentage: number | undefined;
		discount_value: number | undefined;
		voucher_code: boolean;
	};
};

type InitialStateT = {
	data: ItemsDataT[];
	status: "fulfilled" | "rejected" | "loading";
	offset: number;
};

const initialState: InitialStateT = {
	data: [],
	status: "fulfilled",
	offset: 0,
};

const itemsFlashsaleState = createSlice({
	name: "itemsFlashsale",
	initialState,
	reducers: {
		setStatusLoading: (state) => {
			state.status = "loading";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getItemsFlashsale.fulfilled, (state, action) => {
			if (action.payload.from === "load") {
				if (state.offset === action.payload.offset) return;
				if (state.data.length === action.payload.offset) return;
			}
			state.offset = action.payload.offset;
			state.status = "fulfilled";
			const items = action.payload.data?.data?.items;
			if (items) {
				const filter = items.map((i: any) => ({
					brand_sale_logo: i.brand_sale_brand_custom_logo,
					end_time: i.end_time,
					flash_sale_stock: i.flash_sale_stock,
					image: i.image,
					is_shop_official: i.is_shop_official,
					item_rating: i.item_rating?.rating_star,
					itemid: i.itemid,
					name: i.name,
					price: i.price,
					price_before_discount: i.price_before_discount,
					promo_overlay_image: i.promo_overlay_image,
					raw_discount: i.raw_discount,
					shopid: i.shopid,
					start_time: i.start_time,
					stock: i.stock,
					hidden_price_display: i.hidden_price_display,
					voucher: {
						discount_percentage: i.voucher?.discount_percentage,
						discount_value: i.voucher?.discount_value,
						voucher_code: i.voucher?.voucher_code ? true : false,
					},
				}));
				if (action.payload.offset === 16) {
					state.data = filter;
					return;
				}
				state.data = state.data.concat(filter);
			}
		});
	},
});

export const getItemsFlashsale = createAsyncThunk(
	"itemsFlashsale/getItemsFlashsale",
	async (arg: {
		itemids: number[];
		promotionid: number;
		offset: number;
		from?: "load" | "effect";
	}) => {
		const { data } = await axios.post(
			`${hostname()}/api/v4/flash_sale/flash_sale_batch_get_items`,
			{
				categoryid: 0,
				limit: 16,
				with_dp_items: true,
				...arg,
			},
			{
				headers: {
					"af-ac-enc-dat": "null",
				},
			}
		);
		return { data, ...arg };
	}
);

export const { setStatusLoading } = itemsFlashsaleState.actions;
export default itemsFlashsaleState.reducer;
