import { useEffect, useState } from "react";
import { WrapCategoryBannerStyled } from "../styled";
import Image from "next/image";
import axios from "axios";

const CategoryBanner = () => {
	const [categoryBanner, setCategoryBanner] = useState<any>();
	useEffect(() => {
		axios
			.post("/api/v4/banner/batch_list", {
				types: [{ type: "pc_home_squares" }],
			})
			.then((res) => setCategoryBanner(res?.data?.data?.banners?.[0]))
			.catch((err) => console.log(err));
	}, []);
	return (
		<WrapCategoryBannerStyled>
			{categoryBanner &&
				categoryBanner?.banners.map((res: any) => (
					<div key={res.id}>
						<div>
							<Image
								src={res.banner_image}
								alt={res.navigate_params.navbar.title.vi}
								width="40"
								height="40"
							/>
						</div>
						<div>
							{JSON.parse(res.navigate_params.navbar.title).vi}
						</div>
					</div>
				))}
		</WrapCategoryBannerStyled>
	);
};

export default CategoryBanner;
