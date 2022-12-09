import NextImage from "next/image";
import { WrapCarouselStyled } from "../styled";
import SlideBanner from "components/desktop/common/component/SlideBanner";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import emptyImage from "public/emptyImage.png";

const Carousel = () => {
	const { carouselBanner } = useSelector(
		(state: RootState) => state.homeBanner
	);
	return (
		<WrapCarouselStyled>
			<SlideBanner data={carouselBanner as any[]} />
			<div>
				<div>
					<a
						href={
							carouselBanner &&
							carouselBanner[carouselBanner?.length - 1]
								?.target_url
						}
						target="_blank"
						rel="noreferrer"
					>
						<div
							style={{
								position: "relative",
								cursor: "pointer",
								height: "100%",
							}}
						>
							<NextImage
								src={
									carouselBanner && carouselBanner?.length > 0
										? carouselBanner[
												carouselBanner?.length - 1
										  ]?.image_url
										: emptyImage
								}
								alt={
									carouselBanner &&
									carouselBanner[carouselBanner?.length - 1]
										?.target_url
								}
								layout="fill"
								priority
							/>
						</div>
					</a>
				</div>
				<div>
					<a
						href={
							carouselBanner &&
							carouselBanner[carouselBanner?.length - 2]
								?.target_url
						}
						target="_blank"
						rel="noreferrer"
					>
						<div
							style={{
								cursor: "pointer",
								position: "relative",
								height: "100%",
							}}
						>
							<NextImage
								src={
									carouselBanner && carouselBanner?.length > 0
										? carouselBanner[
												carouselBanner?.length - 2
										  ]?.image_url
										: emptyImage
								}
								alt={
									carouselBanner &&
									carouselBanner[carouselBanner?.length - 2]
										?.target_url
								}
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

export default Carousel;
