import styled from "styled-components";
export const WrapProductShop = styled.div`
	margin-top: 1rem;
	display: flex;
	gap: 10px;
`;

export const ProductShopLeftStyled = styled.div`
	width: 20%;
	.product_shop_left {
		&_header {
			display: flex;
			height: 60px;
			align-items: center;
			font-size: 16px;
			font-weight: bold;
			border-bottom: 1px solid rgb(0, 0, 0, 0.1);
			svg {
				font-weight: bold;
				margin-right: 5px;
			}
		}
		&_body {
			margin-top: 10px;
			& > div {
				padding: 10px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				cursor: pointer;
				:hover {
					opacity: 0.7;
				}
				svg {
					font-size: 10px;
				}
				&.active {
					padding-left: 0;
					&,
					svg {
						color: red;
					}
				}
			}
		}
	}
`;
export const ProductShopRightStyled = styled.div`
	width: 80%;
	.product_shop_right {
		&_header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 1rem;
			background: #ededed;
			height: 60px;
			& > div:first-child {
				color: rgb(0, 0, 0, 0.7);
				label {
					margin-right: 10px;
				}
				span {
					margin: 0 10px;
					user-select: none;
					background: #fff;
					padding: 10px 20px;
					cursor: pointer;
				}
				span.active {
					background: #ee4d2d;
					color: #fff;
				}
			}
			& > div:last-child {
				label {
					color: #ee4d2d;
				}
				span {
					padding: 10px;
					background: #fff;
					border: 1px solid rgb(0, 0, 0, 0.1);
					cursor: pointer;
					&.disable {
						opacity: 0.5;
						cursor: no-drop;
					}
				}
			}
		}
		&_body {
			display: flex;
			gap: 5px;
			margin-top: 10px;
			flex-wrap: wrap;
			& > div {
				width: calc(20% - 5px);
				aspect-ratio: 1/1;
				background: #fff;
				:hover {
					transform: translateY(-2px);
					cursor: pointer;
				}
			}
		}
		&_pagination {
			margin: 5rem 0;
		}
	}
`;
