import { AsyncThunk } from "@reduxjs/toolkit";
import { TypedDispatch } from "redux/store";

export const checkDispatch = (
	value: any,
	dispatch: TypedDispatch,
	setFunc: AsyncThunk<any, void, any>
) => {
	if (value?.length > 0) return 0;
	dispatch(setFunc());
	return 1;
};
