import { useEffect } from "react";
import { Search, Cart2 } from "react-bootstrap-icons";
import {
	WrapLogoStyled,
	WrapMainStyled,
	WrapCartStyled,
	WrapSearchStyled,
	WrapSearchInputStyled,
	WrapSearchCategoryStyled,
} from "../styled";
import { LogoSvg } from "components/common/component";
import { RootState, useThunkDispatch } from "redux/store";
import { setSearchPrefill } from "redux/slice/searchPrefill";
import { useSelector } from "react-redux";

const Logo = () => {
	return (
		<WrapLogoStyled>
			<LogoSvg />
		</WrapLogoStyled>
	);
};

const SearchMain = () => {
	const { placeholder, topSearch } = useSelector(
		(state: RootState) => state.searchPrefill
	);
	const dispatch = useThunkDispatch();
	useEffect(() => {
		dispatch(setSearchPrefill());
	}, [dispatch]);
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