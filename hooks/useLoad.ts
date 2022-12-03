import { useEffect, useState } from "react";
import { setCategoryTree } from "redux/slice/home/categoryTree";
import { useThunkDispatch } from "redux/store";
import {
	setCarouselBanner,
	setSubCarouselBanner,
} from "redux/slice/home/homeBanner";
import { setDailyDiscover } from "redux/slice/home/dailyDiscover";
import { setTopSearch } from "redux/slice/home/topSearch";
import { setFlashSale } from "redux/slice/home/flashSale";
import { checkDispatch } from "func";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useLoad = () => {
	const [error, setError] = useState<boolean>(false);
	const [result, setResult] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const state = useSelector((state: RootState) => state);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		try {
			checkDispatch(state.categoryTree.data, dispatch, setCategoryTree);
			checkDispatch(state.dailyDiscover.data, dispatch, setDailyDiscover);
			checkDispatch(state.flashSale.data, dispatch, setFlashSale);
			checkDispatch(
				state.homeBanner.carouselBanner,
				dispatch,
				setCarouselBanner
			);
			checkDispatch(
				state.homeBanner.subCarouselBanner,
				dispatch,
				setSubCarouselBanner
			);
			checkDispatch(state.topSearch, dispatch, setTopSearch);
			setLoading(false);
			setResult(true);
		} catch (error) {
			console.log(error);
			setError(true);
			setLoading(false);
		}
	}, []);
	return [loading, result, error];
};

export default useLoad;
