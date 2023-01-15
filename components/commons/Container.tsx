import { PropsWithChildren } from "react";
import { WrapperStyled } from "styled/commons";

export const Container = ({ children }: PropsWithChildren) => {
	return <WrapperStyled>{children}</WrapperStyled>;
};
