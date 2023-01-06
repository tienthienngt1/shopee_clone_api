import styled from "styled-components";
export const WrapBreadcrumbs = styled.div`
	display: flex;
	align-items: center;
	& > div {
		color: #0055aa;
		padding: 5px;
		:hover {
			opacity: 0.6;
		}
	}
	& > p {
		opacity: 0.8;
	}
`;
