import { FC, PropsWithChildren } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

const providerBackground = theme("mode", {
	light: "#fff",
	dark: "#1b1b1b",
});
const providerColor = theme("mode", {
	light: "#000",
	dark: "#fff",
});

const Provider = styled.div`
	/* background-color: ${providerBackground}; */
	color: ${providerColor};
`;

export const ThemeConfig: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider theme={{ mode: "light" }}>
			<Provider>{children}</Provider>
		</ThemeProvider>
	);
};
