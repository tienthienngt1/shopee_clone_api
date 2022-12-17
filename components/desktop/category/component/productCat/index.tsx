import { NextRouter } from "next/router";
import { WrapProductCat, ProductCatLeft, ProductCatRight } from "../../styled";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

export type ProductCatProps = {
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
