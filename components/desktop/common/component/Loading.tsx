import { WrapLoadingStyled } from "../styled";

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
