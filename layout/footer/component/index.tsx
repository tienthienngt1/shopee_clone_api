import { Container } from "components/common/component";
import { useEffect } from "react";
import { useThunkDispatch } from "redux/store";
import { setFooterLayout } from "redux/slice/footerLayout";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { WrapFooter, WrapItem } from "../styled";
import FooterItem from "./FooterItem";
import Country from "./Country";
import FooterEnd from "./FooterEnd";

const Footer = () => {
	const dispatch = useThunkDispatch();
	const { data } = useSelector((state: RootState) => state.footerLayout);
	useEffect(() => {
		dispatch(setFooterLayout());
	}, [dispatch]);
	return (
		<>
			<WrapFooter>
				<Container>
					<WrapItem>
						{data.length > 0
							? data.map((d, i) => {
									return (
										<FooterItem key={d[0].title} data={d} />
									);
							  })
							: ""}
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
