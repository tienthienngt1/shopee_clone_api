import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import MainLayout from "layout/MainLayout";
import { useRouter } from "next/router";
import Error404 from "components/desktop/common/component/404";
import BannerSlide from "components/desktop/category/component/BannerSlide";
import { Container, Loading } from "components/desktop/common/component";
import ShopeeMall from "components/desktop/category/component/ShopeeMall";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Category: NextPage = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(true);
	const id = router.query.category?.toString()?.split(".")?.[1];
	useEffect(() => {
		if (!router.query.category) return;
		setLoading(false);
	}, [router.query]);
	if (loading) return <Loading />;
	if (!router.query.category?.includes("cat")) return <Error404 />;
	return (
		<MainLayout>
			<Container>
				<BannerSlide id={id} />
				<ShopeeMall id={id} />
			</Container>
		</MainLayout>
	);
};

export default Category;
