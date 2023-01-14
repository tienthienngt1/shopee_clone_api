import axios from "axios";
import { GetShopTabShopDataT } from "types/shop";
import useSWR from "swr";

const fetcher = (arg: { url: string; body: any }) =>
	axios.post(arg.url, arg.body).then((res) => res.data);

export const useGetShopTab = (shopid: number) => {
	return useSWR<GetShopTabShopDataT>(
		{
			url: "/api/v4/shop/get_shop_tab",
			body: {
				entry_point: "ShopByPDP",
				shopid: shopid,
				version: 2,
			},
		},
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
		}
	);
};
