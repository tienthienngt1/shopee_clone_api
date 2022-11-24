import { AsyncThunk } from "@reduxjs/toolkit";
import { useThunkDispatch } from "redux/store";
import { TypedDispatch } from "redux/store";

type Props = {
	value: any;
	dispatch: TypedDispatch;
	setFunc: AsyncThunk<any, void, any>;
};

export const checkDispatch = (
	value: any,
	dispatch: TypedDispatch,
	setFunc: AsyncThunk<any, void, any>
) => {
	if (value.length > 0) return 0;
	dispatch(setFunc());
	return 1;
};
