import Item from "components/common/component/Item";
import React from "react";
import {
	RecommendHeader,
	RecommendMain,
	WrapRecommend,
	WrapRecommendMain,
} from "../styled/recommendStyled";

type Props = {};

const Recommend = (props: Props) => {
	return (
		<WrapRecommend>
			<RecommendHeader> gợi ý hôm nay</RecommendHeader>
			<RecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
				<WrapRecommendMain>
					<Item />
				</WrapRecommendMain>
			</RecommendMain>
		</WrapRecommend>
	);
};

export default Recommend;
