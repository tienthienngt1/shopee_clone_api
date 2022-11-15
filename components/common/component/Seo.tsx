import Head from "next/head";

type Props = {
	title: string;
	description: string;
};

export function Seo(props: Props) {
	return (
		<Head>
			<meta name="viewport" content="width=1240,shrink-to-fit=no" />
			<title>{props.title}</title>
			<meta name="title" content={props.title} />
			<meta name="description" content={props.description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://shopee.vn" />
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.description} />
			<meta
				property="og:image"
				content="https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepage/26c9324913c021677768c36975d635ef.png"
			/>
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://shopee.vn" />
			<meta property="twitter:title" content={props.title} />
			<meta property="twitter:description" content={props.description} />
			<meta
				property="twitter:image"
				content="https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepage/26c9324913c021677768c36975d635ef.png"
			/>
		</Head>
	);
}
