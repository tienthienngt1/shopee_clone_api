import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import {
	WrapFlashSaleStyled,
	FlashSaleHeaderStyled,
	FlashSaleMainStyled,
	WrapSwiperSlide,
	WrapCountDown,
	CountdownFirstNumber,
	CountdownLastNumber,
} from "../styled";
import flashSaleLogo from "public/flashSaleLogo.png";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { RootState } from "redux/store";
import { Data, Session } from "redux/slice/home/flashSale";
import { ChevronRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Slide } from "components/desktop/common/component";
import LazyLoad from "react-lazy-load";
import { useRouter } from "next/router";

type ItemType = {
	sale: Data;
};

const Item = (props: ItemType) => (
	<WrapSwiperSlide
		percent={
			((props.sale.flash_sale_stock - props.sale.stock) /
				props.sale.flash_sale_stock) *
			100
		}
	>
		<LazyLoad>
			<div className="swiper_slide_header">
				<Image
					src={
						process.env.NEXT_PUBLIC_BASE_IMAGE_URL +
						props.sale.image
					}
					alt={props.sale.name}
					layout="fill"
				/>
			</div>
		</LazyLoad>
		<div className="swiper_slide_footer">
			<div className="swiper_slide_footer_price">
				{(props.sale.price / 100000)
					.toLocaleString("en-US", {
						style: "currency",
						currency: "VND",
					})
					.replace(/[,]/g, ".")}
			</div>
			<div className="swiper_slide_footer_progress">
				<div>
					ĐÃ BÁN {props.sale.flash_sale_stock - props.sale.stock}
				</div>
				<div></div>
			</div>
		</div>
		<div className="swiper_slide_discount">{props.sale.raw_discount}%</div>
	</WrapSwiperSlide>
);

type CountDownType = {
	session?: Session;
};

export function CountDown({ session }: CountDownType) {
	const [h, seth] = useState<string[]>(["0", "0"]);
	const [m, setm] = useState<string[]>(["0", "0"]);
	const [s, sets] = useState<string[]>(["0", "0"]);
	const convertMsToTime = useCallback((milliseconds: number) => {
		const padTo2Digits = (num: number) => {
			return num.toString().padStart(2, "0");
		};
		let seconds = Math.floor(milliseconds / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(milliseconds / 1000 / 3600);
		seconds = seconds % 60;
		minutes = minutes % 60;

		return {
			h: padTo2Digits(hours),
			m: padTo2Digits(minutes),
			s: padTo2Digits(seconds),
		};
	}, []);
	useEffect(() => {
		if (!session?.end_time) return;
		const id = setInterval(() => {
			const time = session?.end_time * 1000 - new Date().getTime();
			if (time < 0) {
				seth(["0", "0"]);
				setm(["0", "0"]);
				sets(["0", "0"]);
				return;
			}
			const timeObj = convertMsToTime(time);
			const hArr = timeObj.h.split("");
			const mArr = timeObj.m.split("");
			const sArr = timeObj.s.split("");
			seth(hArr);
			setm(mArr);
			sets(sArr);
		}, 1000);
		return () => clearInterval(id);
	}, [session?.end_time, convertMsToTime]);
	const firstNumberArr = [5, 4, 3, 2, 1, 0];
	const secondNumberArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
	return (
		<WrapCountDown>
			<div className="count_down-hour">
				<CountdownFirstNumber value={h[0]}>
					{firstNumberArr.map((num, key) => (
						<div key={Math.floor(Math.random() * 9999999) + key}>
							{num}
						</div>
					))}
				</CountdownFirstNumber>
				<CountdownLastNumber value={h[1]}>
					{secondNumberArr.map((num, key) => (
						<div key={Math.floor(Math.random() * 9999999) + key}>
							{num}
						</div>
					))}
				</CountdownLastNumber>
			</div>
			<div className="count_down-minutes">
				<CountdownFirstNumber value={m[0]}>
					{firstNumberArr.map((num, key) => (
						<div key={Math.floor(Math.random() * 9999999) + key}>
							{num}
						</div>
					))}
				</CountdownFirstNumber>
				<CountdownLastNumber value={m[1]}>
					{secondNumberArr.map((num, key) => (
						<div key={Math.floor(Math.random() * 9999999) + key}>
							{num}
						</div>
					))}
				</CountdownLastNumber>
			</div>
			<div className="count_down-seconds">
				<CountdownFirstNumber value={s[0]}>
					{firstNumberArr.map((num, key) => (
						<div key={Math.floor(Math.random() * 9999999) + key}>
							{num}
						</div>
					))}
				</CountdownFirstNumber>
				<CountdownLastNumber value={s[1]}>
					{secondNumberArr.map((num, key) => (
						<div key={Math.floor(Math.random() * 9999999) + key}>
							{num}
						</div>
					))}
				</CountdownLastNumber>
			</div>
		</WrapCountDown>
	);
}

export function FlashSale() {
	const router = useRouter();
	const { data, session } = useSelector(
		(state: RootState) => state.flashSale
	);
	return (
		<WrapFlashSaleStyled>
			<FlashSaleHeaderStyled>
				<div>
					<Image
						src={flashSaleLogo}
						alt="flash_sale_log"
						width={120}
						height={25}
						priority
					/>
					<CountDown session={session as Session} />
				</div>
				<div>
					Xem Tất Cả <ChevronRight />
				</div>
			</FlashSaleHeaderStyled>
			<FlashSaleMainStyled>
				<Slide
					id="flash_sale"
					modules={[Navigation]}
					slidesPerView={6}
					slidesPerGroup={5}
					spaceBetween={10}
					allowTouchMove={false}
				>
					{data?.[0]
						? data.map((sale: Data) => (
								<SwiperSlide
									key={sale.itemid}
									onClick={() =>
										router.push({
											pathname: "flashsale",
											query: {
												itemid: sale.itemid,
												promotionId: sale.promotionid,
											},
										})
									}
								>
									<Item sale={sale} />
								</SwiperSlide>
						  ))
						: ""}
				</Slide>
			</FlashSaleMainStyled>
		</WrapFlashSaleStyled>
	);
}
