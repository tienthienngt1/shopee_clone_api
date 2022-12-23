import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

export type Data = {
	images: string[];
	name: string;
	count: number;
};

type TopSearchState = {
	data: Data[] | undefined;
};
const initialState: TopSearchState = { data: [] };
const topSearchState = createSlice({
	name: "topSearch",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setTopSearch.fulfilled, (state, action) => {
			if (action.payload?.data) {
				state.data =
					action.payload?.data?.sections?.[0]?.data?.top_product.map(
						(item: any) => ({
							images: item.images,
							name: item.name,
							count: item.count,
						})
					);
			}
		});
	},
});

export const setTopSearch = createAsyncThunk(
	"topSearch/setTopSearch",
	async () => {
		const res = await axios(
			`${hostname()}/api/v4/recommend/recommend?bundle=top_products_homepage&limit=20`
		);
		return res.data;
	}
);

export default topSearchState.reducer;
