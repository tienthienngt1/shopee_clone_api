import { checkDispatch } from "func";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setFooterLayout } from "redux/slice/footerLayout";
import { setSearchPrefill } from "redux/slice/home/searchPrefill";
import { useThunkDispatch } from "redux/store";
import { RootState } from "../redux/store";
export const useLoadLayout = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [result, setResult] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const searchPrefill = useSelector(
		(state: RootState) => state.searchPrefill
	);
	const footerLayout = useSelector((state: RootState) => state.footerLayout);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		try {
			checkDispatch(
				searchPrefill.placeholder,
				dispatch,
				setSearchPrefill
			);
			checkDispatch(footerLayout.data, dispatch, setFooterLayout);
			setLoading(false);
			setResult(true);
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	}, [dispatch, searchPrefill, footerLayout.data]);
	return [loading, result, error];
};
