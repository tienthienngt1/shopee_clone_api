import Stars from "components/commons/component/Star";
import { checkDispatch } from "func";
import Link from "next/link";
import { Fragment, ReactNode, useEffect, useState } from "react";
import {
	CaretRightFill,
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

type LeftComponentProps = {
	id: string | undefined;
};

const LeftComponent = ({ id }: LeftComponentProps) => {
	const [cat, setCat] = useState<Data>();
	const dispatch = useThunkDispatch();
	const { categoryTree, searchFilter } = useSelector(
		(state: RootState) => state
	);
	categoryTree.data.length > 0 &&
		categoryTree.data.filter((d) => d.catid.toString() === id);
	useEffect(() => {
		console.log("useEffect");

		checkDispatch(categoryTree.data, dispatch, setCategoryTree);
		id && dispatch(setSearchFilter(id));
		if (categoryTree.data.length > 0 && id) {
			const catFilter = categoryTree.data.filter(
				(d) => d.catid.toString() === id
			);
			setCat(catFilter[0]);
		}
	}, [dispatch, id, categoryTree.data]);
	return (
		<>
			<LeftComponentHeader>
				<ListUl /> Tất Cả Danh Mục
			</LeftComponentHeader>
			<LeftComponentList>
				<div>
					<CaretRightFill /> &nbsp; {cat && cat.display_name}
				</div>
				<MoreView>
					{cat?.children?.map((c, k) => (
						<Link
							href={`/${c.catid + k + Math.random() * 999999}`}
							key={c.catid + Math.random() * 1000000}
						>
							<div>{c.display_name}</div>
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
							<div className="filter_title">{d?.title}</div>
							<div className="filter_body">
								<MoreView display={i === 3 ? false : true}>
									{d?.items?.map((item, i) => (
										<Fragment key={item.id}>
											<Link href="#">
												<div>
													<input
														name={item.name + i}
														type="checkbox"
													/>
													<label
														htmlFor={item.name + i}
													>
														{item.name}
													</label>
												</div>
											</Link>
										</Fragment>
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
			</LeftComponentFilter>
		</>
	);
};

const RightComponent = () => {
	const {
		itemCat: { data },
	} = useSelector((state: RootState) => state);
	console.log(data);

	return (
		<WrapRightComponent>
			<WrapRightComponentHeader>
				<div className="right_component_header_filter">
					<span>Sắp xếp theo</span>
					<button>Mới nhất</button>
					<button>Phổ biến</button>
					<button>Bán chạy</button>
					<select>
						<option hidden>Giá</option>
						<option defaultValue={1}>Giá: Thấp đến Cao</option>
						<option defaultValue={2}>Giá: Cao đến Thấp</option>
					</select>
				</div>
				<div className="right_component_header_pagination">
					1/9{" "}
					<button>
						<ChevronLeft />
					</button>
					<button>
						<ChevronRight />
					</button>
				</div>
			</WrapRightComponentHeader>
			<WrapRightComponentBody>
				{data &&
					data.length > 0 &&
					data.map((d) => (
						<div key={d.itemid}>
							<Item data={d} isDisplayHover={false} />
						</div>
					))}
			</WrapRightComponentBody>
		</WrapRightComponent>
	);
};

type Props = { id: string | undefined };

const ProductCat = ({ id }: Props) => {
	return (
		<>
			<WrapProductCat>
				<ProductCatLeft>
					<LeftComponent id={id} />
				</ProductCatLeft>
				<ProductCatRight>
					<RightComponent />
				</ProductCatRight>
			</WrapProductCat>
		</>
	);
};

export default ProductCat;
