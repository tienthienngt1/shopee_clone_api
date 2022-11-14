import {
	WrapCategoryHomeStyled,
	TitleCategoryHomeStyled,
	ItemCategoryHomeStyled,
} from "../styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

type Props = {};

export default function CategoryHome({}: Props) {
	return (
		<WrapCategoryHomeStyled>
			<TitleCategoryHomeStyled>DANH MỤC</TitleCategoryHomeStyled>
			<ItemCategoryHomeStyled>
				<Swiper
					allowTouchMove={true}
					navigation={{
						nextEl: ".swiper-button-next-custom",
						prevEl: ".swiper-button-prev-custom",
					}}
					slidesPerView={10}
					grid={{
						rows: 2,
					}}
					slidesPerGroup={3}
					// spaceBetween={1}
					modules={[Grid, Autoplay, Navigation]}
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide>
					<SwiperSlide>Slide 10</SwiperSlide>
					<SwiperSlide>Slide 11</SwiperSlide>
					<SwiperSlide>Slide 12</SwiperSlide>
					<SwiperSlide>Slide 13</SwiperSlide>
					<SwiperSlide>Slide 14</SwiperSlide>
					<SwiperSlide>Slide 15</SwiperSlide>
					<SwiperSlide>Slide 16</SwiperSlide>
					<SwiperSlide>Slide 17</SwiperSlide>
					<SwiperSlide>Slide 18</SwiperSlide>
					<SwiperSlide>Slide 19</SwiperSlide>
					<SwiperSlide>Slide 20</SwiperSlide>
					<SwiperSlide>Slide 21</SwiperSlide>
					<SwiperSlide>Slide 22</SwiperSlide>
					<SwiperSlide>Slide 23</SwiperSlide>
					<SwiperSlide>Slide 24</SwiperSlide>
					<SwiperSlide>Slide 25</SwiperSlide>
					<SwiperSlide>Slide 26</SwiperSlide>
				</Swiper>
				<div className="swiper-button-prev-custom"></div>
				<div className="swiper-button-next-custom"></div>
			</ItemCategoryHomeStyled>
		</WrapCategoryHomeStyled>
	);
}
