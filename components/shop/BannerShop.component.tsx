import Image from "next/image";
import { WrapBannerShop } from "styled/shop";

type BannerShopT = {
	url: string | undefined;
	aspectRatio: number | undefined;
};

const BannerShop = ({ url, aspectRatio }: BannerShopT) => {
	return (
		<WrapBannerShop aspectRatio={aspectRatio ?? 1}>
			<Image
				src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${
					url ?? "vn-11134210-23010-rswi8erwezlvc7"
				}`}
				alt="banner_shop"
				layout="fill"
			/>
		</WrapBannerShop>
	);
};

export default BannerShop;
