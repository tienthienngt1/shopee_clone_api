import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type CarouselBanner =
	| { image_hash: string; image_url: string; target_url: string }[]
	| undefined;

export type HomeBannerState = {
	carouselBanner: CarouselBanner;
	categoryBanner:
		| {
				id: number;
				banner_image: string;
				title: string;
				banner_image_gift?: string;
				url: string;
		  }[]
		| undefined;
	subCarouselBanner:
		| { image_hash: string; image_url: string; target_url: string }[]
		| undefined;
	subCategoryBanner:
		| { image_hash: string; image_url: string; target_url: string }[]
		| undefined;
};

const initialState: HomeBannerState = {
	carouselBanner: [],
	subCarouselBanner: [],
	categoryBanner: [],
	subCategoryBanner: [],
};

const homeBannerState = createSlice({
	name: "homeBanner",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setCarouselBanner.fulfilled, (state, action) => {
			action.payload.data?.space_banners?.map((res: any) => {
				if (res.space_key === "PC-VN-HOME_CAROUSEL_01")
					state.carouselBanner = res.banners.map((ban: any) => ({
						image_hash: ban.image_hash,
						image_url: ban.image_url,
						target_url: ban.target_url,
					}));
				if (res.space_key === "PC-VN-HOME_SKINNY_01")
					state.subCategoryBanner = res.banners.map((ban: any) => ({
						image_hash: ban.image_hash,
						image_url: ban.image_url,
						target_url: ban.target_url,
					}));
				if (res.space_key === "PC-VN-HOME_NUZ_CAROUSEL_01")
					state.subCarouselBanner = res.banners?.map((ban: any) => ({
						image_hash: ban.image_hash,
						image_url: ban.image_url,
						target_url: ban.target_url,
					}));
			});
		});
		builder.addCase(setSubCarouselBanner.fulfilled, (state, action) => {
			action.payload.data?.banners?.map((ban: any) => {
				state.categoryBanner = ban.banners.map((b: any) => ({
					id: b.id,
					banner_image: b.banner_image,
					banner_image_gif: b.banner_image_gif,
					url: b.navigate_params.url,
					title: b.navigate_params.navbar.title,
				}));
			});
		});
	},
});

export const setCarouselBanner = createAsyncThunk(
	"homeBanner/setCarouselBanner",
	async () => {
		const res = await axios.post("/api/v4/banner/batch_list_by_spaces", {
			spaces: [
				{ space_key: "PC-VN-HOME_CAROUSEL_01" },
				{ space_key: "PC-VN-HOME_SKINNY_01" },
				{ space_key: "PC-VN-HOME_NUZ_CAROUSEL_01" },
			],
		});
		return res.data;
	}
);

export const setSubCarouselBanner = createAsyncThunk(
	"homeBanner/setSubCarouselBanner",
	async () => {
		const res = await axios.post("/api/v4/banner/batch_list", {
			types: [{ type: "pc_home_squares" }],
		});
		return res.data;
	}
);

export default homeBannerState.reducer;
