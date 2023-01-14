export type ShopCategoriesDataT = {
	shop_category_id: number;
	display_name: string;
	image: string;
	category_type: number;
	total: number;
};

export type CategoriesShopDataT = {
	data: {
		shop_categories?: ShopCategoriesDataT[];
	};
};
