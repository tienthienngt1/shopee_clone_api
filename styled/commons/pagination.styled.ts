import styled from "styled-components";
export const WrapPagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	& > div {
		flex-shrink: 1;
		padding: 5px 10px;
		border: 1px solid rgb(0, 0, 0, 0.2);
		margin: 0 5px;
		border-radius: 3px;
		color: rgb(0, 0, 0, 0.6);
		cursor: pointer;
		user-select: none;
		:hover {
			opacity: 0.7;
		}
	}
	& > div.active {
		color: #fff;
		background: #ee4d2d;
	}
	& > div.disable {
		cursor: no-drop;
		opacity: 0.3;
	}
`;
