import styled from "styled-components";

export const WrapCarouselStyled = styled.div`
	display: flex;
	gap: 0.5rem;
	& > div:first-child {
		width: 68%;
	}
	& > div:last-child {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 32%;
		div {
			border-radius: 4px;
			overflow: hidden;
			width: 100%;
			height: 50%;
		}
	}
`;
