export type SectionsT = {
	title: string;
	qr: {
		extra_images: {
			image: string;
			url: string;
		}[];
		qr_image: string;
		qr_url: string;
	};
	logo: {
		image: string;
		url: string;
	}[];
	simple_section: {
		image: string;
		text: string;
		url: string;
	};
	social_media: {
		image: string;
		text: string;
		url: string;
	}[];
	text_link: {
		text: string;
		url: string;
	}[];
	type: number;
};

export type GetFooterLayoutT = {
	data: {
		pc: {
			sections: SectionsT[];
		}[];
	};
};

export type GetCategoryTreeDataT = {
	data: {
		category_list: {
			catid: number;
			display_name: string;
			image: string;
			children: {
				catid: number;
				display_name: string;
				image: string;
				parent_catid: number;
			}[];
		}[];
	};
};
