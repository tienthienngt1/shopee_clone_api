import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostname } from "func";

export type Data = {
	title: string;
	text_link?: {
		text: string;
		url: string;
	}[];
	logo?: {
		image: string;
		url: string;
	}[];
	social_media?: {
		image: string;
		text: string;
		url: string;
	}[];
	qr?: {
		qr_image: string;
		qr_url: string;
		extra_images: {
			image: string;
			url: string;
		}[];
	};
};
export type DataArr = Data[];
type FooterLayoutState = {
	data: DataArr[];
};

const initialState: FooterLayoutState = { data: [] };

const footerLayoutState = createSlice({
	name: "footerLayout",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setFooterLayout.fulfilled, (state, action) => {
			if (action.payload.data?.pc) {
				const dataList = action.payload.data.pc.map((p: any) => {
					let text_link, qr, logo, social_media;
					return p?.sections?.map((sec: any) => {
						const title = sec.title;
						if (sec.text_link?.length > 0) {
							text_link = sec.text_link;
							return { text_link, title };
						} else if (sec?.social_media?.length > 0) {
							social_media = sec.social_media;
							return { social_media, title };
						} else if (sec?.logo?.length > 0) {
							logo = sec.logo;
							return { logo, title };
						} else {
							qr = sec?.qr;
							return { qr, title };
						}
					});
				});
				state.data = dataList;
			}
		});
	},
});

export const setFooterLayout = createAsyncThunk(
	"footerLayout/setFooterLayout",
	async () => {
		const res = await axios.get(
			`${hostname()}api/v4/pages/get_footer_layout`,
			{
				headers: {
					"x-api-source": "pc",
				},
			}
		);
		return res.data;
	}
);

export default footerLayoutState.reducer;
