import { configureStore } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import homeBanner from "./slice/homeBanner";
import categoryTree from "./slice/categoryTree";
import flashSale from "./slice/flashSale";
import topSearch from "./slice/topSearch";
import dailyDiscover from "./slice/dailyDiscover";
import footerLayout from "./slice/footerLayout";
import searchPrefill from "./slice/searchPrefill";
import bannerCat from "./slice/bannerCat";

export const store = configureStore({
	reducer: {
		homeBanner,
		categoryTree,
		flashSale,
		topSearch,
		dailyDiscover,
		footerLayout,
		searchPrefill,
		bannerCat,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useThunkDispatch = () => useDispatch<TypedDispatch>();
