import { WrapCategoryBannerStyled } from "../styled";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import NextImage from "next/image";

const CategoryBanner = () => {
	const { categoryBanner } = useSelector(
		(state: RootState) => state.homeBanner
	);
	return (
		<WrapCategoryBannerStyled>
			{categoryBanner &&
				categoryBanner.length > 0 &&
				categoryBanner.map((res: any) => (
					<div key={res?.id}>
						<a href={res.url} target="_blank" rel="noreferrer">
							<div style={{ position: "relative" }}>
								<NextImage
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
									priority
								/>
							</div>
							<div>{JSON.parse(res.title).vi}</div>
						</a>
					</div>
				))}
		</WrapCategoryBannerStyled>
	);
};

export default CategoryBanner;
