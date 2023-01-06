import styled from "styled-components";
export const WrapProductShopInfo = styled.div`
	margin: 1rem 0;
	padding: 1rem;
	background: #fff;
	display: flex;
`;
export const ProductShopInfoLeft = styled.div`
	width: 35%;
	border-right: 1px solid rgb(0, 0, 0, 0.1);
	&,
	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	& > div:first-child {
		width: 25%;
		flex-direction: column;
		position: relative;
		img {
			border-radius: 50%;
		}
		& > div.official_shop {
			position: absolute;
			bottom: 0;
			padding: 5px;
			color: #fff;
			background: #ee4d2d;
		}
	}
	& > div:last-child {
		padding: 1rem;
		width: 75%;
		flex-direction: column;
		align-items: flex-start;
		& > div:first-child {
			font-size: 16px;
		}
		& > div:nth-child(2) {
			font-size: 17px;
			opacity: 0.6;
		}
		& > div:nth-child(3) {
			display: flex;
			div {
				cursor: pointer;
				font-size: 16px;
				padding: 1rem;
				border: 1px solid rgb(0, 0, 0, 0.1);
				margin: 0.5rem;
				&:first-child {
					border: 1px solid #ee4d2d;
					background: rgba(208, 1, 27, 0.08);
					color: #ee4d2d;
				}
			}
		}
	}
`;
export const ProductShopInfoRight = styled.div`
	width: 65%;
	padding: 0 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > div {
		padding: 1rem 0;
		display: flex;
		color: rgb(0, 0, 0, 0.5);
		& > div,
		span {
			font-size: 15px;
		}
		span {
			margin-left: 5px;
			color: #ee4d2d;
		}
		& > div:nth-child(2) {
			flex-grow: 1;
		}
		& > div:nth-child(2n-1) {
			flex-basis: 30%;
		}
	}
`;
