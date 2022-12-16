import Lottie from "react-lottie";
import styled from "styled-components";
import * as animationData from "lotties/searchNotFound.json";
import { useRouter } from "next/router";

const WrapSearchNotFound = styled.div`
	width: 100%;
	padding: 1rem;
	display: grid;
	place-items: center;
	p {
		font-size: 18px;
		color: rgb(0, 0, 0, 0.4);
	}
	& > div.clear_filter_button {
		margin-top: 1rem;
		padding: 1rem 2rem;
		background: #ee4d2d;
		color: #fff;
		cursor: pointer;
		font-size: 18px;
		&:hover {
			transform: translateY(-2px);
		}
	}
`;

const SearchNotFound = () => {
	const router = useRouter();
	const handleClearFilter = () => {
		router.push({
			pathname: router.pathname,
			query: {
				category: router.query.category,
			},
		});
	};
	return (
		<WrapSearchNotFound>
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData,
				}}
				width={300}
				height={300}
			/>
			<p>
				Hix. Không có sản phẩm nào. Bạn thử tắt điều kiện lọc và tìm lại
				nhé?
			</p>
			<p>or</p>
			<div className="clear_filter_button" onClick={handleClearFilter}>
				{" "}
				Xóa Bộ Lọc
			</div>
		</WrapSearchNotFound>
	);
};

export default SearchNotFound;
