import { useEffect } from "react";
import { NextPage } from "next";
import MainLayout from "layout/MainLayout";
import {
	ApiError,
	Container,
	Loading,
	Seo,
} from "components/desktop/common/component";
import FlashsaleHeader from "components/desktop/flashsale/component/FlashsaleHeader";
import FlashsaleTimeNav from "components/desktop/flashsale/component/FlashsaleTimeNav";
import FlashsaleCategoryNav from "components/desktop/flashsale/component/FlashsaleCategoryNav";
import FlashsaleItems from "components/desktop/flashsale/component/FlashsaleItems";
import { useThunkDispatch } from "redux/store";
import {
	getAllSessionFlashSale,
	setStateLoading,
} from "redux/slice/flashsale/allSession";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { getAllItemids } from "redux/slice/flashsale/allItemids";
import { useRouter } from "next/router";

const FlashSale: NextPage = () => {
	const router = useRouter();
	const dispatch = useThunkDispatch();
	const { status } = useSelector((state: RootState) => state.allSession);

	// dispatch to get session and item when promotionId change
	useEffect(() => {
		if (router.query.promotionId) {
			dispatch(setStateLoading());
			dispatch(getAllSessionFlashSale());
			dispatch(getAllItemids(router.query.promotionId.toString()));
		}
	}, [dispatch, router.query.promotionId]);

	return (
		<>
			<Seo title="flashsale" description="Shopee" />
			<MainLayout fixed={false}>
				<FlashsaleHeader />
				<Container>
					{status === "loading" ? (
						<Loading />
					) : status === "fulfilled" ? (
						<>
							<FlashsaleTimeNav />
							<FlashsaleCategoryNav />
							<FlashsaleItems />
						</>
					) : (
						<ApiError />
					)}
				</Container>
			</MainLayout>
		</>
	);
};

export default FlashSale;
