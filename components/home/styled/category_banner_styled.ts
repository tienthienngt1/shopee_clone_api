import styled from "styled-components";
export const WrapCategoryBannerStyled = styled.div`
	width: 100%;
	padding-top: 2rem;
	display: flex;
	gap: 1rem;
	div {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		width: 12.5%;
		transition: all 0.3s;
		&:hover {
			transform: translateY(-1px);
			cursor: pointer;
		}
		div:first-child,
		div:last-child {
			width: 100%;
		}
		div:first-child {
			flex: 0;
		}
		div:last-child {
			padding-top: 0.5rem;
			flex: 1;
		}
	}
`;
