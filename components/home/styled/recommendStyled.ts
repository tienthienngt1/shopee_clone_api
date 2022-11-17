import styled from "styled-components";
export const WrapRecommend = styled.div`
	margin: 1rem 0;
	margin-bottom: 500px;
`;

export const RecommendHeader = styled.div`
	background-color: #fff;
	padding: 1.5rem;
	color: rgb(255, 0, 0, 0.7);
	text-transform: uppercase;
	text-align: center;
	font-size: 1.3rem;
	position: relative;
	&::after {
		content: "";
		width: 100%;
		height: 5px;
		position: absolute;
		bottom: 0;
		left: 0;
		background: rgb(255, 0, 0, 0.7);
	}
`;
export const RecommendMain = styled.div`
	padding: 5px 2px;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
`;
export const WrapRecommendMain = styled.div`
	width: 16.66%;
	padding: 5px;
`;
