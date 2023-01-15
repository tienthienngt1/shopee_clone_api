import { WrapSingleBannerStyled } from "styled/home";
import NextImage from "next/image";
import { useBatchList, useBatchListBySpaces } from "swrHooks/banner";

type Props = {
	id: number;
};

export function SingleBanner({ id }: Props) {
	const { data: batchListBySpacesData } = useBatchListBySpaces();
	const { data: batchListData } = useBatchList();
	return (
		<>
			<WrapSingleBannerStyled>
				{id === 1 && batchListBySpacesData?.data?.space_banners && (
					<a href={batchListBySpacesData?.data?.space_banners?.[1]?.banners?.[0]?.target_url} target="_blank" rel="noreferrer">
						<div
							style={{
								position: "relative",
								width: "100%",
								height: "100%",
							}}
						>
							<NextImage src={batchListBySpacesData?.data?.space_banners?.[1]?.banners?.[0]?.image_url} layout="fill" priority />
						</div>
					</a>
				)}
				{id === 2 && batchListData?.data?.banners?.[1] && (
					<a href={batchListData?.data?.banners?.[1]?.banners?.[0]?.banner_image} target="_blank" rel="noreferrer">
						<div
							style={{
								position: "relative",
								width: "100%",
								height: "100%",
							}}
						>
							<NextImage src={batchListData?.data?.banners?.[1]?.banners?.[0]?.banner_image ?? ""} layout="fill" priority />
						</div>
					</a>
				)}
			</WrapSingleBannerStyled>
		</>
	);
}
