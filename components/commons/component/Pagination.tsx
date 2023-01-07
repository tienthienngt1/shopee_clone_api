import { useEffect, useState } from "react";
import { WrapPagination } from "../styled";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

type PaginationT = {
	totalPage: number;
	currentPage: number;
	elementPerPage: number;
	handleSelectPage: (page: number) => void;
};

const Pagination = ({
	totalPage,
	currentPage,
	handleSelectPage,
	elementPerPage,
}: PaginationT) => {
	const [pageArr, setPageArr] = useState<number[]>([]);
	const [isDisplayEllipsis, setDisplayEllipsis] = useState<boolean>(false);
	const [pageFirst, setPageFirst] = useState<number[]>([]);
	const [pageLast, setPageLast] = useState<number[]>([]);

	useEffect(() => {
		const pageArrCoppy = [];
		for (let i = 1; i <= Math.ceil(totalPage / elementPerPage); i++) {
			pageArrCoppy.push(i);
		}
		setPageArr(pageArrCoppy);
	}, [totalPage, elementPerPage]);

	useEffect(() => {
		if (pageArr.length < 5) {
			let first: number[] = [];
			let last: number[] = [];
			pageArr.forEach((p) => {
				if (p >= 3) {
					last.push(p);
				} else {
					first.push(p);
				}
			});
			setPageFirst(first);
			setPageLast(last);
			setDisplayEllipsis(false);
		} else {
			let first: number[];
			if (pageArr.length - currentPage < 4) {
				first = pageArr.slice(-4);
			} else {
				first = pageArr.slice(currentPage - 1);
			}
			first.length > 4
				? setDisplayEllipsis(true)
				: setDisplayEllipsis(false);
			setPageFirst(first.slice(0, 2));
			setPageLast(pageArr.slice(-2));
		}
	}, [pageArr.length, pageArr, currentPage]);

	return (
		<WrapPagination>
			{
				<div
					className={currentPage === 1 ? "disable" : ""}
					onClick={() =>
						currentPage !== 1
							? handleSelectPage(currentPage - 1)
							: undefined
					}
				>
					<ChevronLeft />
				</div>
			}
			{pageFirst.length > 0 &&
				pageFirst.map((p) => (
					<div
						key={p + Math.random() * 9999999}
						className={currentPage === p ? "active" : ""}
						onClick={() => handleSelectPage(p)}
					>
						{p}
					</div>
				))}
			{isDisplayEllipsis && "..."}
			{pageLast.length > 0 &&
				pageLast.map((p) => (
					<div
						key={p + Math.random() * 9999999}
						className={currentPage === p ? "active" : ""}
						onClick={() => handleSelectPage(p)}
					>
						{p}
					</div>
				))}
			{
				<div
					className={
						pageArr.length === 1 || currentPage === pageLast.at(-1)
							? "disable"
							: ""
					}
					onClick={() =>
						pageArr.length === 1 || currentPage === pageLast.at(-1)
							? undefined
							: handleSelectPage(currentPage + 1)
					}
				>
					<ChevronRight />
				</div>
			}
		</WrapPagination>
	);
};

export default Pagination;
