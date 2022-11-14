import { PropsWithChildren } from "react";
import { WrapperFullStyled } from "../styled";

export const ContainerFull = ({ children }: PropsWithChildren) => {
	return <WrapperFullStyled>{children}</WrapperFullStyled>;
};
