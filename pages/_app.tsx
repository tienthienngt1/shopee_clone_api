import type { AppProps } from "next/app";
import { ThemeConfig, GlobalStyle } from "config";
import { store } from "redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeConfig>
				<Component {...pageProps} />
				<GlobalStyle />
			</ThemeConfig>
		</Provider>
	);
}

export default MyApp;
