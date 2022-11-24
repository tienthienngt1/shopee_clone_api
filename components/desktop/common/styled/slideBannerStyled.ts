import styled from "styled-components";
type Props = {
	status: boolean;
};
export const WrapSlideBanner = styled.div<Props>`
	width: 100%;
	cursor: pointer;
	overflow: hidden;
	.swiper-button-prev::after,
	.swiper-button-next::after {
		display: ${(props) => (props.status ? "block" : "none")};
		padding: 1.5rem 1rem;
		border-radius: 2px;
		background: rgb(0, 0, 0, 0.2);
		color: #fff;
		font-size: 1.4rem;
	}
	.swiper-button-prev:hover::after,
	.swiper-button-next:hover::after {
		background: rgb(0, 0, 0, 0.4);
	}
	.swiper-pagination-bullet {
		background: #fff;
	}
	.swiper-pagination-bullet-active {
		background: #f94e30;
	}
`;
