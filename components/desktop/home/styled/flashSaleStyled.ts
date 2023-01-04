import styled from "styled-components";

export const WrapFlashSaleStyled = styled.div`
	padding-top: 1rem;
`;

export const FlashSaleHeaderStyled = styled.div`
	background-color: #fff;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	& > div:first-child {
		display: flex;
		align-items: center;
	}
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
		cursor: pointer;
		&:hover {
			transform: translateY(-2px);
		}
	}
`;

type Props = {
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
			background: rgb(255, 0, 0, 0.3);
			border-radius: 10px;
			position: relative;
			overflow: hidden;
			& > div:first-child {
				position: relative;
				text-align: center;
				z-index: 99;
				color: #fff;
			}
			& > div:last-child::before {
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

export const WrapCountDown = styled.div`
	display: flex;
	padding: 0 1rem;
	& > div {
		margin: 0 2px;
		border-radius: 2px;
		position: relative;
		width: 22px;
		height: 15px;
		background: rgb(0, 0, 0, 0.9);
		overflow: hidden;
		& > div {
			height: 15px;
			text-align: center;
			font-weight: bold;
			color: rgb(255, 255, 255, 0.9);
		}
	}
	.count_down {
		&_first_number {
			position: absolute;
			top: -60px;
			left: 2px;
			& > div {
				width: 10px;
				height: 15px;
			}
		}
		&_last_number {
			position: absolute;
			right: 2px;
		}
	}
`;

type ValueNumber = {
	value: string;
};

export const CountdownFirstNumber = styled.div<ValueNumber>`
	position: absolute;
	transition: all 0.8s;
	bottom: calc(${(props) => Number(props.value) * -1 * 15 + 75 + "px"});
	left: 2px;
	& > div {
		width: 10px;
		height: 15px;
	}
`;

export const CountdownLastNumber = styled(CountdownFirstNumber)`
	bottom: calc(${(props) => Number(props.value) * -1 * 15 + 135 + "px"});
	right: 2px;
	left: auto;
`;
