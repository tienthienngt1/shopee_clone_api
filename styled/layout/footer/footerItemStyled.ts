import styled from "styled-components";
export const WrapFooterItem = styled.div`
	width: 25%;
`;
export const FooterItemHeader = styled.div`
	text-transform: uppercase;
	font-weight: 600;
	padding: 1rem 0;
	color: rgb(0, 0, 0, 0.8);
`;
export const FooterItemTextLink = styled.div`
	li {
		list-style: none;
		padding: 0.5rem 0;
		color: rgb(0, 0, 0, 0.7);
		a {
			font-size: 0.9rem;
			text-decoration: none;
			&:hover {
				color: #ee4d2d;
			}
		}
	}
`;
export const FooterItemLogo = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 3.33%;
	margin-bottom: 1rem;
	& > div {
		padding: 4px;
		width: 30%;
		padding: 5px;
		margin-bottom: 1rem;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
			rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
		div {
			width: 52px;
			height: 22px;
			position: relative;
			span {
				padding: 3px;
			}
		}
	}
`;
export const FooterItemSocial = styled.div`
	li {
		list-style: none;
		padding: 5px 0;
		a {
			padding: 2px;
			display: flex;
			&:hover {
				color: #ee4d2d;
			}
			& > div:first-child {
				width: 16px;
				height: 16px;
				position: relative;
				margin-right: 2px;
			}
		}
	}
`;
export const FooterItemDownload = styled.div`
	display: flex;
	& > div {
		&:first-child {
			width: 80px;
			height: 80px;
			position: relative;
			margin-right: 5px;
		}
		&:last-child {
			a {
				& > div {
					margin-bottom: 1rem;
					padding: 4px;
					box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
						rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
					& > div {
						width: 68px;
						height: 16px;
						position: relative;
					}
				}
			}
		}
	}
`;
