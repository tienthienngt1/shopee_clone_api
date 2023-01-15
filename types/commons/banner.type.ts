export type BatchListBySpacesT = {
	data: {
		space_banners: {
			space_key: string;
			banners: {
				image_hash: string;
				target_url: string;
				image_url: string;
			}[];
		}[];
	};
};

export type BatchListT = {
	data: {
		banners: {
			type: string;
			banners?: {
				banner_image: string;
				navigate_params: {
					url: string;
					navbar: {
						title: string;
					};
				};
			}[];
		}[];
	};
};
