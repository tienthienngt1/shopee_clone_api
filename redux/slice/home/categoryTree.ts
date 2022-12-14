import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

export type Data = {
	catid: number;
	display_name: string;
	image: string;
	name: string;
	children: {
		catid: number;
		display_name: string;
		image: string;
		name: string;
		parent_catid: number;
	}[];
};

export type CategoryTree = {
	data: Data[];
};

const initialState: CategoryTree = { data: [] };

const categoryTreeState = createSlice({
	name: "categoryTree",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setCategoryTree.fulfilled, (state, action) => {
			state.data = action.payload.map((ac: any) => ({
				catid: ac.catid,
				name: ac.name,
				display_name: ac.display_name,
				image: ac.image,
				children: ac.children.map((child: any) => ({
					catid: child.catid,
					name: child.name,
					display_name: child.display_name,
					image: child.image,
					parent_catid: child.parent_catid,
				})),
			}));
		});
	},
});

export const setCategoryTree = createAsyncThunk(
	"categoryTree/setCategoryTree",
	async () => {
		const res = await axios(`${hostname()}/api/v4/pages/get_category_tree`);
		return res.data?.data?.category_list;
	}
);

export default categoryTreeState.reducer;
