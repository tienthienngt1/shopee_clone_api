import { PropsWithChildren } from "react";
import Footer from "./footer/component";
import Header from "./header/component";
import styled from "styled-components";
import { ApiError, Loading } from "components/desktop/common/component";
import { useLoadLayout } from "../hooks/useLoadLayout";

const Main = styled.div`
	margin-top: 9rem;
`;

const MainLayout = ({ children }: PropsWithChildren) => {
	const [loading, result, error] = useLoadLayout();
	return (
		<>
			{loading && <Loading />}
			{error && <ApiError />}
			{result && (
				<>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</>
			)}
		</>
	);
};

export default MainLayout;
