import type { NextPage } from "next";
import MainLayout from "layout/MainLayout";
import { Seo, Container, Loading } from "components/commons";
import { FullBannerHome, SingleBanner, CategoryHome, FlashSale, TopSearch, DailyDiscover } from "components/home";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { useBatchListBySpaces } from "swrHooks/banner";
import { useTrendingSearch } from "swrHooks/search/useTrendingSearch";

const Home: NextPage = () => {
	const { isLoading: isLoadingBanner } = useBatchListBySpaces();
	const { isLoading: isLoadingLayout } = useTrendingSearch();
	return (
		<>
			<Seo
				title="Shopee Việt Nam | Mua Và Bán Trên Ứng Dụng Di Động Hoặc Website"
				description="Mua sắm trực tuyến hàng triệu sản phẩm ở tất cả ngành hàng...Giá tốt & nhiều ưu đãi. Mua và bán online trong 30 giây. Shopee đảm bảo nhận hàng hoặc hoàn trả hàng nhanh chóng"
			/>
			{isLoadingBanner || isLoadingLayout ? (
				<div style={{ width: "100%", height: "100vh" }}>
					<Loading />
				</div>
			) : (
				<MainLayout>
					<>
						<FullBannerHome />
						<Container>
							<SingleBanner id={1} />
							<CategoryHome />
							<FlashSale />
							<SingleBanner id={2} />
							<TopSearch />
							<DailyDiscover />
						</Container>
					</>
				</MainLayout>
			)}
		</>
	);
};

export default Home;
