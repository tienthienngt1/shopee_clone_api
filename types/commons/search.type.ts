export type SearchTrendingT = {
	data: {
		querys: {
			text: string;
			count: number;
		}[];
	};
};

export type SearchPrefillT = {
	data: {
		items: {
			hint: string;
		}[];
	};
};
