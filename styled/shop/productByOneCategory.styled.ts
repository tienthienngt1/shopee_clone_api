import styled from "styled-components";
export const WrapProductByOneCategory = styled.div`
	margin-top: 2rem;
`;

export const ProductByOneCategoryShopHeader = styled.div`
	text-transform: uppercase;
	font-size: 18px;
	padding: 1rem 0;
	color: rgb(0, 0, 0, 0.4);
`;

export const ProductByOneCategoryShopBody = styled.div`
	display: flex;
	gap: 5px;
	background: #fff;
	& > div {
		width: calc(16.6% - 5px);
	}
`;
