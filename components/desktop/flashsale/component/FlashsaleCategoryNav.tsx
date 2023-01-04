import React, { useCallback, useEffect, useState } from "react";
import {
	WrapExtraDetail,
	WrapFlashsaleCategoryNav,
} from "../styled/flashsaleCategoryNav";
import { CaretDownFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { RootState, useThunkDispatch } from "redux/store";
import { useRouter } from "next/router";
import { routerPush } from "func";
import { filterDataById } from "redux/slice/flashsale/allItemids";

type ExtraDetailT = {
	handleClick: (
		categoryid: number,
		replace?: {
			catname: string;
			image: string;
		}
	) => () => void;
	data?: {
		catid: number;
		catname: string;
		image: string;
	}[];
};

const ExtraDetail = ({ data, handleClick }: ExtraDetailT) => {
	return (
		<WrapExtraDetail>
			{data?.map((d) => (
				<div
					key={d.image + Math.random() * 9999999999}
					onClick={handleClick(d.catid, {
						catname: d.catname,
						image: d.image,
					})}
				>
					{d.catname}
				</div>
			))}
		</WrapExtraDetail>
	);
};

type PromotionSelectedT = {
	catid: number;
	catname: string;
	image: string;
}[];

const FlashsaleCategoryNav = () => {
	const [isHover, setHover] = useState(false);
	const [promotionSelected, setPromotionSelected] = useState<
		PromotionSelectedT | undefined
	>([]);
	const router = useRouter();
	const { data } = useSelector((state: RootState) => state.allSession);
	const dispatch = useThunkDispatch();

	// function filter to get categories
	const promotionSelectFilter = useCallback(
		(start: number, end?: number) => {
			if (!router.query.promotionId) return;
			if (data.length === 0) return;
			const promotionFilter = data.filter(
				(d) => d.promotionid.toString() === router.query.promotionId
			);
			return promotionFilter[0]?.categories?.slice(start, end);
		},
		[data, router.query.promotionId]
	);

	//set category first 6 element
	useEffect(() => {
		setPromotionSelected(promotionSelectFilter(0, 6));
	}, [setPromotionSelected, promotionSelectFilter]);

	const handleClick =
		(
			categoryid: number,
			replace?: {
				catname: string;
				image: string;
			}
		) =>
		() => {
			if (replace) {
				let result = promotionSelected;
				result?.pop();
				result?.push({ catid: categoryid, ...replace });
				setPromotionSelected(result);
			}
			routerPush(router, { ...router.query, categoryid }, false);
			dispatch(filterDataById(categoryid));
		};

	return (
		<WrapFlashsaleCategoryNav>
			{promotionSelected?.map((p) => (
				<div
					key={p.catname + Math.random() * 99999999}
					className={
						router.query.categoryid === p.catid.toString() ||
						(!router.query.categoryid && p.catid === 0)
							? "active"
							: ""
					}
					onClick={handleClick(p.catid)}
				>
					{p.catname}
				</div>
			))}
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				Thêm
				<CaretDownFill />
				{isHover && (
					<ExtraDetail
						data={promotionSelectFilter(6)}
						handleClick={handleClick}
					/>
				)}
			</div>
		</WrapFlashsaleCategoryNav>
	);
};

export default FlashsaleCategoryNav;
