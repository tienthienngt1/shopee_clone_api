import styled from "styled-components";
export const WrapFlashsaleCategoryNav = styled.div`
	margin: 1rem 0;
	background: #fff;
	&,
	& > div {
		display: flex;
	}
	& > div {
		padding: 1rem;
		justify-content: center;
		align-items: center;
		width: 14.28%;
		font-size: 17px;
		text-align: center;
		cursor: pointer;
		color: rgb(0, 0, 0, 0.8);
		&:nth-child(-n + 6):hover {
			color: #ee4d2d;
		}
		&.active {
			border-bottom: 5px solid #ee4d2d;
		}
	}
	& > div:last-child {
		position: relative;
		cursor: context-menu;
	}
`;
export const WrapExtraDetail = styled.div`
	width: 300%;
	border: 1px solid rgb(0, 0, 0, 0.1);
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	position: absolute;
	top: 90%;
	right: 0;
	padding: 1rem;
	background: #fff;
	z-index: 999;
	cursor: pointer;
	& > div {
		padding: 1rem;
		width: 48%;
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover {
			color: rgb(0, 0, 0, 0.4);
		}
	}
`;
