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
		font-size: 1.3rem;
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
		font-size: 2.6rem;
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
	.swiper-button-prev-custom::after {
		content: "<";
	}
	.swiper-button-next-custom::after {
		content: ">";
	}
	.swiper-button-disabled {
		display: none;
	}
	.swiper-wrapper {
		flex-direction: row;
		.swiper-slide {
			background-color: #fff;
			height: 12rem;
			border: 0.5px solid #f5f5f5;
		}
	}
	.swiper {
		.swiper-button-prev,
		.swiper-button-next {
		}
	}
`;
