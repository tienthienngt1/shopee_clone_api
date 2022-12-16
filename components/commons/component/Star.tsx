import React, { Fragment } from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { WrapStar } from "../styled";

const percent = (star: number) => {
	let result = [];
	for (let i = 1; i <= star; i++) {
		result.push(2);
	}
	if (star - Math.floor(star) > 0.3 && star - Math.floor(star) < 0.8) {
		result.push(1);
	} else if (star - Math.floor(star) > 0.8) {
		result.push(2);
	}
	if (result.length < 5) {
		for (let i = result.length; i < 5; i++) {
			result.push(0);
		}
	}
	return result;
};

type Props = {
	star: number;
	font: string;
};

const Stars = ({ star, font, ...rest }: Props) => {
	let percentArr = percent(star);
	return (
		<WrapStar font={font}>
			{percentArr &&
				percentArr.map((p, i) => (
					<Fragment key={p + i + Math.random() * 999999999999}>
						{p === 2 ? (
							<StarFill />
						) : p === 1 ? (
							<StarHalf />
						) : (
							<Star />
						)}
					</Fragment>
				))}
		</WrapStar>
	);
};

export default Stars;
