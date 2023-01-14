import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HoverView from "components/commons/HoverView.component";
import Pagination from "components/commons/component/Pagination";
import { Loading } from "components/desktop/common/component";
import Error404 from "components/desktop/common/component/404";
import Item from "components/desktop/common/component/Item";
import {
	ListTask,
	ChevronLeft,
	ChevronRight,
	CaretRightFill,
} from "react-bootstrap-icons";
import {
	ProductShopLeftStyled,
	ProductShopRightStyled,
	WrapProductShop,
} from "styled/shop";
import { useGetProductShop } from "swrHooks";
import { useGetCategoryShop } from "swrHooks/useGetCategoryShop";
import { useRouter } from "next/router";
import { routerPush } from "func";
import { RootState } from "redux/store";
import Lottie from "react-lottie";
import animationData from "lotties/emptyCart.json";

const ProductShopLeft = () => {
	const { shopid } = useSelector((state: RootState) => state.shopid);
	const { data, error, isLoading } = useGetCategoryShop(shopid ?? 1);
	const router = useRouter();

	const handleSelectCat = (id?: number) => () => {
		if (router.query.categoryid === id?.toString()) return;
		const objectQuery = { ...router.query, categoryid: id };
		if (!id) delete objectQuery.categoryid;
		router.push(
			{
				pathname: router.pathname,
				query: objectQuery,
			},
			undefined,
			{ scroll: false }
		);
	};

	return (
		<ProductShopLeftStyled>
			<div className="product_shop_left_header">
				<ListTask /> Danh mục
			</div>
			<div className="product_shop_left_body">
				{isLoading && <Loading />}
				{data && (
					<>
						<div
							className={!router.query.categoryid ? "active" : ""}
							onClick={handleSelectCat()}
						>
							{!router.query.categoryid && <CaretRightFill />}
							Sản Phẩm
						</div>
						{data?.data?.shop_categories?.map((s) => (
							<div
								key={s.image + Math.random() * 999999}
								className={
									router.query.categoryid ===
									s.shop_category_id.toString()
										? "active"
										: ""
								}
								onClick={handleSelectCat(s.shop_category_id)}
							>
								{router.query.categoryid ===
									s.shop_category_id.toString() && (
									<CaretRightFill />
								)}
								{s.display_name}
							</div>
						))}
					</>
				)}
				{error && <Error404 />}
			</div>
		</ProductShopLeftStyled>
	);
};

const ProductShopRight = () => {
	const [titleSort, setTitleSort] = useState("Giá");
	const [catid, setCatid] = useState<string | undefined>();
	const [sort, setSort] = useState<string | undefined>();
	const [currentPage, setCurrentPage] = useState(1);
	const { shopid } = useSelector((state: RootState) => state.shopid);
	const router = useRouter();
	const { data, error, isLoading } = useGetProductShop({
		shopid: shopid ?? 1,
		catid,
		sort,
		page: Number(router.query.page?.toString()),
	});

	const handleFilter = (id?: number) => () => {
		if (router.query.sortBy === id?.toString()) return;
		const objQuery = { ...router.query, sortBy: id };
		if (id === 1) delete objQuery.sortBy;
		routerPush(router, objQuery, false);
	};

	const hanldeSelectPage = (page: number) => {
		setCurrentPage(page);
		routerPush(router, { ...router.query, page }, false);
	};

	useEffect(() => {
		if (!router.query.sortBy) return;
		if (router.query.sortBy === "8") setTitleSort("Từ thấp đến cao");
		else if (router.query.sortBy === "4") setTitleSort("Từ cao đến thấp");
		else {
			setTitleSort("Giá");
		}
	}, [router.query.sortBy]);

	useEffect(() => {
		setCatid(router.query?.categoryid?.toString());
		setCurrentPage(1);
	}, [router.query?.categoryid]);

	useEffect(() => {
		setSort(router.query?.sortBy?.toString());
		setCurrentPage(1);
	}, [router.query?.sortBy]);

	return (
		<ProductShopRightStyled>
			<div className="product_shop_right_header">
				<div>
					<label>Sắp Xếp Theo</label>
					<span
						className={`${
							router.query.sortBy === "1" || !router.query.sortBy
								? "active"
								: ""
						}`}
						onClick={handleFilter(1)}
					>
						Phổ Biến
					</span>
					<span
						onClick={handleFilter(2)}
						className={`${
							router.query.sortBy === "2" ? "active" : ""
						}`}
					>
						Mới Nhất
					</span>
					<span
						onClick={handleFilter(13)}
						className={`${
							router.query.sortBy === "13" ? "active" : ""
						}`}
					>
						Bán Chạy
					</span>
					<span
						className={`${
							router.query.sortBy === "4" ||
							router.query.sortBy === "8"
								? "active"
								: ""
						}`}
					>
						<HoverView
							title={titleSort}
							cat={[
								{ title: "Từ thấp đến Cao", id: 8 },
								{ title: "Từ cao đến thấp", id: 4 },
							]}
							clickFunc={handleFilter}
						/>
					</span>
				</div>
				<div>
					<label>1</label>/5&nbsp;
					<span className="disable">
						<ChevronLeft />
					</span>
					<span>
						<ChevronRight />
					</span>
				</div>
			</div>
			{isLoading && <Loading />}
			{error && <Error404 />}
			{data && (
				<div className="product_shop_right_body">
					{!data?.data?.sections?.[0]?.data?.item && (
						<Lottie
							options={{
								loop: true,
								autoplay: true,
								animationData,
							}}
							width={300}
							height={300}
						/>
					)}
					{data?.data?.sections?.[0]?.data?.item?.map((s) => (
						<Item
							data={s}
							key={s.itemid + Math.random() * 99999}
							isDisplayHover={false}
						/>
					))}
				</div>
			)}
			<div className="product_shop_right_pagination">
				<Pagination
					currentPage={currentPage}
					totalPage={data?.data?.sections?.[0]?.total ?? 1}
					elementPerPage={30}
					handleSelectPage={hanldeSelectPage}
				/>
			</div>
		</ProductShopRightStyled>
	);
};

const ProductShop = () => {
	return (
		<WrapProductShop id="product_list">
			<ProductShopLeft />
			<ProductShopRight />
		</WrapProductShop>
	);
};

export default ProductShop;
