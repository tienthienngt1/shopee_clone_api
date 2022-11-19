import type { NextPage } from "next";
import MainLayout from "layout/MainLayout";
import { Seo, Container } from "components/common/component";
import {
	FullHomeBanner,
	SingleBanner,
	CategoryHome,
	FlashSale,
	TopSearch,
} from "components/home/component";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import DailyDiscover from "components/home/component/DailyDiscover";

const Home: NextPage = () => {
	return (
		<>
			<Seo
				title="Shopee Việt Nam | Mua Và Bán Trên Ứng Dụng Di Động Hoặc Website"
				description="Mua sắm trực tuyến hàng triệu sản phẩm ở tất cả ngành hàng...Giá tốt & nhiều ưu đãi. Mua và bán online trong 30 giây. Shopee đảm bảo nhận hàng hoặc hoàn trả hàng"
			/>
			<MainLayout>
				<FullHomeBanner />
				<Container>
					<SingleBanner id={1} />
					<CategoryHome />
					<FlashSale />
					<SingleBanner id={2} />
					<TopSearch />
					<DailyDiscover />
				</Container>
			</MainLayout>
		</>
	);
};

export default Home;
