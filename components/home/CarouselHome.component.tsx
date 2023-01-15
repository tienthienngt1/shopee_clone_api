import NextImage from "next/image";
import { WrapCarouselStyled } from "styled/home";
import SlideBanner from "components/commons/SlideBanner";
import { BatchListBySpacesT } from "types/commons";

type CarouselHomeT = {
	data?: BatchListBySpacesT;
};

const CarouselHome = ({ data }: CarouselHomeT) => {
	return (
		<WrapCarouselStyled>
			<SlideBanner data={data} />
			<div>
				<div>
					<a href={data?.data?.space_banners?.[0]?.banners?.slice(-2)?.[0].target_url} target="_blank" rel="noreferrer">
						<div
							style={{
								position: "relative",
								cursor: "pointer",
								height: "100%",
							}}
						>
							<NextImage
								src={data?.data?.space_banners?.[0]?.banners?.slice(-2)?.[0].image_url ?? ""}
								alt={`shopee_banner`}
								layout="fill"
								priority
							/>
						</div>
					</a>
				</div>
				<div>
					<a href={data?.data?.space_banners?.slice(-2)?.[0]?.banners?.slice(-1)?.[0].target_url} target="_blank" rel="noreferrer">
						<div
							style={{
								cursor: "pointer",
								position: "relative",
								height: "100%",
							}}
						>
							<NextImage
								src={data?.data?.space_banners?.[0]?.banners?.slice(-1)?.[0].image_url ?? ""}
								alt={`banner home`}
								layout="fill"
								priority
							/>
						</div>
					</a>
				</div>
			</div>
		</WrapCarouselStyled>
	);
};

export default CarouselHome;
