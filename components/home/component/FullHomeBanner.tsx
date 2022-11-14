import { Container } from "components/common/component";
import { WrapFullHomeBanner, WrapFullScreen } from "../styled";
import Carousel from "./Carousel";
import CategoryBanner from "./CategoryBanner";
import CategoryHome from "./CategoryHome";
import SingleBanner from "./SingleBanner";

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
				<SingleBanner />
				<CategoryHome />
			</Container>
		</>
	);
};
