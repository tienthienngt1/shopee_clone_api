import { Search, Cart2 } from "react-bootstrap-icons";
import {
	WrapLogoStyled,
	WrapMainStyled,
	WrapCartStyled,
	WrapSearchStyled,
	WrapSearchInputStyled,
	WrapSearchCategoryStyled,
} from "../styled";
import { LogoSvg } from "components/desktop/common/component";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/">
			<WrapLogoStyled>
				<LogoSvg />
			</WrapLogoStyled>
		</Link>
	);
};

const SearchMain = () => {
	const { placeholder, topSearch } = useSelector(
		(state: RootState) => state.searchPrefill
	);
	return (
		<WrapSearchStyled>
			<WrapSearchInputStyled>
				<div>
					<input placeholder={placeholder} />
				</div>
				<div>
					<Search />
				</div>
			</WrapSearchInputStyled>
			<WrapSearchCategoryStyled>
				{topSearch &&
					topSearch.map((s) => <span key={s.title}>{s.title}</span>)}
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
