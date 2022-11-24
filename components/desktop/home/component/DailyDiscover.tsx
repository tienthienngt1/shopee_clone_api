import Item from "components/desktop/common/component/Item";
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
			<DailyDiscoverHeader>
				<div>gợi ý hôm nay</div>
			</DailyDiscoverHeader>
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
