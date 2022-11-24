import styled from "styled-components";
export const WrapDailyDiscover = styled.div`
	margin: 1rem 0;
`;

export const DailyDiscoverHeader = styled.div`
	position: sticky;
	top: 9rem;
	z-index: 99;
	& > div {
		background-color: #fff;
		padding: 1.5rem;
		color: rgb(255, 0, 0, 0.7);
		text-transform: uppercase;
		text-align: center;
		font-size: 1.3rem;
		position: relative;
		&::after {
			content: "";
			width: 100%;
			height: 5px;
			position: absolute;
			bottom: 0;
			left: 0;
			background: rgb(255, 0, 0, 0.7);
		}
	}
`;
export const DailyDiscoverMain = styled.div`
	padding: 5px 2px;
	display: flex;
	flex-wrap: wrap;
`;
export const WrapDailyDiscoverMain = styled.div`
	width: 16.66%;
	padding: 5px;
`;
export const DailyDiscoverBottom = styled.div`
	margin: 2rem 0;
	display: flex;
	justify-content: center;
	& > div {
		display: inline-block;
		border: 1px solid rgb(0, 0, 0, 0.1);
		color: rgb(0, 0, 0, 0.6);
		padding: 1rem 14rem;
		background: #fff;
		&:hover {
			background: rgb(0, 0, 0, 0.01);
			cursor: pointer;
		}
	}
`;
