import useSWR from "swr";
import { fetcher } from "./fetcher";
import { GetShopBaseDataT } from "types/shop/getShopBase.type";

export const useGetShopBase = (userName: string) => {
	return useSWR<GetShopBaseDataT>(
		`/api/v4/shop/get_shop_base?entry_point=ShopByPDP&need_cancel_rate=true&request_source=shop_home_page&username=${userName}&version=1`,
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
		}
	);
};
