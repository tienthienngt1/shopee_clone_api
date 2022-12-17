import { useRef, useState, useMemo, useEffect, Fragment } from "react";
import { RootState, useThunkDispatch } from "redux/store";
import { Data, setCategoryTree } from "redux/slice/home/categoryTree";
import { useSelector } from "react-redux";
import { ProductCatProps } from ".";
import {
	checkDispatch,
	convertIdToUrl,
	convertNumberToK,
	routerPush,
} from "func";
import { setSearchFilter } from "redux/slice/category/searchFilterCat";
import {
	LeftComponentFilter,
	LeftComponentHeader,
	LeftComponentList,
} from "../../styled";
import { CaretRightFill, Check, Funnel, ListUl } from "react-bootstrap-icons";
import Link from "next/link";
import MoreView from "./MoreView";
import Stars from "components/commons/component/Star";

const LeftComponent = ({ router }: ProductCatProps) => {
	const priceMinRef = useRef(null);
	const priceMaxRef = useRef(null);
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
		routerPush(router, JSON.parse(JSON.stringify(query)), false);
	};

	//handle button clear all filter
	const handleClearAll = () => {
		routerPush(router, { category: router.query.category }, false);
	};

	//handle filter by price range
	const handleFilterPriceRange = () => {
		//@ts-ignore
		const priceMinValue = priceMinRef.current?.value;
		//@ts-ignore
		const priceMaxValue = priceMaxRef.current?.value;
		if (!priceMaxValue || !priceMinRef) return;
		routerPush(
			router,
			{
				...router.query,
				price_min: priceMinValue,
				price_max: priceMaxValue,
			},
			false
		);
	};

	//handle filter by rating
	const handleFilerRating = (id: number) => {
		routerPush(router, { ...router.query, rating_filter: id }, false);
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
							<input
								ref={priceMinRef}
								required
								placeholder="&#8363; &nbsp;TỪ"
							/>{" "}
							-
							<input
								required
								ref={priceMaxRef}
								placeholder="&#8363; &nbsp;ĐẾN"
							/>
						</div>
						<div onClick={() => handleFilterPriceRange()}>
							Áp dụng
						</div>
					</div>
				</div>
				<div className="filter_title">Đánh giá</div>
				<div className="filter_body">
					{[5, 4, 3, 2, 1].map((s) => (
						<div key={Math.random() * 99999999}>
							<div
								className={`filter_star ${
									router.query?.rating_filter ===
										s.toString() && "active"
								}`}
								onClick={() => handleFilerRating(s)}
							>
								<Stars font="1rem" star={s} />{" "}
								{s === 5 ? "" : "Trở lên"}
							</div>
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

export default LeftComponent;
