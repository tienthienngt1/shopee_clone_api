export type GetShopBaseDataT = {
	data: {
		account: {
			portrait: string;
			username: string;
			following_count: number;
		};
		last_active_time: number;
		item_count: number;
		response_rate: number;
		follower_count: number;
		rating_star: number;
		ctime: number;
		shopid: number;
		shop_rating: {
			rating_bad: number;
			rating_normal: number;
			rating_good: number;
		};
	};
};
