import { Container } from "components/common/component";
import { WrapFullHomeBanner, WrapFullScreen } from "../styled";
import Carousel from "./Carousel";
import CategoryBanner from "./CategoryBanner";
import CategoryHome from "./CategoryHome";
import FlashSale from "./FlashSale";
import SingleBanner from "./SingleBanner";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export const FullHomeBanner = () => {
	return (
		<>
			<WrapFullScreen>
				<Container>
					<WrapFullHomeBanner>
						<Carousel />
						<div>
							<CategoryBanner />
						</div>
					</WrapFullHomeBanner>
				</Container>
			</WrapFullScreen>
			<Container>
				<SingleBanner id={1} />
				<CategoryHome />
				<SingleBanner id={2} />
				<FlashSale />
			</Container>
		</>
	);
};
