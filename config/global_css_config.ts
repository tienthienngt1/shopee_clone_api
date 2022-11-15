import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
a {
	color: inherit;
	text-decoration: none;
}
body,
* {
    font-family: Helvetica Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi Zen Hei,Hiragino Sans GB,儷黑 Pro,LiHei Pro,Heiti TC,微軟正黑體,Microsoft JhengHei UI,Microsoft JhengHei,sans-serif;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-size: 13px;
    transition: all 0.2s;
}
body{
	background-color: #f5f5f5;
}
`;
