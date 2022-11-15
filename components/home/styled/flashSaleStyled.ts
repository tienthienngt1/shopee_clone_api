import styled from "styled-components";

export const WrapFlashSaleStyled = styled.div`
	padding: 1rem 0;
	margin-bottom: 400px;
`;

export const FlashSaleHeaderStyled = styled.div`
	background-color: #fff;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	& > div:last-child {
		color: rgb(255, 0, 0, 0.8);
		cursor: pointer;
		display: flex;
		align-items: center;
		&:hover {
			transform: translateY(-1px);
		}
	}
`;

export const FlashSaleMainStyled = styled.div`
	.swiper-slide {
		padding: 1rem 0;
	}
`;

type Props = {
	// stock: number;
	// flashSaleStock: number;
	percent: number;
};

export const WrapSwiperSlide = styled.div<Props>`
	position: relative;
	width: 100%;
	background-color: #fff;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	padding-bottom: 1rem;
	.swiper_slide_header {
		width: 100%;
		aspect-ratio: 1;
		position: relative;
	}
	.swiper_slide_footer {
		display: flex;
		align-items: center;
		flex-direction: column;
		&_price {
			font-size: 1.6rem;
			text-align: center;
			padding: 1rem;
			color: rgb(255, 0, 0, 0.8);
		}
		&_progress {
			width: 80%;
			padding: 2px 0;
			color: #fff;
			background: rgb(255, 0, 0, 0.3);
			border-radius: 10px;
			text-align: center;
			position: relative;
			overflow: hidden;
			&::after {
				content: "";
				width: ${(prop) => prop.percent + "%"};
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: #ee2d14;
			}
		}
	}
	.swiper_slide_discount {
		position: absolute;
		top: -5px;
		right: -5px;
		font-size: 12px;
		opacity: 0.9;
		background-color: #ffd839;
		color: rgb(255, 0, 0, 0.8);
		clip-path: polygon(100% 0, 100% 100%, 50% 90%, 0 100%, 0 0);
		width: 20%;
		text-align: center;
		padding: 5px 0 20px 0;
		&::after {
			color: #fff;
			font-size: 12px;
			bottom: 5px;
			left: 3px;
			position: absolute;
			content: "GIẢM";
		}
	}
`;
