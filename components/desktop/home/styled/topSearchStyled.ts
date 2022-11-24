import styled from "styled-components";

export const WrapTopSearch = styled.div`
	background-color: #fff;
	margin-bottom: 1rem;
`;
export const TopSearchHeader = styled.div`
	padding: 1.8rem;
	color: rgb(255, 0, 0, 0.8);
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgb(0, 0, 0, 0.1);
	& > div:first-child {
		font-size: 1.2rem;
	}
	& > div:last-child {
		cursor: pointer;
		&:hover {
			transform: translateY(-1px);
		}
	}
`;

export const TopSearchMain = styled.div`
	padding: 0.5rem;
`;
export const WrapSlide = styled.div``;

export const SlideHeader = styled.div`
	position: relative;
	aspect-ratio: 1/1;
	.top_search {
		&_symbol {
			position: absolute;
			top: -2px;
			left: -2px;
			width: 2.4rem;
			aspect-ratio: 96/123;
			background-image: url("/top.png");
			background-size: cover;
			background-repeat: no-repeat;
		}
		&_info {
			position: absolute;
			bottom: 0;
			width: 100%;
			text-align: center;
			color: #fff;
			padding: 0.5rem;
			background: rgb(0, 0, 0, 0.2);
			span {
				text-transform: lowercase;
			}
		}
	}
`;
export const SlideFooter = styled.div`
	width: 100%;
	padding: 1rem 0;
	font-size: 1.5rem;
	text-align: center;
	color: rgb(0, 0, 0, 0.8);
`;
