import { Fragment } from "react";
import { WrapBreadcrumbs } from "../styled";
import { ChevronRight } from "react-bootstrap-icons";
import Link from "next/link";
import { convertIdToUrl } from "func";
import { ProductDetailData } from "redux/slice/product/productDetail";

export type Props = {
	data: ProductDetailData | null;
};

const Breadcrumbs = ({ data }: Props) => {
	return (
		<WrapBreadcrumbs>
			<div>
				<Link href="/">Shopee</Link>
			</div>
			{data?.categories.map((c) => (
				<Fragment key={Math.random() * 99999999 + c.catid}>
					<ChevronRight />
					<div>
						<Link href={convertIdToUrl(c.display_name, c.catid)}>
							{c.display_name}
						</Link>
					</div>
				</Fragment>
			))}
			<ChevronRight />
			<p>{data?.name}</p>
		</WrapBreadcrumbs>
	);
};

export default Breadcrumbs;
