import styled from "styled-components";

type Star = {
	font: string;
};

export const WrapStar = styled.div<Star>`
	margin: 0.5rem 0;
	display: inline-block;
	svg {
		font-size: ${(props) => props.font};
		color: rgb(255, 167, 39);
		margin: 0 3px;
	}
`;
