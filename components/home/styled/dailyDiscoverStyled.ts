import Item from "components/common/component/Item";
import styled from "styled-components";
export const WrapDailyDiscover = styled.div`
	margin: 1rem 0;
	margin-bottom: 500px;
`;

export const DailyDiscoverHeader = styled.div`
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
