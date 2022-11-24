import styled from "styled-components";
type Props = {
	id: string;
};
export const WrapSlide = styled.div<Props>`
	position: relative;
	.swiper-slide {
		padding-top: 1rem;
	}
	.swiper-button-prev-${(props) => props.id}-custom,
		.swiper-button-next-${(props) => props.id}-custom {
		background: #fff;
		color: #757575;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		font-weight: 600;
		position: absolute;
		z-index: 9999;
		cursor: pointer;
		transition: all 0.3s;
		border-radius: 50%;
		top: calc(50% - 1rem);
	}
	.swiper-button-prev-${(props) => props.id}-custom:hover {
		left: -2rem;
	}
	.swiper-button-next-${(props) => props.id}-custom:hover {
		right: -2rem;
	}
	.swiper-button-prev-${(props) => props.id}-custom:hover,
		.swiper-button-next-${(props) => props.id}-custom:hover {
		width: 4rem;
		height: 4rem;
		top: calc(50% - 2rem);
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		svg {
			font-size: 1.8rem;
		}
	}
	.swiper-button-prev-${(props) => props.id}-custom {
		left: -1rem;
	}
	.swiper-button-next-${(props) => props.id}-custom {
		right: -1rem;
	}
	.swiper-button-disabled {
		display: none;
	}
`;
