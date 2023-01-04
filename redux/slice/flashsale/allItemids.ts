import { hostname } from "func/hostname";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type AllItemsidDataT = {
	catid: number;
	itemid: number;
	is_soldout: boolean;
};

type InitialStateT = {
	data: AllItemsidDataT[];
	dataFilter: AllItemsidDataT[];
	status: "loading" | "fulfilled" | "rejected";
};

const initialState: InitialStateT = {
	data: [],
	dataFilter: [],
	status: "fulfilled",
};

const allItemsidState = createSlice({
	name: "allItemsid",
	initialState,
	reducers: {
		setStatusLoading: (state) => {
			state.status = "loading";
		},
		filterDataById: (state, action) => {
			if (action.payload === 0) {
				state.dataFilter = state.data;
				return;
			}
			state.dataFilter = state.data.filter(
				(d) => d.catid === action.payload
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllItemids.fulfilled, (state, action) => {
			const itemids = action.payload.data?.item_brief_list;
			if (itemids) {
				const itemidsFilter = itemids.map((i: any) => ({
					catid: i.catid,
					is_soldout: i.is_soldout,
					itemid: i.itemid,
				}));
				state.data = itemidsFilter;
				state.dataFilter = itemidsFilter;
				state.status = "fulfilled";
			} else {
				state.status = "rejected";
			}
		});
	},
});

export const getAllItemids = createAsyncThunk(
	"allItemsid/getAllItemsid",
	async (promotionid: string) => {
		const { data } = await axios(
			`${hostname()}/api/v4/flash_sale/get_all_itemids?need_personalize=true&order_mode=2&promotionid=${promotionid}&sort_soldout=true`,
			{
				headers: {
					"af-ac-enc-dat": "null",
				},
			}
		);
		return data;
	}
);

export const { setStatusLoading, filterDataById } = allItemsidState.actions;

export default allItemsidState.reducer;
