export type RecommendItemT = {
	add_on_deal_info?: {
		add_on_deal_id: number;
		add_on_deal_label: string;
	};
	image: string;
	shopee_verified: boolean;
	name: string;
	itemid: number;
	price: number;
	price_min: number;
	price_max: number;
	item_rating: {
		rating_star: number;
	};
	historical_sold: number;
	raw_discount: number;
	shopid: number;
	shopee_rating: number;
};

export type RecommendDataT = {
	data: {
		sections: {
			data: {
				item: RecommendItemT[];
			};
			total: number;
		}[];
	};
};
