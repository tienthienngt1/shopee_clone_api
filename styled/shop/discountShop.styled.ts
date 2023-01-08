import styled from "styled-components";
export const WrapDiscountShop = styled.div`
	margin-top: 1rem;
	background: #fff;
	padding: 2rem;
	& > div:first-child label {
		font-size: 16px;
		color: rgb(0, 0, 0, 0.7);
		text-transform: uppercase;
	}

	& > div:last-child {
		.discount_shop {
			margin: 10px;
			background: #fff4f4;
			border: 1px solid #f8d0d3;
			padding: 10px;
			&,
			& > div {
				display: flex;
			}
			& > div:first-child {
				width: 70%;
				flex-direction: column;
				line-height: 20px;
				color: #ee4d2d;
				span {
					border: 1px solid #ee4d2d;
					display: inline;
					padding: 0 5px;
					border-radius: 3px;
				}
				& > div:last-child {
					color: rgb(0, 0, 0, 0.4);
					font-size: 10px;
					margin-top: 10px;
				}
			}
			& > div:last-child {
				justify-content: center;
				align-items: center;
				border-left: 1px dotted rgb(0, 0, 0, 0.1);
				width: 30%;
				button {
					background: #ee4d2d;
					padding: 5px 10px;
					border: none;
					color: #fff;
					cursor: pointer;
				}
			}
			/* & > div:last-child {
				background: linear-gradient(
					90deg,
					transparent 0 0.25rem,
					#fff4f4 0.25rem
				);
				width: 5px;
				height: 100%;
			} */
		}
	}
`;
