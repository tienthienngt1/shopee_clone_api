import NextImage from "next/image";
import { Data, DataArr } from "redux/slice/footerLayout";
import { FooterItemDownload } from "../styled/footerItemStyled";
import {
	WrapFooterItem,
	FooterItemHeader,
	FooterItemTextLink,
	FooterItemLogo,
	FooterItemSocial,
} from "../styled";
import { Fragment } from "react";

type FooterListType = {
	data: Data;
};

const FooterList = ({ data }: FooterListType) => {
	if (data.text_link)
		return (
			<FooterItemTextLink>
				<ul>
					{data.text_link.map((text) => (
						<li key={text.text}>
							<a target="_blank" href={text.url} rel="noreferrer">
								{text.text}
							</a>
						</li>
					))}
				</ul>
			</FooterItemTextLink>
		);
	if (data.logo)
		return (
			<FooterItemLogo>
				{data.logo.map((l) => (
					<div key={l.image}>
						<div>
							<NextImage
								src={
									process.env.NEXT_PUBLIC_BASE_IMAGE_URL +
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
		);
	if (data.social_media)
		return (
			<FooterItemSocial>
				<ul>
					{data.social_media.map((so) => (
						<li key={so.image}>
							<a href={so.url} target="_blank" rel="noreferrer">
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
		);
	if (data.qr)
		return (
			<FooterItemDownload>
				<div>
					<NextImage
						src={
							process.env.NEXT_PUBLIC_BASE_IMAGE_URL +
							data.qr.qr_image
						}
						alt={data.qr.qr_url}
						layout="fill"
						priority
					/>
				</div>
				<div>
					{data.qr.extra_images.map((ex) => (
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
		);
	return <></>;
};

type FooterItemProps = {
	data: DataArr;
};

const FooterItem = ({ data }: FooterItemProps) => {
	return (
		<WrapFooterItem>
			{data.map((d) => (
				<Fragment key={d.title}>
					<FooterItemHeader>{d.title}</FooterItemHeader>
					<FooterList data={d} />
				</Fragment>
			))}
		</WrapFooterItem>
	);
};

export default FooterItem;
