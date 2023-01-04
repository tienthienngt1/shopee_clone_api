import { ReactNode } from "react";
import Footer from "./footer/component";
import Header from "./header/component";
import styled from "styled-components";
import { ApiError, Loading } from "components/desktop/common/component";
import { useLoadLayout } from "../hooks/useLoadLayout";

type MainT = {
	fixed: boolean;
};

const Main = styled.div<MainT>`
	margin-top: ${(props) => props.fixed && `10rem`};
`;

type MainLayoutT = {
	children: ReactNode;
	fixed?: boolean;
};

const MainLayout = ({ children, fixed = true }: MainLayoutT) => {
	const [loading, result, error] = useLoadLayout();
	return (
		<>
			{loading && <Loading />}
			{error && <ApiError />}
			{result && (
				<>
					<Header fixed={fixed} />
					<Main fixed={fixed}>{children}</Main>
					<Footer />
				</>
			)}
		</>
	);
};

export default MainLayout;
