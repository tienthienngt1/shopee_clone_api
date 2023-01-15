import axios from "axios";
import useSWR from "swr";
import { GetFooterLayoutT } from "types/commons/pages.type";

const fetcher = (url: string) =>
	axios
		.get(url, { headers: { "x-api-source": "pc" } })
		.then((res) => res.data);

export const useGetFooterLayout = () => {
	return useSWR<GetFooterLayoutT>(
		"/api/v4/pages/get_footer_layout",
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
		}
	);
};
