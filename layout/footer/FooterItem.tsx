import { Fragment } from "react";
import NextImage from "next/image";
import {
	FooterItemDownload,
	WrapFooterItem,
	FooterItemHeader,
	FooterItemTextLink,
	FooterItemLogo,
	FooterItemSocial,
} from "styled/layout/footer";
import { SectionsT } from "types/commons/pages.type";

type FooterListT = {
	data: SectionsT[];
	title: string;
	type: number;
};

const FooterList = ({ data, title, type }: FooterListT) => {
	return (
		<>
			{data.map((d) => (
				<Fragment key={d.title + Math.random() * 99999}>
					{type === 0 && (
						<FooterItemTextLink>
							<ul>
								{d.text_link.map((text) => (
									<li key={text.text}>
										<a
											target="_blank"
											href={text.url}
											rel="noreferrer"
										>
											{text.text}
										</a>
									</li>
								))}
							</ul>
						</FooterItemTextLink>
					)}
					{title === d.title && (
						<FooterItemLogo>
							{d.logo.map((l) => (
								<div key={l.image}>
									<div>
										<NextImage
											src={
												process.env
													.NEXT_PUBLIC_BASE_IMAGE_URL +
												l.image
											}
											alt={l.url}
											layout="fill"
											priority
										/>
									</div>
								</div>
							))}
						</FooterItemLogo>
					)}
					{type === 3 && (
						<FooterItemSocial>
							<ul>
								{d.social_media.map((so) => (
									<li key={so.image}>
										<a
											href={so.url}
											target="_blank"
											rel="noreferrer"
										>
											<div>
												<NextImage
													src={
														process.env
															.NEXT_PUBLIC_BASE_IMAGE_URL +
														so.image
													}
													alt={so.url}
													layout="fill"
													priority
												/>
											</div>
											<div>{so.text}</div>
										</a>
									</li>
								))}
							</ul>
						</FooterItemSocial>
					)}
					{type === 4 && (
						<FooterItemDownload>
							<div>
								<NextImage
									src={
										process.env.NEXT_PUBLIC_BASE_IMAGE_URL +
										d.qr.qr_image
									}
									alt={d.qr.qr_url}
									layout="fill"
									priority
								/>
							</div>
							<div>
								{d.qr.extra_images.map((ex) => (
									<a
										href={ex.url}
										key={ex.image}
										target="_blank"
										rel="noreferrer"
									>
										<div>
											<div>
												<NextImage
													src={
														process.env
															.NEXT_PUBLIC_BASE_IMAGE_URL +
														ex.image
													}
													alt={ex.url}
													layout="fill"
													priority
												/>
											</div>
										</div>
									</a>
								))}
							</div>
						</FooterItemDownload>
					)}
				</Fragment>
			))}
		</>
	);
};

type FooterItemT = {
	data: SectionsT[];
};

const FooterItem = ({ data }: FooterItemT) => {
	return (
		<WrapFooterItem>
			{data?.map((d) => (
				<Fragment key={d.title}>
					<FooterItemHeader>{d.title}</FooterItemHeader>
					<FooterList data={data} title={d.title} type={d.type} />
				</Fragment>
			))}
		</WrapFooterItem>
	);
};

export default FooterItem;
