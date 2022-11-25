import styled from "styled-components";
export const WrapPopularCollection = styled.div`
	margin: 1rem;
	background: #fff;
	padding: 1rem 0;
`;
export const PopularCollectionHeader = styled.div`
	color: rgb(0, 0, 0, 0.7);
	padding: 1rem;
	font-size: 1.3rem;
`;
export const PopularCollectionBody = styled.div`
	.swiper-slide {
		padding: 0 1rem;
		& > div {
			border: 1px solid rgb(0, 0, 0, 0.1);
			display: flex;
			flex-direction: column;
			align-items: center;
			aspect-ratio: 1/1.1;
			cursor: pointer;
			&:hover {
				transform: translateY(-1px);
			}
			& > div:first-child {
				aspect-ratio: 1/1;
				position: relative;
				width: 80%;
			}
			& > div:last-child {
				width: 100%;
				flex: 1;
				& > div:first-child {
					text-align: center;
					font-size: 1.3rem;
					padding: 1rem;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				& > div:last-child {
					padding-bottom: 1rem;
					text-align: center;
					color: rgb(0, 0, 0, 0.4);
					font-size: 1.2rem;
					span {
						color: rgb(255, 0, 0, 0.8);
						font-size: 1.4rem;
					}
				}
			}
		}
	}
`;
