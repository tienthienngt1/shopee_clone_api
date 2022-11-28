import styled from "styled-components";
type Props = {
	status: boolean;
};
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
	right: 1rem;
	bottom: 1rem;
	z-index: 999999;
	cursor: pointer;
`;
