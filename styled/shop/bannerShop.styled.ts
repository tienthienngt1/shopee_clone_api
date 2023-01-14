import styled from "styled-components";
type Props = {
	aspectRatio: number;
};

export const WrapBannerShop = styled.div<Props>`
	position: relative;
	width: 100%;
	margin-top: 2rem;
	aspect-ratio: ${(props) => props.aspectRatio};
`;
