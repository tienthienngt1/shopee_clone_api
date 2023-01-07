import { useEffect, useState } from "react";
import Stars from "components/commons/component/Star";
import ProductRateComment from "./ProductRateComment";
import {
	ProductRateHeader,
	ProductRateTitle,
	WrapProductRate,
} from "../../../styled";
import { RootState, useThunkDispatch } from "redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
	resetProductRating,
	setLoadingComment,
	setProductRating,
	setSelectedRating,
} from "redux/slice/product/productRating";

const ProductRate = () => {
	const [selectedClassName, setClassName] = useState<number>();
	const { data } = useSelector((state: RootState) => state.productRating);
	const item_rating = useSelector(
		(state: RootState) => state.productDetail.data?.item_rating
	);
	const dispatch = useThunkDispatch();
	const router = useRouter();

	const handleFilterRating =
		(type?: number, filter?: number, selectedRating?: number) => () => {
			type && setClassName(type);
			filter && setClassName(10 + filter);
			selectedRating && dispatch(setSelectedRating(selectedRating));
			if (router.asPath) {
				dispatch(setLoadingComment());
				dispatch(
					setProductRating({ router: router.asPath, type, filter })
				);
			}
		};

	// reset data when unmount
	useEffect(() => {
		return () => {
			dispatch(resetProductRating());
		};
	}, [dispatch]);
	return (
		<WrapProductRate>
			<ProductRateTitle>ĐÁNH GIÁ SẢN PHẨM</ProductRateTitle>
			<ProductRateHeader>
				<div>
					<div>
						<span>{item_rating?.rating_star.toFixed(1) ?? 5}</span>
						&nbsp; trên 5
					</div>
					<Stars star={item_rating?.rating_star ?? 5} font="20px" />
				</div>
				<div>
					<div
						className={!selectedClassName ? "active" : ""}
						onClick={handleFilterRating(
							undefined,
							undefined,
							data?.rating_total
						)}
					>
						Tất cả
					</div>
					{data?.rating_count.map((r, k) => (
						<div
							className={
								selectedClassName === k + 1 ? "active" : ""
							}
							key={r + Math.random() * 9999999999}
							onClick={handleFilterRating(k + 1, undefined, r)}
						>{`${k + 1} sao (${r})`}</div>
					))}
					<div
						className={selectedClassName === 11 ? "active" : ""}
						onClick={handleFilterRating(
							undefined,
							1,
							data?.rating_with_context
						)}
					>
						Có Bình Luận ({data?.rating_with_context ?? 0})
					</div>
					<div
						onClick={handleFilterRating(
							undefined,
							3,
							data?.rating_with_media
						)}
						className={selectedClassName === 13 ? "active" : ""}
					>
						Có Hình Ảnh/Video ({data?.rating_with_media ?? 0})
					</div>
				</div>
			</ProductRateHeader>
			<ProductRateComment />
		</WrapProductRate>
	);
};

export default ProductRate;
