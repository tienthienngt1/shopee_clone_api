import styled, { keyframes } from "styled-components";
type Props = {
	status: boolean;
};
const fade = keyframes`
0%{opacity: 0};
100%{opacity: 100}
`;

export const WrapToTopButton = styled.div<Props>`
	display: ${(props) => (props.status ? "inline-block" : "none")};
	padding: 1rem;
	border-radius: 50%;
	border: 1px solid rgb(0, 0, 0, 0.1);
	svg {
		color: rgb(0, 0, 0, 0.5);
	}
	background-color: #fff;
	position: fixed;
	right: 2rem;
	bottom: 1rem;
	z-index: 999999;
	cursor: pointer;
	animation: ${fade} 0.5s ease;
	@keyframe (fade) {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 100;
		}
	}
`;
