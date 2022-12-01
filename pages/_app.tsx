import type { AppProps } from "next/app";
import { ThemeConfig, GlobalStyle } from "config";
import { store } from "redux/store";
import { Provider } from "react-redux";
import ToTopButton from "components/commons/component/ToTopButton";
import MessFb from "components/commons/component/MessFb";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<ThemeConfig>
					<Component {...pageProps} />
					<GlobalStyle />
				</ThemeConfig>
			</Provider>
			<ToTopButton />
			{/* <MessFb /> */}
		</>
	);
}

export default MyApp;
