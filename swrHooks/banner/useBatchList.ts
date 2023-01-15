import useSWR from "swr";
import axios from "axios";
import { BatchListT } from "types/commons";

const fetcher = (url: string) =>
	axios
		.post(
			url,
			{
				types: [{ type: "pc_home_squares" }, { type: "welcome_package_entrance" }],
			},
			{
				headers: {
					"x-api-source": "pc",
				},
			}
		)
		.then((res) => res.data);

export const useBatchList = () => {
	return useSWR<BatchListT>("/api/v4/banner/batch_list", fetcher, {
		revalidateOnFocus: false,
		revalidateIfStale: false,
	});
};
