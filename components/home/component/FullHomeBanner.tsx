import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Loading } from "components/common/component";
import { WrapFullHomeBanner, WrapFullScreen } from "../styled";
import Carousel from "./Carousel";
import CategoryBanner from "./CategoryBanner";
import SingleBanner from "./SingleBanner";

export const FullHomeBanner = () => {
	const [banner, setBanner] = useState();

	useEffect(() => {
		axios
			.post("/api/v4/banner/batch_list_by_spaces", {
				spaces: [{ space_key: "PC-VN-HOME_CAROUSEL_01" }],
			})
			.then((res) => setBanner(res.data?.data?.space_banners?.[0]))
			.catch((err) => setBanner(undefined));
	}, []);
	return (
		<>
			<WrapFullScreen>
				<Container>
					{!banner ? (
						<Loading />
					) : (
						<WrapFullHomeBanner>
							<Carousel banner={banner} />
							<div>
								<CategoryBanner />
							</div>
						</WrapFullHomeBanner>
					)}
				</Container>
			</WrapFullScreen>
			<Container>
				<SingleBanner />
			</Container>
		</>
	);
};
