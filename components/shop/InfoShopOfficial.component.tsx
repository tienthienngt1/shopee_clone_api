import { Container } from "components/desktop/common/component";
import Error404 from "components/desktop/common/component/404";
import { convertNumberToK, convertMsToString } from "func";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
	ChatHeart,
	ChatRightDots,
	People,
	PersonCheck,
	PersonPlus,
	PlusCircle,
	Shop,
	Star,
} from "react-bootstrap-icons";
import { resetShopid, setShopid } from "redux/slice/shop/shopid.slice";
import { useThunkDispatch } from "redux/store";
import {
	InfoShopOfficialStyled,
	LogoShopStyled,
	SubInfoShopOfficialStyled,
	WrapInfoShopOfficial,
} from "styled/shop";
import { useGetShopBase } from "swrHooks/useGetShopBase";

const InfoShopOfficial = () => {
	const router = useRouter();
	const dispatch = useThunkDispatch();
	const { data } = useGetShopBase(router.query?.shop?.toString() ?? "");

	useEffect(() => {
		dispatch(setShopid(data?.data?.shopid));
		return () => {
			dispatch(resetShopid());
		};
	}, [dispatch, data?.data?.shopid]);

	return (
		<>
			{data && (
				<WrapInfoShopOfficial>
					<Container>
						<InfoShopOfficialStyled>
							<LogoShopStyled>
								<div className="logo_shop_header">
									<div>
										<div>
											<Image
												src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${data?.data?.account.portrait}`}
												alt={
													data.data?.account.username
												}
												layout="fill"
												objectFit="cover"
											/>
										</div>
									</div>
									<div>
										<p>{data.data?.account.username}</p>
										<p>
											Online{" "}
											{convertMsToString(
												data.data?.last_active_time
											)}
										</p>
									</div>
								</div>
								<div className="logo_shop_footer">
									<button>
										<PlusCircle /> Theo dõi{" "}
									</button>
									<button>
										<ChatHeart /> Chat{" "}
									</button>
								</div>
							</LogoShopStyled>
							<SubInfoShopOfficialStyled>
								<div>
									<div>
										<Shop /> Sản Phẩm:{" "}
										<span>{data.data?.item_count}</span>
									</div>
									<div>
										<People /> Người Theo Dõi:{" "}
										<span>
											{convertNumberToK(
												data.data?.follower_count
											)}
										</span>
									</div>
								</div>
								<div>
									<div>
										<PersonPlus /> Đang Theo Dõi:{" "}
										<span>
											{data.data?.account.following_count}
										</span>
									</div>
									<div>
										<Star /> Đánh Giá:{" "}
										<span>
											{data.data?.rating_star.toFixed(1)}{" "}
											(
											{convertNumberToK(
												data.data?.shop_rating
													.rating_normal +
													data.data?.shop_rating
														.rating_bad +
													data.data?.shop_rating
														.rating_good
											)}{" "}
											Đánh Giá)
										</span>
									</div>
								</div>
								<div>
									<div>
										<ChatRightDots />
										Tỷ Lệ Phản Hồi Chat:{" "}
										<span>
											{data.data?.response_rate}% (Trong
											Vài Giờ)
										</span>
									</div>
									<div>
										<PersonCheck /> Tham Gia:{" "}
										<span>
											{convertMsToString(
												data.data?.ctime
											)}
										</span>
									</div>
								</div>
							</SubInfoShopOfficialStyled>
						</InfoShopOfficialStyled>
					</Container>
				</WrapInfoShopOfficial>
			)}
		</>
	);
};

export default InfoShopOfficial;
