import React, { useMemo, useState } from "react";
import { Props } from "../Breadcrumbs";
import { WrapProductInfoImage } from "../../styled";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {
	Facebook,
	Heart,
	Messenger,
	Pinterest,
	Twitter,
} from "react-bootstrap-icons";
import { convertNumberToK } from "func";

const ProductInfoImage = ({ data }: Props) => {
	const [isHover, setHover] = useState(false);
	const items = useMemo(
		() =>
			data?.images.map((i) => ({
				original: process.env.NEXT_PUBLIC_BASE_IMAGE_URL + i,
				thumbnail: process.env.NEXT_PUBLIC_BASE_IMAGE_URL + i,
			})),
		[data?.images]
	);
	const handleHover = () => setHover(!isHover);
	return (
		<WrapProductInfoImage
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			{items && items?.length > 1 && (
				<ImageGallery
					items={items}
					lazyLoad
					showPlayButton={false}
					showNav={isHover}
					showIndex
				/>
			)}
			<div>
				<div>
					Chia sẻ: <Messenger /> <Facebook /> <Pinterest />{" "}
					<Twitter />{" "}
				</div>
				<div>
					{" "}
					<Heart /> Đã thích (
					{convertNumberToK(data?.liked_count ?? 100)})
				</div>
			</div>
		</WrapProductInfoImage>
	);
};

export default ProductInfoImage;
