import styled from "styled-components";

export const WrapSubStyled = styled.div`
	display: flex;
	justify-content: space-between;
	svg {
		font-size: 1.3rem;
	}
`;

export const WrapStyled = styled.div`
	display: flex;
	align-items: center;
	color: #ffffff;
	span {
		padding: 0 0.5rem;
		display: flex;
		align-items: center;
		&:hover {
			color: #e4e4e4;
			cursor: pointer;
		}
	}
`;
