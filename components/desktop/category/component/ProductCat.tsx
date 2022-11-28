import { checkDispatch } from "func";
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";
import {
	CaretRightFill,
	ChevronDown,
	ChevronUp,
	Funnel,
	ListUl,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Data, setCategoryTree } from "redux/slice/categoryTree";
import { setSearchFilter } from "redux/slice/searchFilterCat";
import { RootState, useThunkDispatch } from "redux/store";
import {
	ProductCatRight,
	ProductCatLeft,
	WrapProductCat,
	LeftComponentHeader,
	WrapRightComponent,
	LeftComponentList,
	LeftComponentFilter,
	WrapMoreView,
} from "../styled";

const MoreView = ({ children }: PropsWithChildren) => {
	const [status, setStatus] = useState(false);
	return (
		<WrapMoreView status={status}>
			{children}
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
		checkDispatch(categoryTree.data, dispatch, setCategoryTree);
		id && dispatch(setSearchFilter(id));
		if (categoryTree.data.length > 0 && id) {
			const catFilter = categoryTree.data.filter(
				(d) => d.catid.toString() === id
			);
			setCat(catFilter[0]);
		}
	}, [dispatch, id]);
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
						<Link href={`/${c.catid}`} key={c.catid}>
							<div>{c.display_name}</div>
						</Link>
					))}
				</MoreView>
			</LeftComponentList>
			<LeftComponentHeader>
				<Funnel /> Bộ Lọc Tìm Kiếm
			</LeftComponentHeader>
			<LeftComponentFilter>
				<div className="filter_title">Theo Danh Mục</div>
				<div className="filter_body">
					<MoreView>
						{searchFilter?.data?.facets?.map((f) => (
							<Link href={`/${f.catid}`} key={f.catid}>
								<div>
									<input
										name={f.catid.toString()}
										type="checkbox"
									/>
									<label htmlFor={f.catid.toString()}>
										{f.name}
									</label>
								</div>
							</Link>
						))}
					</MoreView>
				</div>
			</LeftComponentFilter>
		</>
	);
};

const RightComponent = () => {
	return <WrapRightComponent></WrapRightComponent>;
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
