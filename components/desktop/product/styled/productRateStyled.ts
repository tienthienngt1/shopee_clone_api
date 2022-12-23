import styled from "styled-components";
export const WrapProductRate = styled.div`
	margin: 1rem 0;
	background: #fff;
	padding: 1rem;
`;
export const ProductRateTitle = styled.div`
	font-size: 20px;
	padding: 2rem 1rem;
`;
export const ProductRateHeader = styled.div`
	border: 1px solid rgb(0, 0, 0, 0.1);
	background: #fffbf8;
	padding: 2rem;
	display: flex;
	svg {
		margin: 0;
		color: #ee4d2d;
	}
	& > div:first-child {
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		& > div:first-child {
			color: #ee4d2d;
			font-size: 20px;
			span {
				font-size: 30px;
			}
		}
	}
	& > div:last-child {
		width: 80%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		& > div {
			margin: 5px;
			padding: 1rem 2rem;
			border: 1px solid rgb(0, 0, 0, 0.1);
			background: #fff;
			font-size: 16px;
			&.active {
				color: #ee4d2d;
				border: 1px solid #ee4d2d;
			}
		}
	}
`;
export const ProductRateBody = styled.div``;
