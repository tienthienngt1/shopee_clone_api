import { ReactNode, useState } from "react";
import { WrapMoreView } from "../../styled";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

type MoreViewType = {
	children: ReactNode;
	display?: boolean;
};

const MoreView = ({ children, display }: MoreViewType) => {
	const [status, setStatus] = useState(false);
	return (
		<WrapMoreView status={status}>
			{children}
			{display && (
				<span onClick={() => setStatus(!status)}>
					{!status ? (
						<>
							Xem thêm &nbsp; <ChevronDown />
						</>
					) : (
						<>
							Thu gọn &nbsp; <ChevronUp />
						</>
					)}
				</span>
			)}
		</WrapMoreView>
	);
};
export default MoreView;
