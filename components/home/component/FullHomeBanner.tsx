import { Container } from "components/common/component";
import { WrapFullHomeBanner, WrapFullScreen } from "../styled";
import Carousel from "./Carousel";
import CategoryBanner from "./CategoryBanner";

export const FullHomeBanner = () => {
	return (
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
	);
};
