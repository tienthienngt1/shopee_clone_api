import useSWR from "swr";
import { fetcher } from "swrHooks/fetcher";
import { GetCategoryTreeDataT } from "types/commons";

export const useGetCategoryTree = () => {
	return useSWR<GetCategoryTreeDataT>("/api/v4/pages/get_category_tree", fetcher);
};
