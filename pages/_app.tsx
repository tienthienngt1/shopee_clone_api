import type { AppProps } from "next/app";
import { ThemeConfig, GlobalStyle } from "config";
import { store } from "redux/store";
import { Provider } from "react-redux";
import ToTopButton from "components/commons/component/ToTopButton";
import MessFb from "components/commons/component/MessFb";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
	let persistor = persistStore(store);
	return (
		<>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<ThemeConfig>
						<Component {...pageProps} />
						<GlobalStyle />
						<ToTopButton />
					</ThemeConfig>
				</PersistGate>
			</Provider>
			{process.env.NODE_ENV === "production" ? <MessFb /> : ""}
			<ToastContainer />
		</>
	);
}

export default MyApp;
