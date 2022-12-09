import React from "react";
import {
	FooterEndBottom,
	FooterEndHeader,
	FooterEndBody,
	WrapFooterEnd,
} from "../styled";
import NextImage from "next/image";

type Props = {};

const FooterEnd = (props: Props) => {
	return (
		<WrapFooterEnd>
			<FooterEndHeader>
				<div>CHÍNH SÁCH BẢO MẬT</div> |<div> QUY CHẾ HOẠT ĐỘNG</div> |
				<div>CHÍNH SÁCH VẬN CHUYÊN</div> |
				<div>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</div>
			</FooterEndHeader>
			<FooterEndBody>
				<div>
					<NextImage
						src="/bct.png"
						alt="ceritficate"
						width={130}
						height={45}
						priority
					/>
				</div>
				<div>
					<NextImage
						src="/bct.png"
						alt="ceritficate"
						width={130}
						height={45}
						priority
					/>
				</div>
				<div>
					<NextImage
						src="/cicle.png"
						alt="ceritficate"
						width={50}
						height={50}
						priority
					/>
				</div>
			</FooterEndBody>
			<FooterEndBottom>
				<div>Công ty TNHH Shopee</div>
				<div>
					Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu
					Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội,
					Việt Nam. Tổng đài hỗ trợ: 19001221 - Email:
					cskh@hotro.shopee.vn
				</div>
				<div>
					Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện
					thoại liên hệ: 024 73081221 (ext 4678)
				</div>
				<div>
					Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà
					Nội cấp lần đầu ngày 10/02/2015
				</div>
				<div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
			</FooterEndBottom>
		</WrapFooterEnd>
	);
};

export default FooterEnd;
