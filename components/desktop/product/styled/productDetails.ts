import styled from "styled-components";
export const WrapProductDetails = styled.div`
	padding: 2rem;
	background: #fff;
	.product_details_header {
		background: #fafafa;
		padding: 1rem;
		font-size: 20px;
	}
	.product_details_body {
		padding: 2rem 1rem;
		div {
			font-size: 16px;
		}
		& > div {
			display: flex;
			& > div {
				margin: 1rem 0;
			}
			& > div:first-child {
				width: 20%;
				color: rgb(0, 0, 0, 0.5);
			}
			& > div:last-child {
				width: 80%;
			}
		}
	}
`;
