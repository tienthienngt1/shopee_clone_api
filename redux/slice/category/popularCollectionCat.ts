import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

type Data = {
	catid: number;
	title: string;
	collection_list: {
		collection_id: number;
		image: string;
		title: string;
		price: number;
	}[];
};

type PopularCollection = {
	data: Data[];
};

const initialState: PopularCollection = { data: [] };
const popularCollectionCat = createSlice({
	name: "popularCollection",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setPopularCollectionCat.fulfilled, (state, action) => {
			if (action.payload.data?.popular_collection_list?.length > 0)
				state.data = action.payload.data.popular_collection_list.map(
					(c: any) => ({
						catid: c.catid,
						title: c.title,
						collection_list:
							c.collection_list.length > 0 &&
							c.collection_list.map((l: any) => ({
								collection_id: l.collection_id,
								image: l.img,
								title: l.title,
								price: l.normal_item_price_min,
							})),
					})
				);
			else {
				state.data = [];
			}
		});
	},
});

export const setPopularCollectionCat = createAsyncThunk(
	"popularCollection",
	async (id: string) => {
		const res = await axios(
			`${hostname()}/api/v4/pages/get_popular_collection?catid=${id}`
		);
		return res.data;
	}
);

export default popularCollectionCat.reducer;
