import React, { useState } from "react";
import {
	WrapProductRateComment,
	WrapProductRateCommentPagination,
} from "../../../styled";
import Image from "next/image";
import Stars from "components/commons/component/Star";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {
	ChevronLeft,
	ChevronRight,
	HandThumbsUpFill,
} from "react-bootstrap-icons";

const ProductRateComment = () => {
	const [isDisplayImage, setDisplayImage] = useState(false);
	const [imagesData, setImagesData] = useState<{ original: string }[]>([]);
	const images = [
		{ original: "/freeTransport.png" },
		{ original: "/freeTransport.png" },
		{ original: "/freeTransport.png" },
		{ original: "/freeTransport.png" },
		{ original: "/freeTransport.png" },
	];
	const handleDisplayImage = () => {
		setDisplayImage(!isDisplayImage);
		setImagesData([{ original: "/freeTransport.png" }]);
	};
	return (
		<>
			<WrapProductRateComment>
				<div>
					<div>
						<Image
							src="/cicle.png"
							alt="avatar-comment"
							width={50}
							height={50}
						/>
					</div>
					<div>
						<div>tienthien</div>
						<Stars star={3} font="15px" />
					</div>
				</div>
				<div>
					<div>2022-12-21 06:13 | Phân loại hàng: Trắng</div>
					<div>awefwefwef.wae</div>
					<div>
						<div>
							<Image
								onClick={handleDisplayImage}
								src="/freeTransport.png"
								alt="avart_commenter"
								width={50}
								height={50}
							/>
						</div>
						<div>
							<Image
								src="/freeTransport.png"
								alt="avart_commenter"
								width={50}
								height={50}
							/>
						</div>
						<div>
							<Image
								src="/freeTransport.png"
								alt="avart_commenter"
								width={50}
								height={50}
							/>
						</div>
					</div>
					{isDisplayImage && (
						<ImageGallery
							showNav={true}
							showPlayButton={false}
							items={imagesData}
						/>
					)}
					<div>
						<HandThumbsUpFill /> &nbsp; 234
					</div>
				</div>
			</WrapProductRateComment>
			<WrapProductRateCommentPagination>
				<div>
					<ChevronLeft />
				</div>
				<div className="active">1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>...</div>
				<div>
					<ChevronRight />
				</div>
			</WrapProductRateCommentPagination>
		</>
	);
};

export default ProductRateComment;
