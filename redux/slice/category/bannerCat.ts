import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { hostname } from "func";

type Data = {
	image_url: string;
	image_hash: string;
	target_url: string;
};

type BannerCatState = {
	data: Data[];
};

const initialState: BannerCatState = { data: [] };

const bannerCatState = createSlice({
	name: "bannerCat",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setBannerCat.fulfilled, (state, action) => {
			if (action.payload.data?.space_banners)
				state.data = action.payload.data.space_banners[0]?.banners?.map(
					(b: any) => ({
						image_url: b.image_url,
						image_hash: b.image_hash,
						target_url: b.target_url,
					})
				);
		});
	},
});

export const setBannerCat = createAsyncThunk(
	"bannerCat/setBannerCat",
	async (id: string) => {
		const res = await axios.post(
			`${hostname()}/api/v4/banner/batch_list_by_spaces`,
			{
				extra_data: "{}",
				spaces: [
					{
						space_key: "PC-VN-CATEGORY_CAROUSEL_01",
						space_filter: [{ key: "category_id", value: id }],
					},
				],
			}
		);
		return res.data;
	}
);
export default bannerCatState.reducer;
