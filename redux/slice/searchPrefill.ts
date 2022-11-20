import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type SearchPreFillState = {
	placeholder?: string;
	topSearch?: { url: string; title: string }[];
};

const initialState: SearchPreFillState = {};

const searchPrefillState = createSlice({
	name: "searchPrefill",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setSearchPrefill.fulfilled, (state, action) => {
			console.log(action.payload);
			if (action.payload.resSearch?.data?.items?.[0]?.hint)
				state.placeholder =
					action.payload.resSearch?.data?.items?.[0]?.hint;
			if (action.payload.resTrending?.data?.querys)
				state.topSearch = action.payload.resTrending.data.querys.map(
					(q: any) => ({
						title: q.text,
						url: "#",
					})
				);
		});
	},
});

export const setSearchPrefill = createAsyncThunk("searchPrefill", async () => {
	const resSearch = await axios("api/v4/search/search_prefills", {
		headers: { "x-api-source": "pc" },
	});
	const resTrending = await axios(
		"api/v4/search/trending_search?bundle=popsearch&limit=8&offset=0",
		{ headers: { "x-api-source": "pc" } }
	);
	return {
		resSearch: resSearch.data,
		resTrending: resTrending.data,
	};
});

export default searchPrefillState.reducer;
