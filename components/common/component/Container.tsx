import { PropsWithChildren } from "react";
import { WrapperStyled } from "../styled";

export const Container = ({ children }: PropsWithChildren) => {
	return <WrapperStyled>{children}</WrapperStyled>;
};
