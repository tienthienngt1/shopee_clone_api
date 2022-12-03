import { combineReducers } from "@reduxjs/toolkit";
import homeBanner from "./slice/home/homeBanner";
import categoryTree from "./slice/home/categoryTree";
import flashSale from "./slice/home/flashSale";
import topSearch from "./slice/home/topSearch";
import dailyDiscover from "./slice/home/dailyDiscover";
import footerLayout from "./slice/footerLayout";
import searchPrefill from "./slice/home/searchPrefill";
import bannerCat from "./slice/category/bannerCat";
import shopeeMall from "./slice/category/shopeeMall";
import popularCollectionCat from "./slice/category/popularCollectionCat";
import itemCat from "./slice/category/itemCat";
import searchFilter from "./slice/category/searchFilterCat";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
	return {
		getItem(_key: string) {
			return Promise.resolve(null);
		},
		setItem(_key: string, value: any) {
			return Promise.resolve(value);
		},
		removeItem(_key: string) {
			return Promise.resolve();
		},
	};
};
const storage =
	typeof window !== "undefined"
		? createWebStorage("local")
		: createNoopStorage();

const reducers = combineReducers({
	homeBanner,
	categoryTree,
	flashSale,
	topSearch,
	dailyDiscover,
	footerLayout,
	searchPrefill,
	bannerCat,
	shopeeMall,
	popularCollectionCat,
	itemCat,
	searchFilter,
});

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["flashSale"],
};
export const persistedReducer = persistReducer(persistConfig, reducers);