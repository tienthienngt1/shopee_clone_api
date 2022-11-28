import { useEffect, useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";
import { WrapToTopButton } from "../styled";

const ToTopButton = () => {
	const [status, setStatus] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset >= 500) {
				if (status) return;
				setStatus(true);
			}
			if (window.pageYOffset <= 500) {
				if (!status) return;
				setStatus(false);
			}
		});
	}, [status]);
	return (
		<WrapToTopButton status={status} onClick={() => window.scrollTo(0, 0)}>
			<div>
				<ChevronUp />
			</div>
		</WrapToTopButton>
	);
};

export default ToTopButton;
