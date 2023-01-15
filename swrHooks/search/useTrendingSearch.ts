import useSWR from "swr";
import { fetcher } from "swrHooks/fetcher";
import { SearchTrendingT } from "types/commons/search.type";

export const useTrendingSearch = () => {
	return useSWR<SearchTrendingT>(
		"/api/v4/search/trending_search?bundle=popsearch&limit=8&offset=0",
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
		}
	);
};
