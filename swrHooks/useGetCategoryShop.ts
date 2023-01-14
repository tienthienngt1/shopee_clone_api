import useSWR from "swr";
import { CategoriesShopDataT } from "types/shop";
import { fetcher } from "./fetcher";

export const useGetCategoryShop = (shopid: number) => {
	return useSWR<CategoriesShopDataT>(
		`/api/v4/shop/get_categories?limit=20&offset=0&shopid=${shopid}&two_tier_cate=1&version=2`,
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
		}
	);
};
