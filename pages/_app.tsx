import type { AppProps } from "next/app";
import { ThemeConfig, GlobalStyle } from "config";
import { store, persistor } from "redux/store";
import { Provider } from "react-redux";
import ToTopButton from "components/commons/component/ToTopButton";
import MessFb from "components/commons/component/MessFb";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { WIDTH_MAX } from "variable";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content={`width=${WIDTH_MAX},shrink-to-fit=no`}
				/>
			</Head>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Component {...pageProps} />
					<GlobalStyle />
					<ToTopButton />
				</PersistGate>
			</Provider>
			{process.env.NODE_ENV === "production" ? <MessFb /> : ""}
			<ToastContainer />
		</>
	);
}

export default MyApp;
