import styled from "styled-components";
export const WrapListCategoryShop = styled.div`
	margin-top: 1rem;
	& > div:first-child {
		font-size: 18px;
		color: rgb(0, 0, 0, 0.5);
		text-transform: uppercase;
		margin-bottom: 1rem;
	}
	& > div:last-child {
		.list_cat_shop_item {
			:hover {
				transform: translateY(-2px);
			}
			background: #fff;
			cursor: pointer;
			&_image {
				width: 100%;
				aspect-ratio: 1;
			}
			&_name {
				padding: 10px;
				font-size: 16px;
				text-align: center;
			}
		}
	}
`;
