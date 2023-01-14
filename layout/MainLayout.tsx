import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

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
	return (
		<>
			<Header fixed={fixed} />
			<Main fixed={fixed}>{children}</Main>
			<Footer />
		</>
	);
};

export default MainLayout;
