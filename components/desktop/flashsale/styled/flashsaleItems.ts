import styled from "styled-components";
export const WrapFlashsaleItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-bottom: 5rem;
	& > div {
		width: calc((100% - 30px) / 4);
		background: #fff;
	}
`;

type WrapItemT = {
	percent: number;
};

export const WrapItem = styled.div<WrapItemT>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.item_flashsale {
		&_header {
			aspect-ratio: 1/1;
			position: relative;
			&_discount {
				position: absolute;
				top: 0px;
				right: 0px;
				font-size: 12px;
				background-color: #ffd839;
				opacity: 0.8;
				color: rgb(255, 0, 0, 0.8);
				clip-path: polygon(100% 0, 100% 100%, 50% 90%, 0 100%, 0 0);
				width: 3rem;
				text-align: center;
				padding: 5px 0 20px 0;
				&::after {
					color: #fff;
					font-size: 12px;
					bottom: 5px;
					left: 3px;
					position: absolute;
					content: "GIẢM";
				}
			}
			&_soldout {
				opacity: 0.6;
				background-color: rgb(0, 0, 0, 0.6);
				width: 100px;
				aspect-ratio: 1/1;
				border-radius: 50%;
				position: absolute;
				top: calc(50% - 50px);
				right: calc(50% - 50px);
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;
			}
		}
		&_footer {
			padding: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: space-between;
			flex: 1;
			& > div:last-child {
				flex-shrink: 1;
			}
			&_name {
				text-transform: uppercase;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				font-size: 18px;
				word-wrap: break-word;
				-webkit-box-orient: vertical;
				line-height: 1.6rem;
				flex-shrink: 0;
			}
			&_star {
				display: flex;
				justify-content: space-between;
				&_voucher {
					padding: 5px;
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
						background-image: radial-gradient(
							#fff 2px,
							transparent 0
						);
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
			&_before_price {
				text-decoration: line-through;
				color: rgb(0, 0, 0, 0.4);
			}
			&_price {
				display: flex;
				justify-content: space-between;
				& > div:first-child {
					width: 60%;
					& > div:first-child {
						color: #ee4d2d;
						font-size: 30px;
					}
					& > div:last-child {
						background: #ffbda6;
						text-align: center;
						padding: 2px 5px;
						color: #fff;
						border-radius: 20px;
						font-weight: bold;
						position: relative;
						overflow: hidden;
						height: 1.5rem;
						& > div {
							position: absolute;
							height: 100%;
							top: 0;
							left: 0;
						}
						& > div:first-child {
							top: 2px;
							font-size: 1.1rem;
							text-transform: uppercase;
							width: 100%;
							z-index: 10;
						}
						& > div:last-child {
							background: #ee4d2d;
							width: ${(props) => props.percent + "%"};
						}
					}
				}
				button {
					padding: 1rem;
					color: #fff;
					background-color: #ee4d2d;
					border: none;
					border-radius: 5px;
					font-size: 16px;
					cursor: pointer;
					&:hover {
						transform: translateY(-2px);
					}
				}
			}
		}
	}
`;
