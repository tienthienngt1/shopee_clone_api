import { useEffect } from "react";
import {
	ProductShopInfoLeft,
	ProductShopInfoRight,
	WrapProductShopInfo,
} from "../styled";
import { ChatLeftDotsFill, Shop } from "react-bootstrap-icons";
import Image from "next/image";
import { RootState, useThunkDispatch } from "redux/store";
import { resetShop, setShop } from "redux/slice/product/shop";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { convertNumberToK } from "func";
import { convertMsToString } from "func/convertMsToString";
import Link from "next/link";
const ProductShopInfo = () => {
	const dispatch = useThunkDispatch();
	const router = useRouter();
	const { data } = useSelector((state: RootState) => state.shop);

	useEffect(() => {
		const shopid = router.asPath?.split(".").at(-2);
		shopid && dispatch(setShop(shopid));
		return () => {
			dispatch(resetShop());
		};
	}, [router.asPath, dispatch]);

	return (
		<WrapProductShopInfo>
			<ProductShopInfoLeft>
				<div>
					<div>
						<Image
							src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${data?.avatar}`}
							alt="shop_name"
							width={80}
							height={80}
							priority
						/>
					</div>
					{data?.is_official_shop && (
						<div className="official_shop">Yêu thích</div>
					)}
				</div>
				<div>
					<div>{data?.username}</div>
					<div>
						Online{" "}
						{convertMsToString(data?.last_active_time ?? 850)}
					</div>
					<div>
						<div>
							<ChatLeftDotsFill /> &nbsp; Chat Ngay
						</div>
						<div>
							<Link href={`/shop/${data?.username}`}>
								<a>
									<Shop /> &nbsp; Xem Shop
								</a>
							</Link>
						</div>
					</div>
				</div>
			</ProductShopInfoLeft>
			<ProductShopInfoRight>
				<div>
					<div>
						Đánh Giá:{" "}
						<span>{convertNumberToK(data?.rating ?? 1000)}</span>
					</div>
					<div>
						Tỷ Lệ Phản Hồi:{" "}
						<span>{data?.response_rate ?? 80}%</span>{" "}
					</div>
					<div>
						Tham Gia:{" "}
						<span>
							{convertMsToString(data?.ctime ?? 85000000)}
						</span>
					</div>
				</div>
				<div>
					<div>
						Sản Phẩm:{" "}
						<span>
							{convertNumberToK(data?.item_count ?? 1000)}
						</span>
					</div>
					<div>
						Thời Gian Phản Hồi: <span>trong vài giờ</span>
					</div>
					<div>
						Người theo dõi:{" "}
						<span>
							{convertNumberToK(data?.follower_count ?? 1000)}
						</span>{" "}
					</div>
				</div>
			</ProductShopInfoRight>
		</WrapProductShopInfo>
	);
};

export default ProductShopInfo;
