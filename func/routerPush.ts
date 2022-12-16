import { NextRouter } from "next/router";

export const routerPush = (router: NextRouter, query: any, scroll: boolean) => {
	router.push(
		{
			pathname: router.pathname,
			query,
		},
		undefined,
		{ scroll: scroll ? true : false }
	);
};
