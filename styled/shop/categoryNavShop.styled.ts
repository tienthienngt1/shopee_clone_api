import styled from "styled-components";

export const WrapCategoryNavShop = styled.div`
	background: #fff;
	& > div {
		padding-bottom: 0;
	}
`;

export const CategoryNavShopStyled = styled.div`
	display: flex;
	& > div.active {
		color: #b0011b;
		border-bottom: 5px solid #b0011b;
	}
	& > div {
		cursor: pointer;
		text-align: center;
		padding: 1rem;
		font-size: 16px;
		color: rgb(0, 0, 0, 0.7);
		width: 100%;
	}
`;

export const WrapViewMore = styled.div`
	position: relative;
	border-left: 1px solid rgb(0, 0, 0, 0.1);
	.show_category {
		font-size: 16px;
		position: absolute;
		bottom: 10;
		text-align: left;
		max-height: 200px;
		border: 1px solid rgb(0, 0, 0, 0.1);
		padding: 10px;
		border-radius: 5px;
		overflow-y: scroll;
		background: #fff;
		& > div {
			:hover {
				color: #b0011b;
			}
			padding: 10px;
		}
	}
`;
