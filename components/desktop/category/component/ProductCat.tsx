import Stars from "components/commons/component/Star";
import { checkDispatch, convertNumberToK } from "func";
import Link from "next/link";
import { Fragment, ReactNode, useEffect, useState, useMemo } from "react";
import {
	CaretRightFill,
	Check,
	ChevronDown,
	ChevronRight,
	ChevronUp,
	Funnel,
	ListUl,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Data, setCategoryTree } from "redux/slice/home/categoryTree";
import { setSearchFilter } from "redux/slice/category/searchFilterCat";
import { RootState, useThunkDispatch } from "redux/store";
import { ChevronLeft } from "react-bootstrap-icons";
import {
	ProductCatRight,
	ProductCatLeft,
	WrapProductCat,
	LeftComponentHeader,
	WrapRightComponent,
	LeftComponentList,
	LeftComponentFilter,
	WrapMoreView,
	WrapRightComponentHeader,
	WrapRightComponentBody,
} from "../styled";
import Item from "components/desktop/common/component/Item";
import { convertIdToUrl } from "func/convertIdToUrl";
import { Loading } from "components/desktop/common/component";
import { NextRouter } from "next/router";

type MoreViewType = {
	children: ReactNode;
	display?: boolean;
};

const MoreView = ({ children, display }: MoreViewType) => {
	const [status, setStatus] = useState(false);
	return (
		<WrapMoreView status={status}>
			{children}
			{display && (
				<span onClick={() => setStatus(!status)}>
					{!status ? (
						<>
							Xem thêm &nbsp; <ChevronDown />
						</>
					) : (
						<>
							Thu gọn &nbsp; <ChevronUp />
						</>
					)}
				</span>
			)}
		</WrapMoreView>
	);
};

const LeftComponent = ({ router }: ProductCatProps) => {
	const [cat, setCat] = useState<Data>();
	const dispatch = useThunkDispatch();
	const categoryTree = useSelector((state: RootState) => state.categoryTree);
	const searchFilter = useSelector((state: RootState) => state.searchFilter);
	// get id Cat to filter for category
	const idCat = useMemo(
		() => router.query.category?.toString()?.split(".")?.[1],
		[router.query.category]
	);
	// get id Cat item to filter for category
	const idItem = useMemo(
		() => router.query.category?.toString()?.split(".")?.[2],
		[router.query.category]
	);
	// filter category by icCat from category tree
	categoryTree.data.length > 0 &&
		categoryTree.data.filter((d) => d.catid.toString() === idCat);

	useEffect(() => {
		if (!idCat) return;
		//check if don't have category tree, we will get it
		checkDispatch(categoryTree.data, dispatch, setCategoryTree);
		// check if have idItem, we will get search filter by idItem without get by idcat
		dispatch(setSearchFilter(idItem ? idItem : idCat));
		// filter menu of category
		if (categoryTree.data.length > 0 && idCat) {
			const catFilter = categoryTree.data.filter(
				(d) => d.catid.toString() === idCat
			);
			setCat(catFilter[0]);
		}
	}, [dispatch, idCat, idItem]);

	//handle search params
	const handleSearchParams = (id: number | string, queryWord: string) => {
		const targetQuery = router.query[queryWord]?.toString();
		//params primary
		const primaryQuery = {
			...router.query,
			by: "pop",
			newest: "0",
			order: "desc",
		};
		let queryWordValue;
		//check click 2 times and handle
		// hash locations query to match api
		if (queryWord === "locations") {
			if (targetQuery) {
				let queryWordValueArr = targetQuery.split(",");
				const indexOfId = queryWordValueArr.indexOf(
					encodeURIComponent(id.toString())
				);
				if (indexOfId > -1) queryWordValueArr.splice(indexOfId, 1);
				else queryWordValueArr.push(encodeURIComponent(id.toString()));
				queryWordValue = queryWordValueArr.toString();
			} else {
				queryWordValue = encodeURIComponent(id);
			}
		} else {
			if (targetQuery) {
				const targetQueryArr = targetQuery.split(",");
				const indexOfId = targetQuery.indexOf(id.toString());
				if (indexOfId > -1) targetQueryArr.splice(indexOfId, 1);
				else targetQueryArr.push(id.toString());
				queryWordValue = targetQueryArr.toString();
			} else {
				queryWordValue = id;
			}
		}
		const extraQuery = { [queryWord]: queryWordValue };
		const query = { ...primaryQuery, ...extraQuery };
		Object.keys(query).forEach(
			//@ts-ignore
			(k) => query[k] === "" && delete query[k]
		);

		router.push(
			{
				pathname: router.pathname,
				query: JSON.parse(JSON.stringify(query)),
			},
			undefined,
			{ scroll: false }
		);
	};

	//handle button clear all filter
	const handleClearAll = () => {
		router.push({
			pathname: router.pathname,
			query: {
				category: router.query.category,
			},
		});
	};

	//handle display checked icon
	const checkedWordIntoArr = (queryWord: string, id: string | number) => {
		let queryWordValue;
		if (queryWord === "locations") {
			queryWordValue = decodeURIComponent(
				router.query[queryWord]?.toString() || ""
			);
		} else {
			queryWordValue = router.query[queryWord]?.toString();
		}
		const result = queryWordValue?.indexOf(id.toString());
		if (result !== undefined && result >= 0) return true;
		return false;
	};

	return (
		<>
			<LeftComponentHeader>
				<ListUl /> Tất Cả Danh Mục
			</LeftComponentHeader>
			<LeftComponentList>
				<Link
					href={convertIdToUrl(cat?.display_name, cat?.catid)}
					scroll={false}
				>
					{!idItem ? (
						<div className="active">
							<CaretRightFill /> &nbsp;
							{cat && cat.display_name}
						</div>
					) : (
						<div>{cat && cat.display_name}</div>
					)}
				</Link>
				<MoreView>
					{cat?.children?.map((c) => (
						<Link
							href={convertIdToUrl(
								c.display_name,
								c.parent_catid,
								c.catid
							)}
							scroll={false}
							key={c.catid + Math.random() * 1000000}
						>
							{idItem && Number(idItem) === c.catid ? (
								<div className="active">
									<CaretRightFill /> &nbsp;{c.display_name}
								</div>
							) : (
								<div>{c.display_name}</div>
							)}
						</Link>
					))}
				</MoreView>
			</LeftComponentList>
			<LeftComponentHeader>
				<Funnel /> BỘ LỌC TÌM KIẾM
			</LeftComponentHeader>
			<LeftComponentFilter>
				{searchFilter.data?.length > 0 &&
					searchFilter.data.map((d, i) => (
						<Fragment key={Math.random() * 99999999 + i}>
							<div className="filter_title">{d?.title} </div>
							<div className="filter_body">
								<MoreView display={i === 3 ? false : true}>
									{d?.items?.map((item) => (
										<div key={Math.random() * 99999999999}>
											<div
												className="checkbox_label"
												onClick={() =>
													handleSearchParams(
														item.id,
														d.queryWord
													)
												}
											>
												<div>
													{checkedWordIntoArr(
														d.queryWord,
														item.id
													) && <Check />}
												</div>
												<div>
													{item.name}{" "}
													{item.count &&
														`(${convertNumberToK(
															item.count,
															1
														)}+)`}
												</div>
											</div>
										</div>
									))}
								</MoreView>
							</div>
						</Fragment>
					))}
				<div className="filter_title">Khoảng Giá</div>
				<div className="filter_body">
					<div className="filter_price">
						<div>
							<input placeholder="&#8363; &nbsp;TỪ" /> -
							<input placeholder="&#8363; &nbsp;ĐẾN" />
						</div>
						<div>Áp dụng</div>
					</div>
				</div>
				<div className="filter_title">Đánh giá</div>
				<div className="filter_body">
					{[5, 4, 3, 2, 1].map((s) => (
						<div
							className="filter_star"
							key={Math.random() * 99999999}
						>
							<Stars font="1rem" star={s} />{" "}
							{s === 5 ? "" : "Trở lên"}
						</div>
					))}
				</div>
				<div
					className="filter_clear_all_button"
					onClick={handleClearAll}
				>
					Xoá Tất Cả
				</div>
			</LeftComponentFilter>
		</>
	);
};

const RightComponent = ({ router }: ProductCatProps) => {
	const { data, status, total } = useSelector(
		(state: RootState) => state.itemCat
	);
	const filterListArr = [
		{ title: "Phổ biến", id: "pop" },
		{ title: "Mới nhất", id: "ctime" },
		{ title: "Bán chạy", id: "sales" },
	];
	const handleClickFilter = (id: string, queryWord: string) => {
		router.push(
			{
				pathname: router.pathname,
				query: {
					...router.query,
					by: "price",
					[queryWord]: id,
					newest: "0",
				},
			},
			undefined,
			{ scroll: false }
		);
	};
	return (
		<WrapRightComponent>
			<WrapRightComponentHeader>
				<div className="right_component_header_filter">
					<span>Sắp xếp theo</span>
					{filterListArr.map((f) => (
						<button
							key={f.id + Math.random() * 9999999}
							className={
								router.query?.by === f.id ||
								(!router.query.by && f.id === "pop")
									? "active"
									: undefined
							}
							onClick={() => handleClickFilter(f.id, "by")}
						>
							{f.title}
						</button>
					))}
					<select
						value={router.query.order}
						onChange={(e) =>
							handleClickFilter(e.target.value, "order")
						}
					>
						<option hidden>Giá</option>
						<option value="asc">Giá: Thấp đến Cao</option>
						<option value="desc">Giá: Cao đến Thấp</option>
					</select>
				</div>
				<div className="right_component_header_pagination">
					1/{Math.floor(total / 50 - 1)}{" "}
					<button>
						<ChevronLeft />
					</button>
					<button>
						<ChevronRight />
					</button>
				</div>
			</WrapRightComponentHeader>
			{status === "loading" ? (
				<Loading />
			) : (
				<WrapRightComponentBody>
					{data &&
						data.length > 0 &&
						data.map((d, i) => (
							<div key={d.itemid + i}>
								<Item data={d} isDisplayHover={false} />
							</div>
						))}
				</WrapRightComponentBody>
			)}
		</WrapRightComponent>
	);
};

type ProductCatProps = {
	idCat: string | undefined;
	idItem: string | undefined;
	router: NextRouter;
};

const ProductCat = (props: ProductCatProps) => {
	return (
		<>
			<WrapProductCat>
				<ProductCatLeft>
					<LeftComponent {...props} />
				</ProductCatLeft>
				<ProductCatRight>
					<RightComponent {...props} />
				</ProductCatRight>
			</WrapProductCat>
		</>
	);
};

export default ProductCat;
