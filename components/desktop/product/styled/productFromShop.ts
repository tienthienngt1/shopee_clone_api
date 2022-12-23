import styled from "styled-components";
export const WrapProductFromShop = styled.div`
	margin: 2rem 0;
	& > div:first-child {
		display: flex;
		justify-content: space-between;
		& > div {
			font-size: 18px;
		}
		& > div:first-child {
			color: rgb(0, 0, 0, 0.5);
			margin-bottom: 1rem;
		}
		& > div:last-child {
			display: flex;
			align-items: center;
			color: #ee4d2d;
		}
	}
`;
