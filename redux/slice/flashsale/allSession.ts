import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

type AllSessionT = {
	banner: string;
	categories: {
		catid: number;
		catname: string;
		image: string;
	}[];
	start_time: number;
	end_time: number;
	is_ongoing: boolean;
	promotionid: number;
};

type InitialStateT = {
	data: AllSessionT[];
	status: "fulfilled" | "rejected" | "loading";
};

const initialState: InitialStateT = {
	data: [],
	status: "fulfilled",
};

const allSessionState = createSlice({
	name: "allSession",
	initialState,
	reducers: {
		setStateLoading: (state) => {
			state.status = "loading";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllSessionFlashSale.fulfilled, (state, action) => {
			const { sessions } = action.payload.data;
			if (sessions) {
				state.data = sessions.map((s: any) => ({
					banner: s.banner,
					categories: s.categories.map((c: any) => ({
						catid: c.catid,
						catname: c.catname,
						image: c.image,
					})),
					start_time: s.start_time,
					end_time: s.end_time,
					promotionid: s.promotionid,
				}));
				state.status = "fulfilled";
			} else {
				state.status = "rejected";
			}
		});
	},
});

export const getAllSessionFlashSale = createAsyncThunk(
	"allSession/getAllSession",
	async () => {
		const { data } = await axios(
			`${hostname()}/api/v4/flash_sale/get_all_sessions?category_personalization_type=0`
		);
		return data;
	}
);

export const { setStateLoading } = allSessionState.actions;

export default allSessionState.reducer;
