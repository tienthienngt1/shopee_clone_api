import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
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
import productDetail from "./slice/product/productDetail";
import productFromShop from "./slice/product/productFromShop";
import productMayLike from "./slice/product/productMayLike";
import allSession from "./slice/flashsale/allSession";
import allItemids from "./slice/flashsale/allItemids";
import itemsFlashsale from "./slice/flashsale/items";
import shop from "./slice/product/shop";
import productRating from "./slice/product/productRating";

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
	productDetail,
	productFromShop,
	productMayLike,
	allSession,
	allItemids,
	itemsFlashsale,
	shop,
	productRating,
});

const persistConfig = {
	key: "root",
	storage,
	blacklist: [
		"flashSale",
		"itemCat",
		"productDetail",
		"productFromShop",
		"productMayLike",
		"allSession",
		"allItemids",
		"itemsFlashsale",
	],
};
export const persistedReducer = persistReducer(persistConfig, reducers);
