import {
	ProductInfoLeft,
	ProductInfoRight,
	WrapProductInfo,
} from "../../styled";
import { Props } from "../Breadcrumbs";
import ProductInfoImage from "./ProductInfoImage";
import ProductPrimaryInfo from "./ProductPrimaryInfo";

const ProductInfo = (props: Props) => {
	return (
		<WrapProductInfo>
			<ProductInfoLeft>
				<ProductInfoImage {...props} />
			</ProductInfoLeft>
			<ProductInfoRight>
				<ProductPrimaryInfo {...props} />
			</ProductInfoRight>
		</WrapProductInfo>
	);
};

export default ProductInfo;
