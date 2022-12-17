import styled from "styled-components";
export const WrapProductCat = styled.div`
	display: flex;
	gap: 1rem;
`;
export const ProductCatLeft = styled.div`
	width: 20%;
`;
export const ProductCatRight = styled.div`
	width: 80%;
`;

export const LeftComponentHeader = styled.div`
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.3rem;
	color: rgb(0, 0, 0, 0.9);
	padding: 1.5rem 0;
	border-bottom: 1px solid rgb(0, 0, 0, 0.2);
	svg {
		font-weight: bold;
		font-size: 1.3rem;
		margin-right: 0.5rem;
	}
`;
export const LeftComponentList = styled.div`
	padding: 1rem 0;
	.active {
		color: rgb(255, 0, 0, 0.8);
	}
	& > div:first-child {
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 0.5rem 0;
		&:hover {
			opacity: 0.7;
		}
	}
`;
export const LeftComponentFilter = styled.div`
	padding: 1rem 0;
	color: rgb(0, 0, 0, 0.7);
	.filter_title {
		padding: 1rem 0;
	}
	.filter_body {
		padding-bottom: 1rem;
		border-bottom: 1px solid rgb(0, 0, 0, 0.1);
		.filter_price {
			display: flex;
			align-items: center;
			flex-direction: column;
			& > div:first-child {
				display: flex;
				justify-content: center;
				align-items: center;
				input {
					padding: 0.5rem;
					margin: 0 0.5rem;
					width: 40%;
				}
			}
			& > div:last-child {
				margin: 0.5rem 0;
				width: 90%;
				padding: 0.5rem;
				color: #fff;
				text-align: center;
				background-color: #ee4d2d;
				cursor: pointer;
			}
		}
		.checkbox_label {
			display: flex;
			& > div:first-child {
				width: 15px;
				height: 15px;
				font-size: 8px;
				display: grid;
				place-items: center;
				margin-right: 10px;
				color: red;
				border: 1px solid rgb(0, 0, 0, 0.2);
			}
		}
	}
	.filter_star {
		display: inline-block;
		padding: 0px 10px;
		cursor: pointer;
		&.active {
			background: rgb(0, 0, 0, 0.1);
			border-radius: 20px;
		}
	}
	.filter_clear_all_button {
		margin: 2rem auto;
		width: 90%;
		padding: 0.5rem;
		color: #fff;
		text-align: center;
		background-color: #ee4d2d;
		cursor: pointer;
	}
`;

export const WrapRightComponent = styled.div`
	.pagination_page {
		display: flex;
		border: 1px solid red;
		justify-content: center;
		padding: 1rem;
		& > div {
			cursor: pointer;
			margin: 0 1rem;
			color: rgb(0, 0, 0, 0.5);
			padding: 0.5rem 1rem;
			font-size: 18px;
			&.active {
				background: #ee4d2d;
				color: #fff;
			}
		}
	}
`;
export const WrapRightComponentHeader = styled.div`
	padding: 1rem;
	background-color: #ededed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: rgb(0, 0, 0, 0.8);
	button,
	select,
	option {
		border: none;
		border-radius: 3px;
		cursor: pointer;
		padding: 0.7rem 1rem;
		color: rgb(0, 0, 0, 0.8);
		background-color: #fff;
		margin: 0 0.5rem;
		font-size: 1.1rem;
	}
	.right_component_header {
		&_filter {
			span {
				padding: 0 1rem;
			}
			.active {
				background: #ee4d2d;
				color: #fff;
			}
			option {
				padding: 1rem;
			}
		}
		&_pagination {
			font-size: 1.2rem;
			button {
				margin: 0;
				border-radius: none;
				&:first-child {
					border-right: 1px solid rgb(0, 0, 0, 0.1);
				}
				&:last-child {
					border-left: 1px solid rgb(0, 0, 0, 0.1);
				}
			}
			button.disable {
				opacity: 0.5;
			}
		}
	}
`;
export const WrapRightComponentBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	& > div {
		width: 20%;
		padding: 0.3rem;
	}
`;

type MoreView = {
	status: boolean;
};
export const WrapMoreView = styled.div<MoreView>`
	& > div {
		font-size: 1.1rem;
		padding: 0.5rem 0;
		display: ${(props) => (!props.status ? "none" : "block")};
		cursor: pointer;
		&:nth-child(-n + 4) {
			display: block;
		}
		&:hover {
			opacity: 0.8;
		}
	}
	span {
		cursor: pointer;
		padding: 0.5rem;
		display: flex;
		align-items: center;
	}
`;
