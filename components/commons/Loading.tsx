import { WrapLoadingStyled } from "styled/commons";

export const Loading = () => {
	return (
		<WrapLoadingStyled>
			<div className="balls">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</WrapLoadingStyled>
	);
};
