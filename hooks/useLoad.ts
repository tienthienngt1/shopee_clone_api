import { useEffect, useState } from "react";
import { setCategoryTree } from "redux/slice/categoryTree";
import { useThunkDispatch } from "redux/store";
import {
	setCarouselBanner,
	setSubCarouselBanner,
} from "redux/slice/homeBanner";
import { setDailyDiscover } from "redux/slice/dailyDiscover";
import { setTopSearch } from "redux/slice/topSearch";
import { setFlashSale } from "redux/slice/flashSale";
import { setSearchPrefill } from "redux/slice/searchPrefill";
import { setFooterLayout } from "redux/slice/footerLayout";

const useLoad = () => {
	const [error, setError] = useState<boolean>(false);
	const [result, setResult] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		try {
			dispatch(setSearchPrefill());
			dispatch(setCategoryTree());
			dispatch(setDailyDiscover());
			dispatch(setFlashSale());
			dispatch(setCarouselBanner());
			dispatch(setSubCarouselBanner());
			dispatch(setTopSearch());
			dispatch(setFooterLayout());
			setLoading(false);
			setResult(true);
		} catch (error) {
			setError(true);
			setLoading(false);
		}
	}, [dispatch]);
	return [loading, result, error];
};

export default useLoad;