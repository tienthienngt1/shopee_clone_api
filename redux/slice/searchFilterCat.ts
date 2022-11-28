import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Data = {
	brands: {
		title: "Thương Hiệu";
		brandid: number;
		name: string;
	}[];
	facets: {
		title: "Theo Danh Mục";
		name: string;
		catid: number;
		count: number;
	}[];
	locations: {
		title: "Nơi Bán";
		name: string;
		level: string;
	}[];
	shippings: {
		title: "Đơn Vị Vận Chuyển";
		positionid: number;
		name: string;
	}[];
};

type SearchFilter = {
	data: Data;
};

const initialState: SearchFilter = {
	data: { brands: [], facets: [], locations: [], shippings: [] },
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
			if (data)
				state.data = {
					brands: data?.brands,
					facets: data?.facets?.map((f: any) => ({
						name: f.category.display_name,
						catid: f.catid,
						count: f.count,
					})),
					locations: data?.locations.map((l: any) => ({
						name: l.name,
						level: l.level,
					})),
					shippings: data?.shippings.map((s: any) => ({
						positionid: s.positionid,
						name: s.name,
					})),
				};
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
