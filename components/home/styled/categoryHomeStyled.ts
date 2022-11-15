import styled from "styled-components";

export const WrapCategoryHomeStyled = styled.div`
	position: relative;
	margin-bottom: 100rem;
`;

export const TitleCategoryHomeStyled = styled.div`
	background-color: #fff;
	padding: 1rem;
	font-size: 1.3rem;
	color: #757575;
	margin-bottom: 0.5px;
`;

export const ItemCategoryHomeStyled = styled.div`
	.swiper-button-prev-custom,
	.swiper-button-next-custom {
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
	}
	.swiper-button-prev-custom:hover {
		left: -2rem;
	}
	.swiper-button-next-custom:hover {
		right: -2rem;
	}
	.swiper-button-prev-custom:hover,
	.swiper-button-next-custom:hover {
		width: 4rem;
		height: 4rem;
		top: 50%;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		svg {
			font-size: 1.8rem;
		}
	}
	.swiper-button-prev-custom {
		top: calc(50% + 1rem);
		left: -1rem;
	}
	.swiper-button-next-custom {
		top: calc(50% + 1rem);
		right: -1rem;
		border-radius: 50%;
	}
	.swiper-button-disabled {
		display: none;
	}
	.swiper-wrapper {
		.swiper-slide {
			background-color: #fff;
			height: 12.5rem;
			display: flex;
			flex-direction: column;
			padding: 0.5rem 0;
			border: 0.5px solid #f5f5f5;
			cursor: pointer;
			&:hover {
				transform: translateY(-1.5px);
			}
		}
	}
`;

export const SwiperSlideHeader = styled.div`
	display: flex;
	justify-content: center;
`;
export const SwiperSlideFooter = styled.div`
	padding: 0 0.5rem;
	font-size: 14px;
	text-align: center;
	color: rgba(0, 0, 0, 0.8);
`;
