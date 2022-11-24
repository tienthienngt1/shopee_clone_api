import styled from "styled-components";
export const WrapShopeeMall = styled.div`
	margin: 1rem 0;
`;
export const ShopeeMallHeader = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	& > div:first-child {
		color: #d0011b;
		font-size: 1.1rem;
	}
	& > div:last-child {
		display: flex;
		align-items: center;
		color: #d0011b;
		font-size: 1.1rem;
		&:hover {
			cursor: pointer;
			opacity: 0.8;
		}
	}
`;
export const ShopeeMallBody = styled.div`
	padding: 1rem;
	.swiper-slide {
		background: #fff;
		display: flex;
		justify-content: center;
		border: 0.5px solid #f5f5f5;
		&:hover {
			cursor: pointer;
			transform: translateY(-1px);
		}
	}
`;
