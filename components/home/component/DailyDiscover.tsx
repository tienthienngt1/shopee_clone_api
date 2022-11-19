import Item from "components/common/component/Item";
import { useEffect } from "react";
import { setDailyDiscover } from "redux/slice/dailyDiscover";
import { RootState, useThunkDispatch } from "redux/store";
import { useSelector } from "react-redux";
import {
	DailyDiscoverHeader,
	DailyDiscoverMain,
	WrapDailyDiscover,
	WrapDailyDiscoverMain,
} from "../styled";

const DailyDiscover = () => {
	const { data } = useSelector((state: RootState) => state.dailyDiscover);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		dispatch(setDailyDiscover());
	}, [dispatch]);
	return (
		<WrapDailyDiscover>
			<DailyDiscoverHeader> gợi ý hôm nay</DailyDiscoverHeader>
			<DailyDiscoverMain>
				{data &&
					data.length > 0 &&
					data.map((d) => (
						<WrapDailyDiscoverMain key={d.itemid}>
							<Item data={d} />
						</WrapDailyDiscoverMain>
					))}
			</DailyDiscoverMain>
		</WrapDailyDiscover>
	);
};

export { DailyDiscover };
