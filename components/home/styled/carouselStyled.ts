import styled from "styled-components";
type Props = {
	status: boolean;
};
export const WrapCarouselStyled = styled.div<Props>`
	display: flex;
	gap: 0.5rem;
	& > div:first-child {
		width: 68%;
		overflow: hidden;
		cursor: pointer;
	}
	& > div:last-child {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 32%;
		div {
			border-radius: 4px;
			overflow: hidden;
			width: 100%;
			height: 50%;
		}
	}
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
