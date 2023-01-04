import styled from "styled-components";
export const WrapFlashsaleHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	background: #fff;
	box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
	position: sticky;
	top: 0;
	z-index: 99;
	& > div {
		position: relative;
		&,
		& > div {
			display: flex;
			align-items: center;
		}
		.flashsale_header {
			&_logo {
				margin-right: 1rem;
			}
			&_text {
				color: rgb(0, 0, 0, 0.8);
				&,
				svg {
					font-size: 16px;
				}
			}
		}
		&:before,
		&:after {
			position: absolute;
			content: "";
			width: 30px;
			top: 50%;
			border-top: 1px solid rgb(0, 0, 0, 0.5);
		}
		&:before {
			left: -40px;
		}
		&:after {
			right: -40px;
		}
	}
`;
