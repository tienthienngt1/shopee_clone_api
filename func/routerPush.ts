import { NextRouter } from "next/router";

export const routerPush = (
	router: NextRouter,
	query: any,
	scroll: boolean,
	pathname?: string
) => {
	router.push(
		{
			pathname: pathname ? pathname : router.pathname,
			query,
		},
		undefined,
		{ scroll }
	);
};
