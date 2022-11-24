import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import MainLayout from "layout/MainLayout";
import { useRouter } from "next/router";
import Error404 from "components/desktop/common/component/404";
import BannerSlide from "components/desktop/category/component/BannerSlide";
import { Container, Loading, Seo } from "components/desktop/common/component";
import ShopeeMall from "components/desktop/category/component/ShopeeMall";
import PopularCollection from "components/desktop/category/component/PopularCollection";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Category: NextPage = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(true);
	const query = router.query.category?.toString()?.split(".");
	useEffect(() => {
		if (!router.query.category) return;
		setLoading(false);
	}, [router.query]);
	if (loading) return <Loading />;
	if (!router.query.category?.includes("cat")) return <Error404 />;
	return (
		<>
			{" "}
			<Seo
				title={query?.[0] as string}
				description={`Shopee sàn thương mại mua bán online, ${query?.[0]}`}
			/>
			<MainLayout>
				<Container>
					<BannerSlide id={query?.[1]} />
					<ShopeeMall id={query?.[1]} />
					<PopularCollection id={query?.[1]} />
				</Container>
			</MainLayout>
		</>
	);
};

export default Category;
