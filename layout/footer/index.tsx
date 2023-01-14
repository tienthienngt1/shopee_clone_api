import { Container } from "components/desktop/common/component";
import { WrapFooter, WrapItem } from "styled/layout/footer";
import FooterItem from "./FooterItem";
import Country from "./Country";
import FooterEnd from "./FooterEnd";
import { useGetFooterLayout } from "swrHooks/pages/useGetFooterLayout";

const Footer = () => {
	const { data } = useGetFooterLayout();
	return (
		<>
			<WrapFooter>
				<Container>
					<WrapItem>
						{data?.data?.pc?.map((d, i) => (
							<FooterItem
								key={
									d?.sections?.[0]?.title +
									Math.random() * 99999
								}
								data={d.sections}
							/>
						))}
					</WrapItem>
					<Country />
				</Container>
			</WrapFooter>
			<Container>
				<FooterEnd />
			</Container>
		</>
	);
};

export default Footer;
