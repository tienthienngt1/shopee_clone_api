import { Container } from "components/common/component";
import styled from "styled-components";
import { BACKGROUND_GRADIENT } from "variable";
import Sub from "./Sub";
import Main from "./Main";

const ComponentFullStyled = styled.div`
	background: ${BACKGROUND_GRADIENT};
`;

const WrapHeaderStyled = styled(Container)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;

const Header = () => {
	return (
		<ComponentFullStyled>
			<WrapHeaderStyled>
				<Sub />
				<Main />
			</WrapHeaderStyled>
		</ComponentFullStyled>
	);
};

export default Header;
