import { useState, useEffect } from "react";
import { setFooterLayout } from "redux/slice/footerLayout";
import { setSearchPrefill } from "redux/slice/home/searchPrefill";
import { useThunkDispatch } from "redux/store";
export const useLoadLayout = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [result, setResult] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		try {
			dispatch(setSearchPrefill());
			dispatch(setFooterLayout());
			setLoading(false);
			setResult(true);
		} catch (error) {
			console.log(error);

			setLoading(false);
			setError(true);
		}
	}, [dispatch]);
	return [loading, result, error];
};
