import { Search, Cart2 } from "react-bootstrap-icons";
import {
	WrapLogoStyled,
	WrapMainStyled,
	WrapCartStyled,
	WrapSearchStyled,
	WrapSearchInputStyled,
	WrapSearchCategoryStyled,
} from "./MainStyled";
import { LogoSvg } from "components/common/component";

const Logo = () => {
	return (
		<WrapLogoStyled>
			<LogoSvg />
		</WrapLogoStyled>
	);
};

const SearchMain = () => {
	return (
		<WrapSearchStyled>
			<WrapSearchInputStyled>
				<div>
					<input placeholder="Đăng kí và nhận voucher bạn mới đến 70k!" />
				</div>
				<div>
					<Search />
				</div>
			</WrapSearchInputStyled>
			<WrapSearchCategoryStyled>
				<span>Áo Khoác</span>
				<span>Dép</span>
				<span>Túi Xách Nữ</span>
				<span>Áo Croptop</span>
				<span>Áo Khoác Nam</span>
				<span>Váy</span>
				<span>Ốp Iphone</span>
				<span>Bánh Tráng Phơi Sương</span>
			</WrapSearchCategoryStyled>
		</WrapSearchStyled>
	);
};

const Cart = () => {
	return (
		<WrapCartStyled>
			<Cart2 />
		</WrapCartStyled>
	);
};

const Main = () => {
	return (
		<WrapMainStyled>
			<Logo />
			<SearchMain />
			<Cart />
		</WrapMainStyled>
	);
};

export default Main;
