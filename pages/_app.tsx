import type { AppProps } from "next/app";
import { ThemeConfig, GlobalStyle } from "config";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeConfig>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeConfig>
	);
}

export default MyApp;
