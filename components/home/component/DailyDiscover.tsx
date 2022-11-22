import Item from "components/common/component/Item";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import {
	DailyDiscoverBottom,
	DailyDiscoverHeader,
	DailyDiscoverMain,
	WrapDailyDiscover,
	WrapDailyDiscoverMain,
} from "../styled";

const DailyDiscover = () => {
	const { data } = useSelector((state: RootState) => state.dailyDiscover);
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
			<DailyDiscoverBottom>
				<div>Xem Thêm</div>
			</DailyDiscoverBottom>
		</WrapDailyDiscover>
	);
};

export { DailyDiscover };
