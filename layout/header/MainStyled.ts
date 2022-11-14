import styled from "styled-components";
export const WrapLogoStyled = styled.div`
	padding: 1rem 5rem 1rem 0;
	width: 20%;
	color: #fff;
`;
export const WrapSearchStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const WrapSearchCategoryStyled = styled.div`
	color: #fff;
	margin-top: 0.5rem;
	span {
		padding-right: 1rem;
		&:hover {
			opacity: 0.9;
			cursor: pointer;
		}
	}
`;

export const WrapSearchInputStyled = styled.div`
	width: 100%;
	height: 3rem;
	padding: 3px;
	background: #fff;
	border-radius: 2px;
	display: flex;
	div:first-child {
		width: 93%;
	}
	div:last-child {
		cursor: pointer;
		color: #fff;
		background: #fb5533;
		border-radius: 2px;
		width: 7%;
		display: grid;
		place-items: center;
		svg {
			font-size: 1.2rem;
		}
		&:hover {
			opacity: 0.9;
		}
	}
	input {
		width: 100%;
		padding: 0.7rem;
		border: none;
	}
`;
export const WrapCartStyled = styled.div`
	display: grid;
	place-items: center;
	color: #fff;
	width: 20%;
	svg {
		font-weight: 600;
		font-size: 2.3rem;
		&:hover {
			cursor: pointer;
		}
	}
`;
export const WrapMainStyled = styled.div`
	display: flex;
	margin-top: 1rem;
`;
