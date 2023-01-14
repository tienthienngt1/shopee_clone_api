import { createSlice } from "@reduxjs/toolkit";

const initialState: { shopid?: number } = {
	shopid: undefined,
};

const shopidState = createSlice({
	name: "shopidState",
	initialState,
	reducers: {
		setShopid: (state, action) => {
			state.shopid = action.payload;
		},
		resetShopid: (state) => {
			state.shopid = undefined;
		},
	},
});

export const { setShopid, resetShopid } = shopidState.actions;

export default shopidState.reducer;
