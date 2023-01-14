import { RecommendItemT } from "types/commons";

export type ShopVoucherT = {
	voucher_list?: {
		discount_percentage: number;
		discount_value: number;
		end_time: number;
		min_spend: number;
	}[];
};

export type GetShopTabShopDataT = {
	data: {
		decoration: {
			top_products: {
				title: string;
				items: RecommendItemT[];
			};
			carousel?: {
				banners: {
					banner_image: string;
					display_ratio: number;
				}[];
			};
			shop_voucher?: ShopVoucherT;
			single_banner?: {
				display_ratio?: number;
				banners?: {
					banner_image: string;
					display_ratio: number;
				}[];
			};
			hostposts_image?: {
				filename: string;
				image_ratio: number;
			};
			image_catogories?: {
				title: string;
				total: number;
				shop_categories: {
					display_name: string;
					image: string;
					shop_category_id: number;
				}[];
			};
			product_grid?: {
				title: string;
				items: RecommendItemT[];
			};
			product_by_category?: {
				display_name: string;
				items: RecommendItemT[];
			};
		}[];
	};
};
