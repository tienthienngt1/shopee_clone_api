import { Swiper, SwiperProps } from "swiper/react";
import { WrapSlide } from "../styled/slideStyled";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import { FunctionComponent } from "react";

interface Props extends SwiperProps {
	id: string;
}

const Slide: FunctionComponent<Props> = (props) => {
	return (
		<WrapSlide id={props.id}>
			<Swiper
				{...props}
				navigation={{
					prevEl: `.swiper-button-prev-${props.id}-custom`,
					nextEl: `.swiper-button-next-${props.id}-custom`,
				}}
			>
				{props.children}
			</Swiper>
			<div className={`swiper-button-prev-${props.id}-custom`}>
				<ChevronLeft />
			</div>
			<div className={`swiper-button-next-${props.id}-custom`}>
				<ChevronRight />
			</div>
		</WrapSlide>
	);
};

export { Slide };
