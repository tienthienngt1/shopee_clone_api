import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Data = {
	title: string;
	items: {
		name: string;
		id: number | string;
		count?: number;
	}[];
};

type SearchFilter = {
	data: Data[];
};

const initialState: SearchFilter = {
	data: [],
};

const searchFilterState = createSlice({
	name: "searchFilter",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setSearchFilter.fulfilled, (state, action) => {
			const data =
				action.payload?.data?.filter_configuration
					?.dynamic_filter_group_data;
			if (data) {
				state.data = [
					{
						title: "Theo Danh Mục",
						items: data?.facets?.map((f: any) => ({
							name: f.category.display_name,
							id: f.catid,
							count: f.count,
						})),
					},
					{
						title: "Thương Hiệu",
						items: data?.brands,
					},
					{
						title: "Nơi Bán",
						items: data?.locations.map((l: any) => ({
							title: "Nơi Bán",
							id: l.name,
							name: l.name,
						})),
					},
					{
						title: "Đơn Vị Vận Chuyển",
						items: data?.shippings.map((s: any) => ({
							title: "Đơn Vi Vận Chuyển",
							id: s.positionid,
							name: s.name,
						})),
					},
				];
			}
		});
	},
});

export const setSearchFilter = createAsyncThunk(
	"searchFilter/setSearchFilter",
	async (id: string) => {
		const res = await axios(
			`api/v4/search/search_filter_config?match_id=${id}&page_type=search&scenario=PAGE_CATEGORY`
		);
		return res.data;
	}
);

export default searchFilterState.reducer;
