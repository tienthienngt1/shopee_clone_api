import styled from "styled-components";
export const WrapProductInfo = styled.div`
	background: #fff;
	border-radius: 5px;
	display: flex;
	margin-top: 1rem;
`;
export const ProductInfoLeft = styled.div`
	width: 40%;
	padding: 1rem;
`;
export const ProductInfoRight = styled.div`
	width: 60%;
	padding: 1rem;
`;
export const WrapProductInfoImage = styled.div`
	.image-gallery-svg {
		width: 2rem;
	}
	& > div:last-child {
		padding: 1rem;
		display: flex;
		justify-content: center;
		color: rgb(0, 0, 0, 0.8);
		& > div {
			display: flex;
			flex-direction: row;
			align-items: center;
			&,
			svg {
				font-size: 1.5rem;
			}
			padding: 0 1rem;
		}
		& > div:first-child {
			svg {
				margin: 0 5px;
				font-size: 2rem;
				cursor: pointer;
			}
			svg:nth-child(1) {
				color: #3084ff;
			}
			svg:nth-child(2) {
				color: #3b5999;
			}
			svg:nth-child(3) {
				color: #de0217;
			}
			svg:nth-child(4) {
				color: #10c2ff;
			}
		}
		& > div:last-child {
			svg {
				color: red;
				margin-right: 1rem;
			}
			border-left: 1px solid rgb(0, 0, 0, 0.3);
		}
	}
`;

export const WrapProductPrimaryInfo = styled.div`
	& > div {
		margin: 1rem 0;
	}
	.product_primary_info {
		&_name {
			.shop_verified_label {
				background-color: rgb(238, 77, 45);
				color: #fff;
				padding: 3px;
				border-radius: 3px;
				margin-right: 1rem;
			}
			span:last-child {
				font-size: 22px;
			}
		}
		&_sub_name {
			padding: 1rem 0;
			display: flex;
			& > div {
				display: flex;
				align-items: center;
				color: rgb(0, 0, 0, 0.6);
				&,
				& > span {
					font-size: 18px;
				}
				& > span {
					text-decoration: underline;
					margin-right: 8px;
					color: #000;
					cursor: pointer;
				}
			}
			& > div:first-child {
				padding-right: 1rem;
				span,
				svg {
					color: rgb(238, 77, 45);
					margin: 0;
				}
			}

			& > div:nth-child(2) {
				padding: 0 1rem;
				border-right: 1px solid rgb(0, 0, 0, 0.3);
				border-left: 1px solid rgb(0, 0, 0, 0.3);
			}
			& > div:nth-child(3) {
				padding-left: 1rem;
			}
		}
		&_price {
			padding: 1rem;
			background-color: #fafafa;
			& > div:first-child {
				display: flex;
				align-items: center;
				span {
					padding: 0.5rem;
				}
				span:first-child {
					font-size: 18px;
					color: rgb(0, 0, 0, 0.5);
					text-decoration: line-through;
				}
				span:nth-child(2) {
					font-size: 35px;
					color: rgb(238, 77, 45);
				}
				span:nth-child(3) {
					font-size: 15px;
					background-color: rgb(238, 77, 45);
					color: #fff;
					padding: 5px;
					border-radius: 2px;
				}
			}
			& > div:last-child {
				display: flex;
				align-items: center;
				& > div {
					padding: 0 1rem;
					span:first-child {
						font-size: 16px;
						color: rgb(238, 77, 45);
						line-height: 2rem;
					}
					span:last-child {
						font-size: 14px;
						color: rgb(0, 0, 0, 0.4);
					}
				}
			}
		}
		&_voucher,
		&_promotion,
		&_transport,
		&_deal,
		&_attribute,
		&_quantity {
			display: flex;
			padding: 1rem;
			& > div:first-child {
				display: flex;
				align-items: center;
				width: 20%;
				font-size: 18px;
				color: rgb(0, 0, 0, 0.6);
			}
			& > div:last-child {
				width: 80%;
				padding: 0 1rem;
			}
		}
		&_attribute {
			& > div:last-child {
				display: flex;
				flex-wrap: wrap;
				& > span {
					text-transform: uppercase;
					font-size: 16px;
					border: 1px solid rgb(0, 0, 0, 0.1);
					padding: 10px 20px;
					color: rgb(0, 0, 0, 0.8);
					margin: 5px;
					&:hover {
						border: 1px solid #ee4d2d;
						cursor: pointer;
					}
				}
				span.active {
					border: 1px solid #ee4d2d;
					position: relative;
					span {
						position: absolute;
						width: 20px;
						display: flex;
						justify-content: flex-end;
						align-items: flex-end;
						aspect-ratio: 1/1;
						color: #fff;
						right: 0;
						bottom: 0;
						background: #ee4d2d;
						clip-path: polygon(100% 0, 0% 100%, 100% 100%);
					}
				}
				span.disable {
					opacity: 0.5;
					&:hover {
						cursor: no-drop;
					}
				}
			}
		}
		&_deal {
			& > div:last-child {
				span {
					padding: 5px;
					background: rgba(208, 1, 27, 0.08);
					color: #ee4d2d;
				}
			}
		}
		&_voucher {
			& > div {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
			}
			span {
				margin: 5px;
				padding: 0.5rem 1rem;
				background: rgba(208, 1, 27, 0.08);
				color: #ee4d2d;
				position: relative;
				&:before,
				&:after {
					content: "";
					width: 6px;
					height: calc(100% - 5px);
					position: absolute;
					top: 2.5px;
					background-image: radial-gradient(#fff 2px, transparent 0);
					background-size: 6px 6px;
					background-position-x: -6px;
				}
				&:before {
					left: -2.5px;
				}
				&:after {
					right: -2.5px;
				}
			}
		}
		&_promotion {
			& > div:last-child {
				span {
					font-size: 16px;
					padding: 0.5rem 1rem;
					color: #ee4d2d;
					border: 1px solid #ee4d2d;
					border-radius: 3px;
				}
			}
		}
		&_transport {
			& > div:last-child {
				font-size: 16px;
			}
		}
		&_quantity {
			& > div:last-child {
				display: flex;
				align-items: center;
				color: rgb(0, 0, 0, 0.5);
				font-size: 14px;
			}
			& > div:nth-child(2) {
				& > div {
					display: flex;
					width: 150px;
					height: 40px;
					border: 1px solid rgb(0, 0, 0, 0.2);
					border-radius: 3px;
					div {
						display: flex;
						align-items: center;
						justify-content: center;
						cursor: pointer;
						font-size: 20px;
						&:nth-child(1),
						&:nth-child(3) {
							width: 25%;
							user-select: none;
						}
						&:nth-child(2) {
							input {
								font-size: 20px;
								width: 75px;
								text-align: center;
								height: 40px;
								border: 1px solid rgb(0, 0, 0, 0.2);
							}
							//remove arrow input number
							/* Chrome, Safari, Edge, Opera */
							input::-webkit-outer-spin-button,
							input::-webkit-inner-spin-button {
								-webkit-appearance: none;
								margin: 0;
							}

							/* Firefox */
							input[type="number"] {
								-moz-appearance: textfield;
							}
						}
					}
				}
			}
		}
		&_cart_button {
			display: flex;
			padding: 1rem;
			& > div {
				padding: 1rem;
				border-radius: 3px;
				font-size: 20px;
				cursor: pointer;
			}
			& > div:first-child {
				border: 1px solid #ee4d2d;
				background: rgba(208, 1, 27, 0.08);
				color: #ee4d2d;
				margin-right: 1rem;
			}
			& > div:last-child {
				background: #ee4d2d;
				color: #fff;
			}
		}
		&_footer {
			padding: 0 1rem;
			&,
			div {
				display: flex;
				align-items: center;
				font-size: 16px;
			}
			div:first-child {
				margin-right: 2rem;
			}
			div:last-child {
				color: rgb(0, 0, 0, 0.5);
			}
		}
	}
`;
