import styled from "styled-components";
export const WrapProductRateComment = styled.div`
	padding: 2rem;
	& > div:first-child {
		display: flex;
		& > div:first-child {
			width: 50px;
			display: flex;
			align-items: center;
		}
		& > div:last-child {
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			svg {
				color: #ee4d2d;
				margin: 0;
			}
		}
	}
	& > div:last-child {
		justify-content: flex-start;
		padding-left: 60px;
		& > div:first-child {
			color: rgb(0, 0, 0, 0.5);
		}
		& > div:nth-child(2) {
			padding: 1rem 0;
		}
		& > div:nth-child(3) {
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
			cursor: pointer;
		}
		.image-gallery {
			width: 60%;
			margin: 1rem 0;
		}
		& > div:last-child {
			margin: 1rem 0;
			display: flex;
			align-items: center;
			svg {
				cursor: pointer;
				font-size: 15px;
				color: rgb(0, 0, 0, 0.5);
			}
		}
	}
	border-bottom: 1px solid rgb(0, 0, 0, 0.1);
`;

export const WrapProductRateCommentPagination = styled.div`
	margin: 2rem 0;
	display: flex;
	justify-content: flex-end;
	& > div {
		padding: 5px 10px;
		margin: 0 5px;
		cursor: pointer;
		&:hover {
			color: #ee4d2d;
		}
	}
	& > div.active {
		background: #ee4d2d;
		border-radius: 3px;
		color: #fff;
	}
	& > div:first-child,
	& > div:last-child {
		border: 1px solid rgb(0, 0, 0, 0.1);
	}
`;
