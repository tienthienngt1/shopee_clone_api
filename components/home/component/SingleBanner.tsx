import { WrapSingleBannerStyled } from "../styled/singleBannerStyled";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const SingleBanner = () => {
	const { subCarouselBanner } = useSelector(
		(state: RootState) => state.homeBanner
	);
	return (
		<WrapSingleBannerStyled>
			{subCarouselBanner && subCarouselBanner?.length > 0 && (
				<a
					href={subCarouselBanner?.[0].target_url}
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src={subCarouselBanner?.[0]?.image_url}
						alt={subCarouselBanner?.[0]?.target_url}
						layout="fill"
					/>
				</a>
			)}
		</WrapSingleBannerStyled>
	);
};

export default SingleBanner;
