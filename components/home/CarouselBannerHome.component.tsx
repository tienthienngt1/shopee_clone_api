import { WrapCategoryBannerStyled } from "styled/home";
import NextImage from "next/image";
import { useBatchList } from "swrHooks/banner";

const CarouselBannerHome = () => {
	const { data } = useBatchList();
	return (
		<WrapCategoryBannerStyled>
			{data?.data?.banners[0]?.banners?.map((res) => (
				<div key={res.banner_image}>
					<a href={res.navigate_params.url} target="_blank" rel="noreferrer">
						<div style={{ position: "relative" }}>
							<NextImage src={res.banner_image} alt={res.banner_image} width="40" height="40" priority />
						</div>
						<div>{JSON.parse(res.navigate_params.navbar.title).vi}</div>
					</a>
				</div>
			))}
		</WrapCategoryBannerStyled>
	);
};

export default CarouselBannerHome;
