import { RootState, useThunkDispatch } from "redux/store";
import { WrapProductMayLike } from "../../styled/productMayLike";
import { useEffect } from "react";
import { setProductMayLike } from "redux/slice/product/productMayLike";
import { useSelector } from "react-redux";
import Item from "components/desktop/common/component/Item";

const ProductMayLike = () => {
	const dispatch = useThunkDispatch();
	const { data } = useSelector((state: RootState) => state.productMayLike);
	useEffect(() => {
		dispatch(setProductMayLike());
	}, [dispatch]);
	return (
		<WrapProductMayLike>
			<div className="product_may_like_header">CÓ THỂ BẠN CŨNG THÍCH</div>
			<div className="product_may_like_body">
				{data.map((d) => (
					<div key={d.itemid + Math.random() * 99999}>
						<Item data={d} isDisplayHover={false} />
					</div>
				))}
			</div>
			<div>
				<button>Xem Thêm</button>
			</div>
		</WrapProductMayLike>
	);
};

export default ProductMayLike;
