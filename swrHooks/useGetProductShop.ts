import { RecommendDataT } from "types/commons";
import { fetcher } from "./fetcher";
import useSWR from "swr";
export const useGetProductShop = (arg: {
	shopid: number;
	catid?: string;
	sort?: string;
	page?: number;
}) => {
	return useSWR<RecommendDataT>(
		`/api/v4/recommend/recommend?bundle=shop_page_category_tab_main&is_generated=true&step2_upstream=dd&tab_name=popular&upstream=pdp&item_card=2&limit=${
			arg.page ? Number(arg.page) * 30 : 30
		}&offset=0&section=shop_page_category_tab_main_sec&sort_type=${
			arg.sort ?? 1
		}${arg.catid ? `&catid=${arg.catid}` : ""}&shopid=${arg.shopid}`,
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
		}
	);
};
