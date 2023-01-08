import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Stars from "components/commons/component/Star";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {
	ChevronLeft,
	ChevronRight,
	HandThumbsUpFill,
} from "react-bootstrap-icons";
import {
	WrapProductRateComment,
	WrapProductRateCommentPagination,
} from "../../../styled";
import { useThunkDispatch } from "redux/store";
import { useRouter } from "next/router";
import {
	setLoadingComment,
	setProductRating,
} from "redux/slice/product/productRating";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Pagination from "components/commons/component/Pagination";
import { Loading } from "components/desktop/common/component";

type DisplayImageT = {
	images: string[];
	videos: {
		cover: string;
		url: string;
	}[];
};

const DisplayImage = ({ images, videos }: DisplayImageT) => {
	const [isDisplay, setDisplay] = useState(false);
	const [selectedData, setSelectedData] = useState<{
		type: string;
		key: number;
		original: string;
	}>();
	const handleDisplayImage =
		(key: number, videosClick = false) =>
		() => {
			if (key === selectedData?.key) {
				setDisplay(false);
				return;
			}
			!isDisplay && setDisplay(true);
			setSelectedData({
				type: videosClick ? "video" : "image",
				original: videosClick
					? videos[key].url
					: process.env.NEXT_PUBLIC_BASE_IMAGE_URL + images[key],
				key,
			});
		};
	return (
		<>
			<div>
				{videos?.map((v, k) => (
					<div
						key={v.cover + Math.random() * 999999}
						className="cover_video"
						onClick={handleDisplayImage(k, true)}
					>
						<img
							src={v.cover}
							alt={v.cover}
							width={50}
							height={50}
						/>
						<div>
							<Image
								src="/playbutton.png"
								alt="play_button"
								width={50}
								height={50}
							/>
						</div>
					</div>
				))}
				{images?.map((i, k) => (
					<div key={i + Math.random() * 9999999}>
						<Image
							onClick={handleDisplayImage(k)}
							src={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + i}
							alt={i}
							width={50}
							height={50}
						/>
					</div>
				))}
			</div>
			{isDisplay ? (
				selectedData?.type === "video" ? (
					<video controls>
						<source src={selectedData.original} />
					</video>
				) : (
					<ImageGallery
						showNav={true}
						showPlayButton={false}
						items={[{ original: selectedData?.original ?? "" }]}
					/>
				)
			) : (
				""
			)}
		</>
	);
};

const ProductRateComment = () => {
	const [selectedPage, setPage] = useState(1);
	const { data, selectedRating, status } = useSelector(
		(state: RootState) => state.productRating
	);
	const dispatch = useThunkDispatch();
	const router = useRouter();

	useEffect(() => {
		router.asPath && dispatch(setProductRating({ router: router.asPath }));
	}, [dispatch, router.asPath]);

	const handleSelectPage = (page: number) => {
		if (router.asPath) {
			dispatch(
				setProductRating({
					router: router.asPath,
					offset: page * 6 - 6,
				})
			);
			setPage(page);
		}
	};
	if (status === "loadComment") <Loading />;
	return (
		<>
			{data?.ratings?.map((r) => (
				<Fragment key={r.ctime + Math.random() * 999999999}>
					<WrapProductRateComment key={r.ctime}>
						<div>
							<div>
								<Image
									src={
										r.avatar
											? process.env
													.NEXT_PUBLIC_BASE_IMAGE_URL +
											  r.avatar
											: "/avatar.png"
									}
									alt="avatar-comment"
									width={50}
									height={50}
								/>
							</div>
							<div>
								<div>{r.username}</div>
								<Stars star={r.rating_star} font="15px" />
							</div>
						</div>
						<div>
							<div>
								{new Date(r.ctime * 1000).toLocaleString()} |
								Phân loại hàng: {r.model_name}
							</div>
							<div
								style={{
									whiteSpace: "pre-line",
									lineHeight: "20px",
								}}
							>
								{r.comment}
							</div>
							<DisplayImage videos={r.videos} images={r.images} />
							<div>
								<HandThumbsUpFill /> &nbsp;{" "}
								{r.like_count ?? "Hữu ích?"}
							</div>
						</div>
					</WrapProductRateComment>
				</Fragment>
			))}
			<WrapProductRateCommentPagination>
				<Pagination
					totalPage={selectedRating}
					elementPerPage={6}
					currentPage={selectedPage}
					handleSelectPage={handleSelectPage}
				/>
			</WrapProductRateCommentPagination>
		</>
	);
};

export default ProductRateComment;
