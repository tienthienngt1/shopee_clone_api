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
	border: 1px solid red;
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
	& > div:first-child {
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		color: rgb(255, 0, 0, 0.8);
		cursor: pointer;
		padding: 0.5rem 0;
		&:hover {
			opacity: 0.7;
		}
	}
`;
export const LeftComponentFilter = styled.div`
	padding: 1rem 0;
	.filter_title {
		padding: 0.5rem 0;
	}
	.filter_body {
		padding-bottom: 1rem;
		border-bottom: 1px solid rgb(0, 0, 0, 0.1);
	}
`;

export const WrapRightComponent = styled.div``;

type MoreView = {
	status: boolean;
};
export const WrapMoreView = styled.div<MoreView>`
	& > div {
		font-size: 1.1rem;
		padding: 0.5rem 0;
		transition: display 0.4s;
		display: ${(props) => (!props.status ? "none" : "block")};
		cursor: pointer;
		&:nth-child(-n + 4) {
			display: block;
		}
		&:hover {
			opacity: 0.8;
		}
		label {
			padding: 0 0.5rem;
		}
	}
	span {
		cursor: pointer;
		padding: 0.5rem;
		display: flex;
		align-items: center;
	}
`;
