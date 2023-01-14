import { useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import styled from "styled-components";

type HoverViewT = {
	title: string;
	cat: { title: string; id: number }[];
	clickFunc: (id: number) => () => void;
};

const WrapHoverView = styled.div`
	position: relative;
	display: inline-block;
	.show_category {
		position: absolute;
		top: 100%;
		left: -20px;
		width: 200px;
		z-index: 99999;
		& > div {
			margin-top: 10px;
			background: #fff;
			& > div {
				padding: 10px;
				:hover {
					cursor: pointer;
					opacity: 0.7;
				}
			}
		}
	}
`;

const HoverView = ({ title, cat, clickFunc }: HoverViewT) => {
	const [isShowCat, setShowCat] = useState<boolean>(false);

	return (
		<WrapHoverView
			onMouseEnter={() => setShowCat(true)}
			onMouseLeave={() => setShowCat(false)}
		>
			{title} <CaretDownFill />
			{isShowCat && (
				<div className="show_category">
					<div>
						{cat.map((c) => (
							<div
								key={c.title + Math.random() * 9999999}
								onClick={clickFunc(c.id)}
							>
								{c.title}
							</div>
						))}
					</div>
				</div>
			)}
		</WrapHoverView>
	);
};

export default HoverView;
