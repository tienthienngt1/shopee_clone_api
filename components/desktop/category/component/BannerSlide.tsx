import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setBannerCat } from "redux/slice/bannerCat";
import { RootState, useThunkDispatch } from "redux/store";
import { Container } from "components/desktop/common/component";
import SlideBanner from "components/desktop/common/component/SlideBanner";

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
		<Container>
			<SlideBanner data={data} />
		</Container>
	);
};

export default BannerSlide;
