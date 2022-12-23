import styled from "styled-components";
export const WrapProductMayLike = styled.div`
	.product_may_like {
		&_header {
			font-size: 18px;
			color: rgb(0, 0, 0, 0.5);
			margin-bottom: 1rem;
		}
		&_body {
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
			& > div {
				width: 15.66%;
			}
		}
	}
	& > div:last-child {
		margin: 2rem 0;
		display: flex;
		justify-content: center;
		button {
			cursor: pointer;
			font-size: 14px;
			background: #fff;
			color: rgb(0, 0, 0, 0.7);
			padding: 1rem 8rem;
			border-color: rgb(0, 0, 0, 0.1);
		}
	}
`;
