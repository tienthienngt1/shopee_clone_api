import { configureStore } from "@reduxjs/toolkit";
import homeBanner from "./slice/homeBanner";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import categoryTree from "./slice/categoryTree";
export const store = configureStore({
	reducer: {
		homeBanner,
		categoryTree,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useThunkDispatch = () => useDispatch<TypedDispatch>();
