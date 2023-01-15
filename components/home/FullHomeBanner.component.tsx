import CarouselHome from "./CarouselHome.component";
import CarouselBannerHome from "./CarouselBannerHome.component";
import { Container } from "components/commons";
import { WrapFullHomeBanner, WrapFullScreen } from "styled/home";
import { useBatchListBySpaces } from "swrHooks/banner/useBatchListBySpaces";

export const FullBannerHome = () => {
	const { data } = useBatchListBySpaces();
	return (
		<WrapFullScreen>
			<Container>
				<WrapFullHomeBanner>
					<CarouselHome data={data} />
					<div>
						<CarouselBannerHome />
					</div>
				</WrapFullHomeBanner>
			</Container>
		</WrapFullScreen>
	);
};
