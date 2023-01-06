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
			white-space: pre-line;
		}
		& > div {
			display: flex;
			& > div {
				margin: 1rem 0;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				line-clamp: 1;
				-webkit-box-orient: vertical;
			}
			& > div:first-child {
				width: 20%;
				color: rgb(0, 0, 0, 0.5);
				padding-right: 20px;
			}
			& > div:last-child {
				width: 80%;
				color: rgb(0, 0, 0, 0.8);
			}
		}
	}
`;
