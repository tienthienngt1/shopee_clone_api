import styled from "styled-components";

const WrapStyled = styled.div`
	height: 100%;
	width: 100%;
	padding: 2rem;
	text-align: center;
`;

function ApiError() {
	return <WrapStyled>Api Error</WrapStyled>;
}

export { ApiError };
