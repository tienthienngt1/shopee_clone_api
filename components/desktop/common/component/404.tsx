import Lottie from "react-lottie";
import * as Data from "lotties/pageNotFound.json";
import styled from "styled-components";
import Link from "next/link";

const Button = styled.div`
	display: flex;
	justify-content: center;
	a {
		padding: 0.9rem;
		color: #fff;
		background: #ee4d2d;
		margin: 1rem auto;
		&:hover {
			opacity: 0.9;
		}
	}
`;

const Error404 = () => {
	return (
		<>
			<Lottie
				style={{ marginTop: "1rem" }}
				options={{
					loop: true,
					autoplay: true,
					animationData: Data,
				}}
				width={300}
				height={300}
			/>
			<p style={{ textAlign: "center", opacity: "0.7" }}>
				It looks like something is missing!
			</p>
			<Button>
				<Link href="/">Trở về trang chủ</Link>
			</Button>
		</>
	);
};

export default Error404;
