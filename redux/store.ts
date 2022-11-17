import { configureStore } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import homeBanner from "./slice/homeBanner";
import categoryTree from "./slice/categoryTree";
import flashSale from "./slice/flashSale";
import topSearch from "./slice/topSearch";
import recommend from "./slice/recommend";

export const store = configureStore({
	reducer: {
		homeBanner,
		categoryTree,
		flashSale,
		topSearch,
		recommend,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useThunkDispatch = () => useDispatch<TypedDispatch>();
