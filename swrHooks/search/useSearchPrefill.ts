import useSWR from "swr";
import { fetcher } from "swrHooks/fetcher";
import { SearchPrefillT } from "types/commons/search.type";

export const useSearchPrefill = () => {
	return useSWR<SearchPrefillT>("/api/v4/search/search_prefills", fetcher);
};
