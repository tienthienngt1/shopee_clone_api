import { Search, Cart2 } from "react-bootstrap-icons";
import { WrapLogoStyled, WrapMainStyled, WrapCartStyled, WrapSearchStyled, WrapSearchInputStyled, WrapSearchCategoryStyled } from "styled/layout/header";
import { LogoSvg } from "components/desktop/common/component";
import Link from "next/link";
import { useSearchPrefill } from "swrHooks/search/useSearchPrefill";
import { useTrendingSearch } from "swrHooks/search/useTrendingSearch";

const Logo = () => {
	return (
		<WrapLogoStyled>
			<Link href="/">
				<a>
					<LogoSvg />
				</a>
			</Link>
		</WrapLogoStyled>
	);
};

const SearchMain = () => {
	const { data: placeholder } = useSearchPrefill();
	const { data: trendingSearch } = useTrendingSearch();
	return (
		<WrapSearchStyled>
			<WrapSearchInputStyled>
				<div>
					<input placeholder={placeholder?.data?.items?.[0].hint} />
				</div>
				<div>
					<Search />
				</div>
			</WrapSearchInputStyled>
			<WrapSearchCategoryStyled>{trendingSearch && trendingSearch?.data?.querys?.map((s) => <span key={s.text + s.count}>{s.text}</span>)}</WrapSearchCategoryStyled>
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
