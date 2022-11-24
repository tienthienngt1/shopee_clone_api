import { Container } from "components/desktop/common/component";
import styled from "styled-components";
import { BACKGROUND_GRADIENT } from "variable";
import Sub from "./Sub";
import Main from "./Main";

const ComponentFullStyled = styled.div`
	background: ${BACKGROUND_GRADIENT};
`;

const WrapHeaderStyled = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99999;
`;

const Header = () => {
	return (
		<WrapHeaderStyled>
			<ComponentFullStyled>
				<Container>
					<Sub />
					<Main />
				</Container>
			</ComponentFullStyled>
		</WrapHeaderStyled>
	);
};

export default Header;
