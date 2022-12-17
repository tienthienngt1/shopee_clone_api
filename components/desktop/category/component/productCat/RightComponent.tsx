import { useSelector } from "react-redux";
import { ProductCatProps } from ".";
import { RootState } from "redux/store";
import {
	WrapRightComponent,
	WrapRightComponentBody,
	WrapRightComponentHeader,
} from "../../styled";
import { ArrowLeft, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Loading } from "components/desktop/common/component";
import SearchNotFound from "../SearchNotFound";
import Item from "components/desktop/common/component/Item";
import { routerPush } from "func";
import { useEffect, useState, Fragment } from "react";

const RightComponent = ({ router }: ProductCatProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState<number>(1);
	const [pageArr, setPageArr] = useState<number[]>([]);
	const { data, status, total } = useSelector(
		(state: RootState) => state.itemCat
	);
	const filterListArr = [
		{ title: "Phổ biến", id: "pop" },
		{ title: "Mới nhất", id: "ctime" },
		{ title: "Bán chạy", id: "sales" },
	];
	const handleFilter = (id: string, queryWord: string) => {
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
	const handleFilterPage = (id: number, pageid?: number) => {
		let page;
		if (pageid) {
			page = pageid;
		} else if (id) {
			if (currentPage >= totalPage) {
				return;
			}
			page = currentPage + 1;
		} else {
			if (currentPage === 1) return;
			page = currentPage - 1;
		}
		setCurrentPage(page);
		routerPush(
			router,
			{
				...router.query,
				page,
			},
			false
		);
	};
	useEffect(() => {
		setCurrentPage(router.query.page ? Number(router.query.page) : 1);
		setTotalPage(Math.floor(total / 60) + (total % 60 > 0 ? 1 : 0));
	}, [router.query.page, total]);
	useEffect(() => {
		let arr = [];
		for (let i = 1; i <= totalPage; i++) {
			if (currentPage === 1 && i <= 4) arr.push(i);
			else if (Math.abs(i - currentPage) <= 2) arr.push(i);
		}
		if (currentPage - arr[0] > 1) arr.unshift(0);
		if (totalPage - currentPage > 2) arr.push(0);
		setPageArr(arr);
	}, [totalPage, currentPage]);
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
							onClick={() => handleFilter(f.id, "by")}
						>
							{f.title}
						</button>
					))}
					<select
						value={router.query.order}
						onChange={(e) => handleFilter(e.target.value, "order")}
					>
						<option hidden>Giá</option>
						<option value="asc">Giá: Thấp đến Cao</option>
						<option value="desc">Giá: Cao đến Thấp</option>
					</select>
				</div>
				<div className="right_component_header_pagination">
					<>
						{currentPage}/{totalPage}{" "}
						<button
							className={`${currentPage === 1 ? "disable" : ""}`}
							onClick={() => handleFilterPage(0)}
						>
							<ChevronLeft />
						</button>
						<button
							onClick={() => handleFilterPage(1)}
							className={`${
								currentPage >= totalPage ? "disable" : ""
							}`}
						>
							<ChevronRight />
						</button>
					</>
				</div>
			</WrapRightComponentHeader>
			{status === "loading" ? (
				<Loading />
			) : (
				<>
					{data === null ? (
						<SearchNotFound />
					) : (
						<>
							<WrapRightComponentBody>
								{data &&
									data.length > 0 &&
									data.map((d, i) => (
										<div
											key={
												Math.random() *
													9999 *
													d.itemid +
												i
											}
										>
											<Item
												data={d}
												isDisplayHover={false}
											/>
										</div>
									))}
							</WrapRightComponentBody>
							<div className="pagination_page">
								<div onClick={() => handleFilterPage(0)}>
									<ChevronLeft />
								</div>
								{pageArr.map((i) => (
									<Fragment key={Math.random() * 999999 * i}>
										{
											<div
												className={
													currentPage === i
														? "active"
														: ""
												}
												onClick={() =>
													i && handleFilterPage(0, i)
												}
											>
												{i ? i : "..."}
											</div>
										}
									</Fragment>
								))}
								<div onClick={() => handleFilterPage(1)}>
									<ChevronRight />
								</div>
							</div>
						</>
					)}
				</>
			)}
		</WrapRightComponent>
	);
};

export default RightComponent;
