import styled from "styled-components";

export const WrapItem = styled.div`
	background-color: #fff;
	cursor: pointer;
	display: flex;
	height: 100%;
	flex-direction: column;
	box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%);
	&:hover {
		border-radius: 3px;
		transform: translateY(-2px);
		border: 1px solid rgb(242, 82, 32);
	}
`;

export const ItemHeader = styled.div`
	flex-shrink: 0;
	width: 100%;
	aspect-ratio: 1/1;
	position: relative;
	padding: 5px;
	.item_is_official {
		background-color: rgb(242, 82, 32);
		display: inline;
		color: #fff;
		padding: 0 4px;
		position: absolute;
		top: 10px;
		left: -5px;
		&::before {
			content: "";
			position: absolute;
			left: 0;
			bottom: -5px;
			width: 5px;
			height: 10px;
			clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 50%);
			background: rgb(242, 80, 10);
		}
	}
	.item_discount {
		position: absolute;
		top: 0px;
		right: 0px;
		font-size: 12px;
		opacity: 0.9;
		background-color: #ffd839;
		opacity: 0.8;
		color: rgb(255, 0, 0, 0.8);
		clip-path: polygon(100% 0, 100% 100%, 50% 90%, 0 100%, 0 0);
		width: 3rem;
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
	.item_sub_image {
		width: 100%;
		height: 100%;
	}
	.item_image {
		.Lazyload {
			position: relative;
		}
	}
`;
export const ItemFooter = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 5px;
	.item_footer_name {
		display: inline-block;
		word-wrap: break-word;
		white-space: normal;
		overflow: hidden;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.item_footer_info {
		display: flex;
		justify-content: space-between;
		padding-top: 1rem;
		& > div:first-child {
			color: #ee4d2d;
			font-size: 1.4rem;
		}
		& > div:last-child {
			color: rgb(0, 0, 0, 0.54);
			span {
				text-transform: lowercase;
			}
		}
	}
`;
export const FindSameProduct = styled.div``;
