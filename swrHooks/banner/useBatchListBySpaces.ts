import useSWR from "swr";
import axios from "axios";
import { BatchListBySpacesT } from "types/commons/banner.type";

const fetcher = (url: string) =>
	axios
		.post(
			url,
			{
				spaces: [{ space_key: "PC-VN-HOME_CAROUSEL_01" }, { space_key: "PC-VN-HOME_SKINNY_01" }],
			},
			{
				headers: {
					"x-api-source": "pc",
				},
			}
		)
		.then((res) => res.data);

export const useBatchListBySpaces = () => {
	return useSWR<BatchListBySpacesT>("/api/v4/banner/batch_list_by_spaces", fetcher, {
		revalidateOnFocus: false,
		revalidateIfStale: false,
	});
};
