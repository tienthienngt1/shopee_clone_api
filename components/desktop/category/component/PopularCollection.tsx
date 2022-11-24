import React, { useEffect } from "react";
import { setPopularCollectionCat } from "redux/slice/popularCollectionCat";
import { useThunkDispatch } from "redux/store";
import { WrapPopularCollection } from "../styled";

type Props = {
	id: string | undefined;
};

const PopularCollection = ({ id }: Props) => {
	const dispatch = useThunkDispatch();
	useEffect(() => {
		id && dispatch(setPopularCollectionCat(id));
	}, [dispatch, id]);
	return <WrapPopularCollection></WrapPopularCollection>;
};

export default PopularCollection;
