import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

const recommendState = createSlice({
	name: "recommend",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setRecommend.fulfilled, (state, action) => {
			console.log(action.payload);
		});
	},
});

export const setRecommend = createAsyncThunk(
	"recommend/setRecommend",
	async () => {
		const res = await axios(
			"api/v4/recommend/recommend?bundle=daily_discover_main&item_card=3&limit=60&offset=0"
		);
		return res.data;
	}
);

export default recommendState.reducer;
