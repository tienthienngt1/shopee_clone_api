import type { NextPage } from "next";
import { FullHomeBanner } from "components/home/component";
import MainLayout from "layout/MainLayout";
import { Seo } from "components/common/component/Seo";

const Home: NextPage = () => {
	return (
		<>
			<Seo
				title="Shopee Việt Nam | Mua Và Bán Trên Ứng Dụng Hoặc Website"
				description="Mua sắm trực tuyến hàng triệu sản phẩm ở tất cả ngành hàng...Giá tốt & nhiều ưu đãi. Mua và bán online trong 30 giây. Shopee đảm bảo nhận hàng hoặc hoàn trả hàng"
			/>
			<MainLayout>
				<FullHomeBanner />
			</MainLayout>
		</>
	);
};

export default Home;
