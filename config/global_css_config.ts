import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
a {
	color: inherit;
	text-decoration: none;
}
body,
* {
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-size: 13px;
}
html {
	background-color: #f5f5f5;
}
`;
