import { Container } from "components/desktop/common/component";
import styled from "styled-components";
import { BACKGROUND_GRADIENT } from "variable";
import Sub from "./Sub";
import Main from "./Main";

const ComponentFullStyled = styled.div`
	background: ${BACKGROUND_GRADIENT};
`;

const WrapHeaderStyled = styled.div<HeaderT>`
	width: 100%;
	${(props) =>
		props.fixed &&
		`
        z-index: 99999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    `}
`;
type HeaderT = {
	fixed: boolean;
};

const Header = ({ fixed }: HeaderT) => {
	return (
		<WrapHeaderStyled fixed={fixed}>
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
