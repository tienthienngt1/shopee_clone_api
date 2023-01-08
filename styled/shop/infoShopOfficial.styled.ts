import styled from "styled-components";
export const WrapInfoShopOfficial = styled.div`
	padding: 2rem;
	background: #fff;
`;

export const InfoShopOfficialStyled = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 10px;
`;

export const LogoShopStyled = styled.div`
	background: #666666;
	border-radius: 5px;
	padding: 10px;
	width: 30%;
	.logo_shop_header {
		display: flex;
		& > div:first-child {
			div {
				overflow: hidden;
				position: relative;
				width: 70px;
				height: 70px;
				border-radius: 50%;
				border: 5px solid #a3a3a3;
			}
		}
		& > div:last-child {
			padding: 10px;
			line-height: 20px;
			p:first-child {
				color: #fff;
				font-size: 18px;
			}
			p:last-child {
				font-size: 12px;
				color: rgb(255, 255, 255, 0.5);
			}
		}
	}
	.logo_shop_footer {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			background: inherit;
			margin-top: 1rem;
			width: 100%;
			color: #fff;
			border: 1px solid #fff;
			padding: 5px;
			text-decoration: uppercase;
			font-size: 15px;
			cursor: pointer;
			svg {
				margin-right: 10px;
			}
		}
	}
`;

export const SubInfoShopOfficialStyled = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	padding: 0 2rem;
	& > div {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		& > div {
			font-size: 14px;
			width: 100%;
			span {
				color: #d0011b;
			}
		}
	}
`;
