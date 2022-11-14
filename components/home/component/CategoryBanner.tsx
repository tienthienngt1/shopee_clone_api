import { useEffect } from "react";
import { WrapCategoryBannerStyled } from "../styled";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useThunkDispatch } from "redux/store";
import { setSubCarouselBanner } from "redux/slice/homeBanner";
import ApiError from "components/common/component/ApiError";
import { Loading } from "components/common/component";

const CategoryBanner = () => {
	const { categoryBanner } = useSelector(
		(state: RootState) => state.homeBanner
	);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		dispatch(setSubCarouselBanner());
	}, [dispatch]);
	return (
		<WrapCategoryBannerStyled>
			{!categoryBanner ? (
				<ApiError />
			) : categoryBanner.length > 0 ? (
				categoryBanner.map((res: any) => (
					<div key={res?.id}>
						<div>
							<Image
								src={
									res?.banner_image_gif
										? res.banner_image_gif
										: res?.banner_image
										? res.banner_image
										: ""
								}
								alt={JSON.parse(res.title)?.vi}
								width="40"
								height="40"
							/>
						</div>
						<div>{JSON.parse(res.title).vi}</div>
					</div>
				))
			) : (
				<Loading />
			)}
		</WrapCategoryBannerStyled>
	);
};

export default CategoryBanner;
