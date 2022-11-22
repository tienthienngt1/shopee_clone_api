import { PropsWithChildren } from "react";
import Footer from "./footer/component";
import Header from "./header/component";
import styled from "styled-components";
import useLoad from "hooks/useLoad";
import { ApiError, Loading } from "components/common/component";

const Main = styled.div`
	margin-top: 9rem;
`;

const MainLayout = ({ children }: PropsWithChildren) => {
	const [loading, result, error] = useLoad();
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
