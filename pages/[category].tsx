import { useEffect, useState } from "react";
import type { NextPage } from "next";
import MainLayout from "layout/MainLayout";
import { useRouter } from "next/router";
import Error404 from "components/desktop/common/component/404";
import BannerSlide from "components/desktop/category/component/BannerSlide";
import { Container, Loading, Seo } from "components/desktop/common/component";
import ShopeeMall from "components/desktop/category/component/ShopeeMall";
import ProductCat from "components/desktop/category/component/ProductCat";
import ToTopButton from "components/commons/component/ToTopButton";
import PopularCollection from "components/desktop/category/component/PopularCollection";
import MessFb from "components/commons/component/MessFb";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useThunkDispatch } from "redux/store";
import { setItemCat, setLoadingItemCat } from "redux/slice/category/itemCat";

const Category: NextPage = () => {
	const dispatch = useThunkDispatch();
	const {
		query: { category },
	} = useRouter();
	const [loading, setLoading] = useState<boolean>(true);
	const [query, setQuery] = useState<string[]>([]);
	useEffect(() => {
		if (!category) return;
		// split category for get id category
		const query = category?.toString()?.split(".");
		dispatch(setLoadingItemCat());
		if (query?.[2]) {
			dispatch(setItemCat(query[2]));
		} else {
			dispatch(setItemCat(query[1]));
		}
		setQuery(query);
		setLoading(false);
	}, [dispatch, category]);
	if (loading) return <Loading />;
	if (!category?.includes("cat")) return <Error404 />;
	return (
		<>
			<Seo
				title={`Mua sắm online sản phẩm | ${query?.[0]
					?.replaceAll("-", " ")
					.replace("cat", "")} giá tốt | Shopee Việt Nam`}
				description={`Shopee sàn thương mại mua bán online, ${query?.[0]}`}
			/>
			<MainLayout>
				<Container>
					<BannerSlide id={query?.[1]} />
					<ShopeeMall id={query?.[1]} />
					<PopularCollection id={query?.[1]} />
					<ProductCat idCat={query?.[1]} idItem={query?.[2]} />
				</Container>
			</MainLayout>
			<ToTopButton />
			{/* <MessFb /> */}
		</>
	);
};

export default Category;
