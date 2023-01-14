import { WithRouterProps } from "next/dist/client/with-router";

export type RouterQueryT = {
	category: string;
	product: string;
	shop: string;
	categoryid: number;
	sortBy: number;
	page: number;
};

export type WithRouterPropsTyped<T extends WithRouterProps["router"]["query"]> =
	WithRouterProps & {
		query: T;
	};
