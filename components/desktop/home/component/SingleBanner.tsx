import { WrapSingleBannerStyled } from "../styled";
import NextImage from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

type Props = {
	id: number;
};

export function SingleBanner({ id }: Props) {
	let data;
	const { subCarouselBanner, subCategoryBanner } = useSelector(
		(state: RootState) => state.homeBanner
	);
	if (id === 1) data = subCarouselBanner;
	else data = subCategoryBanner;
	return (
		<>
			{data && data?.length > 0 && (
				<WrapSingleBannerStyled>
					<a
						href={data?.[0].target_url}
						target="_blank"
						rel="noreferrer"
					>
						<div
							style={{
								position: "relative",
								width: "100%",
								height: "100%",
							}}
						>
							<NextImage
								src={data?.[0]?.image_url}
								alt={data?.[0]?.target_url}
								layout="fill"
								priority
							/>
						</div>
					</a>
				</WrapSingleBannerStyled>
			)}
		</>
	);
}
