import {
	Facebook,
	Instagram,
	Bell,
	QuestionCircle,
	Globe,
	ChevronDown,
} from "react-bootstrap-icons";
import { WrapStyled, WrapSubStyled } from "../styled";

const SubLeft = () => {
	return (
		<WrapStyled>
			<span>
				<a
					href="https://banhang.shopee.vn"
					target="_blank"
					rel="noreferrer"
				>
					Kênh người bán
				</a>
			</span>
			|
			<span>
				<a
					href="https://banhang.shopee.vn"
					target="_blank"
					rel="noreferrer"
				>
					Trở thành người bán shopee
				</a>
			</span>
			|
			<span>
				<a
					href="https://shopee.vn/web"
					target="_blank"
					rel="noreferrer"
				>
					Tải ứng dụng xuống
				</a>
			</span>
			| Kết nối
			<span>
				<a
					href="https://facebook.com/ShopeeVN"
					target="_blank"
					rel="noreferrer"
				>
					<Facebook />
				</a>
			</span>
			<span>
				<a
					href="https://instagram.com/Shopee_VN"
					target="_blank"
					rel="noreferrer"
				>
					<Instagram />
				</a>
			</span>
		</WrapStyled>
	);
};

const SubRight = () => {
	return (
		<WrapStyled>
			<span>
				<Bell /> &ensp; Thông báo
			</span>{" "}
			<span>
				<QuestionCircle /> &ensp; Hỗ Trợ
			</span>{" "}
			<span>
				<Globe />
				&nbsp; Tiếng Việt &nbsp; <ChevronDown />
			</span>{" "}
			<span>Đăng Kí</span> |<span>Đăng Nhập</span>{" "}
		</WrapStyled>
	);
};

const Sub = () => {
	return (
		<WrapSubStyled>
			<SubLeft />
			<SubRight />
		</WrapSubStyled>
	);
};

export default Sub;
