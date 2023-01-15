import { PropsWithChildren } from "react";
import { WrapperFullStyled } from "styled/commons";

export const ContainerFull = ({ children }: PropsWithChildren) => {
	return <WrapperFullStyled>{children}</WrapperFullStyled>;
};
