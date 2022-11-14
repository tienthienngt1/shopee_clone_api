import {
	Facebook,
	Instagram,
	Bell,
	QuestionCircle,
	Globe,
	ChevronDown,
} from "react-bootstrap-icons";
import { WrapStyled, WrapSubStyled } from "./SubStyled";

const SubLeft = () => {
	return (
		<WrapStyled>
			<span>Kênh người bán</span>|<span>Trở thành người bán shopee</span>|
			<span>Tải ứng dụng xuống</span>| Kết nối
			<span>
				<Facebook />
			</span>
			<span>
				<Instagram />
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
