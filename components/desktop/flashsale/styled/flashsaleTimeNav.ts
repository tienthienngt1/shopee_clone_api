import styled from "styled-components";
export const WrapFlashsaleTimeNav = styled.div`
	position: sticky;
	top: 4.3rem;
	z-index: 99;
	&,
	& > div {
		display: flex;
	}
	& > div {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: #414141;
		width: 25%;
		padding: 1rem 0;
		color: rgb(255, 255, 255, 0.6);
		cursor: pointer;
		& > div:first-child {
			font-size: 30px;
		}
		& > div:last-child {
			font-size: 20px;
		}
		&.active {
			color: #fff;
			background: #ee4d2d;
		}
	}
`;
