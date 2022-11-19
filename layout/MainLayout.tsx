import { PropsWithChildren } from "react";
import Footer from "./footer/component";
import Header from "./header/component";

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
