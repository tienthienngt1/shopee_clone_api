import { Container } from "components/desktop/common/component";
import Image from "next/image";
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
import {
	InfoShopOfficialStyled,
	LogoShopStyled,
	SubInfoShopOfficialStyled,
	WrapInfoShopOfficial,
} from "styled/shop/infoShopOfficial.styled";

const InfoShopOfficial = () => {
	return (
		<WrapInfoShopOfficial>
			<Container>
				<InfoShopOfficialStyled>
					<LogoShopStyled>
						<div className="logo_shop_header">
							<div>
								<div>
									<Image
										src="https://cf.shopee.vn/file/c545817f92500922b3918280122355e6_tn"
										alt="avatar_shop"
										layout="fill"
										objectFit="cover"
									/>
								</div>
							</div>
							<div>
								<p>screnfilm.vn</p>
								<p>Online 15 phút trước</p>
							</div>
						</div>
						<div className="logo_shop_footer">
							<button>
								{" "}
								<PlusCircle /> Theo dõi{" "}
							</button>
							<button>
								{" "}
								<ChatHeart /> Chat{" "}
							</button>
						</div>
					</LogoShopStyled>
					<SubInfoShopOfficialStyled>
						<div>
							<div>
								<Shop /> Sản Phẩm: <span>234</span>
							</div>
							<div>
								<People /> Người Theo Dõi: <span>234</span>
							</div>
						</div>
						<div>
							<div>
								<PersonPlus /> Đang Theo Dõi: <span>234</span>
							</div>
							<div>
								<Star /> Đánh Giá:{" "}
								<span>4.9 (53k Đánh Giá)</span>
							</div>
						</div>
						<div>
							<div>
								<ChatRightDots />
								Tỷ Lệ Phản Hồi Chat:{" "}
								<span>94% (Trong Vài Giờ)</span>
							</div>
							<div>
								<PersonCheck /> Tham Gia:{" "}
								<span>5 Năm Trước</span>
							</div>
						</div>
					</SubInfoShopOfficialStyled>
				</InfoShopOfficialStyled>
			</Container>
		</WrapInfoShopOfficial>
	);
};

export default InfoShopOfficial;
