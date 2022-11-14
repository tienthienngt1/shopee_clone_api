import { PropsWithChildren } from "react";
import Header from "./header";

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default MainLayout;
