import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

type RatingDataT = {
	username: string;
	avatar: string;
	rating_star: number;
	ctime: number;
	comment: string;
	images: string[];
	like_count: number;
	model_name: string;
	videos: {
		cover: string;
		url: string;
	}[];
};

type InitialStateT = {
	data?: {
		rating_count: number[];
		rating_with_context: number;
		rating_with_media: number;
		ratings: RatingDataT[];
		rating_total: number;
	};
	status: "fulfilled" | "loading" | "rejected" | "loadComment";
	selectedRating: number;
};

const initialState: InitialStateT = {
	data: undefined,
	status: "loading",
	selectedRating: 0,
};

const productRatingState = createSlice({
	name: "productRating",
	initialState,
	reducers: {
		resetProductRating: (state) => {
			state.data = undefined;
			state.status = "loading";
			state.selectedRating = 0;
		},
		setLoadingComment: (state) => {
			state.status = "loadComment";
		},
		setSelectedRating: (state, action) => {
			state.selectedRating = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setProductRating.fulfilled, (state, action) => {
			if (action.payload.error) return;
			const data = action.payload.data;
			if (data) {
				state.data = {
					rating_total: data.item_rating_summary?.rating_total,
					rating_count: data.item_rating_summary?.rating_count,
					rating_with_context:
						data.item_rating_summary?.rcount_with_context,
					rating_with_media:
						data.item_rating_summary?.rcount_with_media,
					ratings: data.ratings.map((r: any) => ({
						username: r.author_username,
						avatar: r.author_portrait,
						rating_star: r.rating_star,
						ctime: r.ctime,
						comment: r.comment,
						images: r.images,
						like_count: r.like_count,
						model_name: r.product_items?.[0]?.model_name,
						videos: r.videos?.map((v: any) => ({
							cover: v.cover,
							url: v.url,
						})),
					})),
				};
				state.status = "fulfilled";
				if (!state.selectedRating)
					state.selectedRating =
						data.item_rating_summary?.rating_total;
			} else {
				state.status = "rejected";
			}
		});
	},
});

export const setProductRating = createAsyncThunk(
	"productRating/setProductRating",
	async (
		arg: {
			router: string;
			type?: number;
			filter?: number;
			offset?: number;
		},
		thunkapi
	) => {
		const queryArr = arg.router.split(".");
		if (!queryArr.at(-1) && !queryArr.at(-2)) return;
		const { data } = await axios(
			`${hostname()}/api/v2/item/get_ratings?flag=1&limit=6&offset=${
				arg.offset ?? 0
			}&filter=${arg.filter ?? 0}&type=${
				arg.type ?? 0
			}&itemid=${queryArr.at(-1)}&shopid=${queryArr.at(-2)}`,
			{
				headers: {
					"af-ac-enc-dat": "null",
				},
				signal: thunkapi.signal,
			}
		);
		return data;
	}
);

export const { resetProductRating, setLoadingComment, setSelectedRating } =
	productRatingState.actions;

export default productRatingState.reducer;
