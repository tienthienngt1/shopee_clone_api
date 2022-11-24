import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setBannerCat } from "redux/slice/bannerCat";
import { RootState, useThunkDispatch } from "redux/store";
import SlideBanner from "components/desktop/common/component/SlideBanner";
import { WrapBannerSlide } from "../styled";

type Props = {
	id: string | undefined;
};

const BannerSlide = ({ id }: Props) => {
	const dispatch = useThunkDispatch();
	const { data } = useSelector((state: RootState) => state.bannerCat);
	useEffect(() => {
		if (id) dispatch(setBannerCat(id));
	}, [dispatch, id]);

	return (
		<WrapBannerSlide>
			<SlideBanner data={data} />
		</WrapBannerSlide>
	);
};

export default BannerSlide;
