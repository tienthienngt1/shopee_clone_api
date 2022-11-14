import type { NextPage } from "next";
import Head from "next/head";
import { FullHomeBanner } from "components/home/component";
import MainLayout from "layout/MainLayout";
import { useTheme } from "styled-components";

const Home: NextPage = () => {
	const theme = useTheme();
	return (
		<>
			<Head>
				<title>
					Shopee Việt Nam | Mua Và Bán Trên Ứng Dụng hoặc Website
					shopee.vn
				</title>
				<meta
					name="description"
					content="Sàn thương mại điện tử lớn nhất Việt Nam"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<FullHomeBanner />
			</MainLayout>
		</>
	);
};

export default Home;
